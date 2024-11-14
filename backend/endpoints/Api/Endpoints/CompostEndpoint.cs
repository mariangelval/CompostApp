using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Endpoints
{
    public static class CompostEndpoint
    {
        public static RouteGroupBuilder MapCompostEndpoints(this RouteGroupBuilder app)
        {
            // AGREGAR UN PEDIDO NUEVO
app.MapPost("/entidad/{entidadId}/compostEntidad", (int entidadId, [FromBody] Compostentidad nuevoPedido, CompostAppContext context) =>
{
    // Verifica que la entidad exista
    var entidad = context.Entidads.FirstOrDefault(e => e.Identidad == entidadId);
    if (entidad == null)
    {
        return Results.NotFound("Entidad no encontrada.");
    }

    // Establece propiedades adicionales del nuevo pedido
    nuevoPedido.Fechapedido = DateTime.Now;
    nuevoPedido.Recoleccion = null; 
    nuevoPedido.Retirado = false;
    nuevoPedido.Obsretirado = null;

    // Agrega el nuevo pedido a la lista de pedidos de la entidad
    entidad.Compostentidads.Add(nuevoPedido);
    context.SaveChanges();
    return Results.Created($"/entidad/{entidadId}/pedido/{nuevoPedido.Idcompostentidad}", nuevoPedido);
})
.WithTags("Pedidos");

// EDITAR UN PEDIDO
app.MapPut("/entidad/{entidadId}/pedido/{pedidoId}", (int entidadId, int pedidoId, [FromBody] Compostentidad pedidoActualizado, CompostAppContext context) =>
{
    // Verifica que la entidad exista
    var entidad = context.Entidads.FirstOrDefault(e => e.Identidad == entidadId);
    if (entidad == null)
    {
        return Results.NotFound("Entidad no encontrada.");
    }

    // Busca el pedido que se quiere editar
    var pedidoExistente = entidad.Compostentidads.FirstOrDefault(p => p.Idcompostentidad == pedidoId);
    if (pedidoExistente == null)
    {
        return Results.NotFound("Pedido no encontrado.");
    }

    // Actualiza las propiedades del pedido existente solo si se proporcionan
    if (pedidoActualizado.Kilos > 0)
        pedidoExistente.Kilos = pedidoActualizado.Kilos;

    if (!string.IsNullOrEmpty(pedidoActualizado.Obspedido))
        pedidoExistente.Obspedido = pedidoActualizado.Obspedido;
    context.SaveChanges();
    // Puedes añadir más propiedades para actualizar según sea necesario

    return Results.Ok(pedidoExistente);
})
.WithTags("Pedidos");

// BORRAR UN PEDIDO
app.MapDelete("/entidad/{entidadId}/pedido/{pedidoId}", (int entidadId, int pedidoId, CompostAppContext context) =>
{
    // Verifica que la entidad exista
    var entidad = context.Entidads.FirstOrDefault(e => e.Identidad == entidadId);
    if (entidad == null)
    {
        return Results.NotFound("Entidad no encontrada.");
    }

    // Busca el pedido que se quiere eliminar
    var pedidoExistente = entidad.Compostentidads.FirstOrDefault(p => p.Idcompostentidad == pedidoId);
    if (pedidoExistente == null)
    {
        return Results.NotFound("Pedido no encontrado.");
    }

    // Elimina el pedido de la lista de pedidos de la entidad
    entidad.Compostentidads.Remove(pedidoExistente);
    context.SaveChanges();
    return Results.Ok(entidad.Compostentidads); // Devuelve la lista actualizada de pedidos de esa institución
})
.WithTags("Pedidos");

// VER PEDIDOS ENVIADOS (a los que el administrador todavía no asignó retiro)
app.MapGet("/pedidos-enviados", (CompostAppContext context) =>
{
    // Filtrar los pedidos que no tienen asignado el retiro
    var pedidosEnviados = (from e in context.Entidads
                           from c in e.Compostentidads
                           where c.Recoleccion == null && c.Retirado == false && c.Obsretirado == null
                           select new
                           {
                               c.Idcompostentidad,
                               c.Kilos,
                               c.Fechapedido,
                               c.Obspedido,
                               c.Recoleccion,
                               c.Retirado,
                               c.Obsretirado,
                               NombreEntidad = e.Nombre // Asociar la entidad directamente
                           }).ToList();

    // Verificar si hay pedidos
    if (!pedidosEnviados.Any())
    {
        return Results.NotFound("No hay pedidos enviados sin asignar retiro.");
    }

    return Results.Ok(pedidosEnviados);
})
.WithTags("Pedidos");

app.MapGet("/pedidos-programados", (CompostAppContext context) =>
{
    // Definir la fecha actual y la fecha límite usando DateOnly
    var fechaActual = DateOnly.FromDateTime(DateTime.Now); 
    var fechaLimite = DateOnly.FromDateTime(DateTime.Now.AddDays(7));

    // Filtrar los pedidos que tienen fecha de recolección asignada y que están dentro del rango de fechas
    var pedidosPendientes = (from e in context.Entidads
                             from c in e.Compostentidads
                             where c.Recoleccion != null &&
                                   c.Recoleccion >= fechaActual &&
                                   c.Recoleccion <= fechaLimite
                             select new
                             {
                                 c.Idcompostentidad,
                                 c.Kilos,
                                 c.Fechapedido,
                                 c.Obspedido,
                                 c.Recoleccion,
                                 c.Retirado,
                                 c.Obsretirado,
                                 NombreEntidad = e.Nombre // Aquí usamos directamente el nombre de la entidad
                             })
                             .ToList();

    // Verificar si hay pedidos pendientes
    if (!pedidosPendientes.Any())
    {
        return Results.NotFound("No hay pedidos pendientes programados para los próximos días.");
    }

    return Results.Ok(pedidosPendientes);
})
.WithTags("Pedidos");



// VER EL HISTORIAL DE PEDIDOS 
app.MapGet("/entidad/{idEntidad}/historial-pedidos", (int idEntidad, CompostAppContext context) =>
{
    // Buscar la entidad por su ID
    var entidad = context.Entidads.FirstOrDefault(e => e.Identidad == idEntidad);
    
    // Verificar si la entidad existe
    if (entidad == null)
    {
        return Results.NotFound("Entidad no encontrada.");
    }

    // Obtener el historial de pedidos de la entidad
    var historialPedidos = entidad.Compostentidads
        .Where(p => p.Fechapedido < DateTime.Now) // Solo pedidos anteriores a la fecha actual
        .Select(p => new
        {
            p.Idcompostentidad,
            p.Kilos,
            p.Fechapedido,
            p.Obspedido,
            p.Recoleccion,
            p.Retirado,
            p.Obsretirado
        })
        .ToList();

    // Verificar si hay pedidos en el historial
    if (!historialPedidos.Any())
    {
        return Results.NotFound("No hay historial de pedidos para esta entidad.");
    }

    return Results.Ok(historialPedidos);
})
.WithTags("Pedidos");


// VER CUÁNTOS KILOS HA DONADO EN TOTAL 
app.MapGet("/entidad/{idEntidad}/total-kilos-donados", (int idEntidad, CompostAppContext context) =>
{
    // Buscar la entidad por su ID
    var entidad = context.Entidads.FirstOrDefault(e => e.Identidad == idEntidad);
    
    // Verificar si la entidad existe
    if (entidad == null)
    {
        return Results.NotFound("Entidad no encontrada.");
    }

    // Calcular el total de kilos donados
    var totalKilosDonados = entidad.Compostentidads.Sum(p => p.Kilos);

    return Results.Ok(new { TotalKilosDonados = totalKilosDonados });
})
.WithTags("Pedidos");
// VER HISTORIAL DE PEDIDOS
app.MapGet("/historialPedidos", (CompostAppContext context) =>
{
    var pedidosPasados = context.Entidads
        .SelectMany(e => e.Compostentidads)
        .Where(p => p.Fechapedido < DateTime.Now)
        .Select(p => new
        {
            p.Idcompostentidad,
            p.Kilos,
            p.Fechapedido,
            p.Obspedido,
            p.Recoleccion,
            p.Retirado,
            p.Obsretirado
        })
        .ToList();
    if (!pedidosPasados.Any())
    {
        return Results.NotFound("No hay historial de pedidos para esta entidad.");
    }

    return Results.Ok(pedidosPasados);
}).WithTags("Pedidos");

// OBTENER RESERVA ACTUAL DE COMPOST (A REVISARRRR)
app.MapGet("/reservaTotal", (CompostAppContext  context) =>
{
    var kilosIngresados = context.Entidads.Sum(e => e.Compostentidads.Sum(c => c.Kilos ?? 0));
    var kilosRetirados = context.Entidads.Sum(e => e.Compostentidads.Where(c => c.Retirado == true).Sum(c => c.Kilos ?? 0));
    var reservaActual = kilosIngresados - kilosRetirados;

    var resultado = new
    {
        KilosIngresados = kilosIngresados,
        KilosRetirados = kilosRetirados,
        ReservaActual = reservaActual
    };

    return Results.Ok(resultado);
}).WithTags("Pedidos");

return app;
        }
    }
}