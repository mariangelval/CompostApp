using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Endpoints
{
    public static class EspacioVerdeEndpoint
    {
        public static RouteGroupBuilder MapEspacioVerdeEndpoints(this RouteGroupBuilder app)
        {


// OBTENER UNA LISTA DE ESPACIOS VERDES
app.MapGet("/espacio-verde", (CompostAppContext context) =>
{
    var soloEspaciosVerdes = context.Espacioverdes
    .Where(e => e.Habilitado == true)  // Solo selecciona los habilitados
    .Select(e => new
    {
        e.Idespacioverde,
        e.Nombre,
        e.Calle,
        e.Altura,
        e.Metros2,
        e.Descripcion
    }).ToList();

    return Results.Ok(soloEspaciosVerdes);
}).WithTags("Espacios Verdes");


// REGISTRAR UN NUEVO ESPACIO VERDE
app.MapPost("/espacio-verde", ([FromBody] Espacioverde espacioVerde, CompostAppContext context) =>
{
    context.Espacioverdes.Add(espacioVerde);
    context.SaveChanges();
    return Results.Ok(context.Espacioverdes);
})
.WithTags("Espacios Verdes");


// BORRAR UN ESPACIO VERDE
app.MapDelete("/espacio-verde", ([FromQuery] int idEspacioVerde, CompostAppContext context) =>
{
    var EspacioVerdeAEliminar = context.Espacioverdes.FirstOrDefault(e => e.Idespacioverde == idEspacioVerde);
    if (EspacioVerdeAEliminar != null)
    {
        EspacioVerdeAEliminar.Habilitado=false;
        context.SaveChanges();
        return Results.Ok(context.Espacioverdes); //Codigo 200
    }
    else
    {
        return Results.NotFound(); //Codigo 404
    }
})
    .WithTags("Espacios Verdes");
 
 // EDITAR UN ESPACIO VERDE POR ID
app.MapPut("/espacios-verdes/{idEspacioVerde}", (int idEspacioVerde, [FromBody] Espacioverde espacioVerde, CompostAppContext context) =>
{
    var EspacioVerdeAActualizar = context.Espacioverdes.FirstOrDefault(e => e.Idespacioverde == idEspacioVerde);
    // Verificar si la entidad existe
    if (EspacioVerdeAActualizar == null)
    {
        return Results.NotFound(); // 404 Not Found
    }
    // Verificar si se está intentando modificar el id
    if (espacioVerde.Idespacioverde != idEspacioVerde)
    {
        return Results.BadRequest(); // 400 Bad Request
    }
    // Modificar las propiedades de la entidad sin incluir visitas asociadas
    EspacioVerdeAActualizar.Nombre = espacioVerde.Nombre;
    EspacioVerdeAActualizar.Calle = espacioVerde.Calle;
    EspacioVerdeAActualizar.Altura = espacioVerde.Altura;
    EspacioVerdeAActualizar.Metros2 = espacioVerde.Metros2;
    EspacioVerdeAActualizar.Descripcion = espacioVerde.Descripcion;
    context.SaveChanges();

    // Devolver solo los datos de la entidad, excluyendo pedidos
    var response = new 
    {
        EspacioVerdeAActualizar.Idespacioverde,
        EspacioVerdeAActualizar.Nombre,
        EspacioVerdeAActualizar.Calle,
        EspacioVerdeAActualizar.Altura,
        EspacioVerdeAActualizar.Metros2,
        EspacioVerdeAActualizar.Descripcion
    };

    // Devolver 204 No Content si la actualización es exitosa
    return Results.Ok(response); // 200 Ok
}).WithTags("Espacios Verdes");

// VER ESPACIOS VERDES EN FUNCIÓN DE SU PRIORIDAD
app.MapGet("/espaciosVerdesPrioridad", (CompostAppContext context) =>
{
    // Obtener los datos de los espacios verdes y sus últimas visitas desde la base de datos
    var espaciosVerdes = context.Espacioverdes
        .Select(e => new
        {
            e.Idespacioverde,
            e.Nombre,
            e.Calle,
            e.Altura,
            e.Descripcion,
            e.Metros2,
            UltimaVisita = context.Visitaespacios
                .Where(v => v.Idespacioverde == e.Idespacioverde)
                .OrderByDescending(v => v.Fecha)
                .Select(v => v.Fecha)
                .FirstOrDefault(), // Obtener la última fecha de visita, puede ser null si no hay visitas
            KilosUltimaVisita = context.Visitaespacios
                .Where(v => v.Idespacioverde == e.Idespacioverde)
                .OrderByDescending(v => v.Fecha)
                .Select(v => v.Kilos)
                .FirstOrDefault() // Obtener los kilos de la última visita
        })
        .ToList(); // Ejecutar la consulta y traer los datos a memoria

    // Aplicar el operador de coalescencia nula en la lógica de la aplicación
    var espaciosVerdesOrdenados = espaciosVerdes
        .OrderBy(e => e.UltimaVisita ?? DateOnly.MinValue) // Ordenar por fecha de última visita, usando una fecha mínima si es null
        .ToList();

    return Results.Ok(espaciosVerdesOrdenados);
})
.WithTags("Espacios Verdes");



return app;
        }
        
    }
}