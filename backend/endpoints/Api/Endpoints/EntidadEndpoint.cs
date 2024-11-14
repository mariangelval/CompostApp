using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Endpoints
{
    public static class EntidadEndpoint
    {
        public static RouteGroupBuilder MapEntidadEndpoints(this RouteGroupBuilder app)
        {
            // ------------------------------- Entidades -----------------------------------------
            // OBTENER UNA LISTA DE ENTIDADES
app.MapGet("/entidades", (CompostAppContext context) =>
{
    var soloEntidades = context.Entidads.Where(e => e.Habilitado == true).Select(e => new
    {
        e.Identidad,
        e.Calle,
        e.Altura,
        e.Nombre,
        e.Email,
        e.Contrasena,
    }).ToList();
    return Results.Ok(soloEntidades);
}).WithTags("Entidad");

// LEER TODAS LAS ENTIDADES Y LOS PEDIDOS DE CADA UNA
app.MapGet("/entidades-compost", (CompostAppContext context) =>
{
    return Results.Ok(context.Entidads);
})
.WithTags("Entidad");

// BUSCAR ENTIDAD POR NOMBRE
/*app.MapGet("/entidades/{nombre}", (string nombre) =>
{
    var entidadEncontrada = entidades.Where(e => e.nombre.Contains(nombre, StringComparison.OrdinalIgnoreCase))
                                     .Select(e => new
                                     {
                                         e.idEntidad,
                                         e.calle,
                                         e.altura,
                                         e.nombre,
                                         e.email,
                                         e.contrasena,
                                     }).ToList();

    if (entidadEncontrada.Count == 0)
    {
        return Results.NotFound("No se encontró ningún instituto con ese nombre.");
    }
    
    return Results.Ok(entidadEncontrada);
}).WithTags("Entidad");*/


// AGREGAR UNA NUEVA ENTIDAD
app.MapPost("/entidad", ([FromBody] Entidad entidad, CompostAppContext context) =>
{
    context.Entidads.Add(entidad);
    context.SaveChanges();
    return Results.Ok(entidad);
})
.WithTags("Entidad");

// OBTENER RECOLECCIONES PENDIENTES
app.MapGet("/entidades-compost/recolecciones-pendientes", (CompostAppContext context) =>
{
    // Filtrar las entidades con recolecciones pendientes
    var recoleccionesPendientes = context.Entidads
        .SelectMany(e => e.Compostentidads)  // Seleccionar todas las compostentidades
        .Where(c => c.Retirado.HasValue && !c.Retirado.Value)  // Filtrar las recolecciones no retiradas
        .Select(c => new
        {
            Nombre = context.Entidads.Where(e => e.Identidad == c.Identidad).Select(e => e.Nombre).FirstOrDefault(),  // Obtener el nombre de la entidad sin el operador de propagación nula
            Fechapedido = c.Fechapedido,  // Fecha del pedido
            Obspedido = c.Obspedido,
            Recoleccion = c.Recoleccion,
            Retirado = c.Retirado == true ? "SI" : "NO",
            Obsretirado = c.Obsretirado
        })
        .ToList();

    // Verificar si hay datos
    if (recoleccionesPendientes.Count() == 0)
    {
        return Results.NotFound("No hay recolecciones pendientes.");
    }

    return Results.Ok(recoleccionesPendientes);
})
.WithTags("Entidad");



// EDITAR RECOLECCIONES (ASIGNARLES UNA FECHA DE RETIRO O MARCARLOS COMO RETIRADOS)
app.MapPut("/entidades-compost/pedidos", async (int idCompostEntidad, Compostentidad compostEntidadActualizado, CompostAppContext context) =>
{
    // Verificar si el idCompostEntidad del cuerpo es distinto al id en la query
    if (compostEntidadActualizado.Idcompostentidad != 0 && compostEntidadActualizado.Idcompostentidad != idCompostEntidad)
    {
        return Results.BadRequest("No se permite modificar el idCompostEntidad.");
    }

    // Buscar el pedido de compost por idCompostEntidad
    var entidadAActualizar = await context.Compostentidads
        .FirstOrDefaultAsync(c => c.Idcompostentidad == idCompostEntidad);

    if (entidadAActualizar == null)
    {
        return Results.NotFound($"No se encontró un pedido con el id {idCompostEntidad}."); // Código 404
    }

    // Actualizar solo los campos proporcionados (null-safe), sin modificar el idCompostEntidad
    if (compostEntidadActualizado.Kilos.HasValue)
        entidadAActualizar.Kilos = compostEntidadActualizado.Kilos.Value;

    if (compostEntidadActualizado.Fechapedido != default(DateTime))
        entidadAActualizar.Fechapedido = compostEntidadActualizado.Fechapedido;

    if (!string.IsNullOrEmpty(compostEntidadActualizado.Obspedido))
        entidadAActualizar.Obspedido = compostEntidadActualizado.Obspedido;

    if (compostEntidadActualizado.Recoleccion.HasValue)
        entidadAActualizar.Recoleccion = compostEntidadActualizado.Recoleccion;

    if (compostEntidadActualizado.Retirado.HasValue)
        entidadAActualizar.Retirado = compostEntidadActualizado.Retirado.Value;

    if (!string.IsNullOrEmpty(compostEntidadActualizado.Obsretirado))
        entidadAActualizar.Obsretirado = compostEntidadActualizado.Obsretirado;

    // Guardar los cambios en la base de datos
    await context.SaveChangesAsync();

    return Results.Ok(entidadAActualizar); // Código 200
})
.WithTags("Entidad");



// EDITAR UNA ENTIDAD POR ID 
app.MapPut("/entidades/{IdEntidad}", ([FromQuery]int IdEntidad, [FromBody] Entidad entidad, CompostAppContext context) =>
{
    var entidadAActualizar = context.Entidads.FirstOrDefault(e => e.Identidad == IdEntidad);
    // Verificar si la entidad existe
    if (entidadAActualizar == null)
    {
        return Results.NotFound(); // 404 Not Found
    }
    // Verificar si se está intentando modificar el id
    if (entidad.Identidad != IdEntidad)
    {
        return Results.BadRequest(); // 400 Bad Request
    }
    // Modificar las propiedades de la entidad sin incluir pedidos
    entidadAActualizar.Calle = entidad.Calle;
    entidadAActualizar.Altura = entidad.Altura;
    entidadAActualizar.Nombre = entidad.Nombre;
    entidadAActualizar.Email = entidad.Email;
    entidadAActualizar.Contrasena = entidad.Contrasena;
    context.SaveChanges();
    // Devolver solo los datos de la entidad, excluyendo pedidos
    var response = new 
    {
        entidadAActualizar.Identidad,
        entidadAActualizar.Calle,
        entidadAActualizar.Altura,
        entidadAActualizar.Nombre,
        entidadAActualizar.Email,
        entidadAActualizar.Contrasena
    };

    // Devolver 204 No Content si la actualización es exitosa
    return Results.Ok(response); // 200 Ok
}).WithTags("Entidad");


// BORRAR UNA ENTIDAD
app.MapDelete("/entidad", ([FromQuery] int idEntidad, CompostAppContext context) =>
{
    var EntidadAEliminar = context.Entidads.FirstOrDefault(e => e.Identidad == idEntidad);
    if (EntidadAEliminar != null)
    {
        EntidadAEliminar.Habilitado = false;
        context.SaveChanges();
        return Results.Ok(context.Entidads); //Codigo 200
    }
    else
    {
        return Results.NotFound(); //Codigo 404
    }
})
    .WithTags("Entidad");
    return app;
        }
    }
}