using Api;
using Microsoft.AspNetCore.Mvc;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


// ---------------------------------------------- Datos de prueba -------------------------------------------------------------

List<Entidad> entidades = new List<Entidad>
{
    new Entidad
    {
        idEntidad = 1,
        calle = "Libertador",
        altura = 238,
        nombre = "E.T. N°12 D.E. 1 Lib. Gral. José de San Martín",
        email = "et12@bue.edu.ar",
        contrasena = "pass123",
        CompostEntidadades = new List<CompostEntidad>
        {
            new CompostEntidad { idCompostEntidad = 1, kilos = 13, fechaPedido = DateTime.Now, obsPedido = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 4, kilos = 12, fechaPedido = DateTime.Now, obsPedido = "Lorem ipsum dolor sit amet.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 5, kilos = 10, fechaPedido = DateTime.Now, obsPedido = "Lorem ipsum dolor.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 6, kilos = 15, fechaPedido = DateTime.Now, obsPedido = "Consectetur adipiscing elit.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 7, kilos = 14, fechaPedido = DateTime.Now, obsPedido = "Sed do eiusmod tempor.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 8, kilos = 18, fechaPedido = DateTime.Now, obsPedido = "Incididunt ut labore.", recoleccion = null, retirado = 0, obsRetirado = null }
        }
    },
    new Entidad
    {
        idEntidad = 2,
        calle = "Carlos H. Perette",
        altura = 750,
        nombre = "Ministerio de Educación de la Ciudad de Buenos Aires",
        email = "ministerio@bue.edu.ar",
        contrasena = "pass123",
        CompostEntidadades = new List<CompostEntidad>
        {
            new CompostEntidad { idCompostEntidad = 2, kilos = 25, fechaPedido = DateTime.Now, obsPedido = "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 9, kilos = 20, fechaPedido = DateTime.Now, obsPedido = "Sed do eiusmod.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 10, kilos = 30, fechaPedido = DateTime.Now, obsPedido = "Ut labore et dolore.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 11, kilos = 22, fechaPedido = DateTime.Now, obsPedido = "Magna aliqua.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 12, kilos = 26, fechaPedido = DateTime.Now, obsPedido = "Eiusmod tempor.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 13, kilos = 19, fechaPedido = DateTime.Now, obsPedido = "Incididunt ut labore.", recoleccion = null, retirado = 0, obsRetirado = null }
        }
    },
    new Entidad
    {
        idEntidad = 3,
        calle = "Av. Hipólito Yrigoyen",
        altura = 1750,
        nombre = "Biblioteca del Congreso de la Nación",
        email = "bibliocongreso@bue.edu.ar",
        contrasena = "pass123",
        CompostEntidadades = new List<CompostEntidad>
        {
            new CompostEntidad { idCompostEntidad = 3, kilos = 18, fechaPedido = DateTime.Now, obsPedido = "Duis aute irure dolor in reprehenderit.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 14, kilos = 20, fechaPedido = DateTime.Now, obsPedido = "Velit esse cillum.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 15, kilos = 15, fechaPedido = DateTime.Now, obsPedido = "Dolor in reprehenderit.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 16, kilos = 21, fechaPedido = DateTime.Now, obsPedido = "Voluptate velit esse.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 17, kilos = 23, fechaPedido = DateTime.Now, obsPedido = "Cillum dolore eu.", recoleccion = null, retirado = 0, obsRetirado = null },
            new CompostEntidad { idCompostEntidad = 18, kilos = 28, fechaPedido = DateTime.Now, obsPedido = "Fugiat nulla pariatur.", recoleccion = null, retirado = 0, obsRetirado = null }
        }
    }
};

// ---------------------------------------------- ENDPOINTS -------------------------------------------------------------

// OBTENER UNA LISTA DE ENTIDADES
app.MapGet("/entidades", () =>
{
    var soloEntidades = entidades.Select(e => new
    {
        e.idEntidad,
        e.calle,
        e.altura,
        e.nombre,
        e.email,
        e.contrasena,
    }).ToList();
    return Results.Ok(soloEntidades);
}).WithTags("Entidad");

// LEER TODAS LAS ENTIDADES Y LOS PEDIDOS DE CADA UNA
app.MapGet("/entidades-compost", () =>
{
    return Results.Ok(entidades);
})
.WithTags("Entidad");

// BUSCAR ENTIDAD POR NOMBRE
app.MapGet("/entidades/{nombre}", (string nombre) =>
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
}).WithTags("Entidad");

// AGREGAR UNA NUEVA ENTIDAD
app.MapPost("/entidad", ([FromBody] Entidad entidad) =>
{
    entidades.Add(entidad);
    return Results.Ok(entidad);
})
.WithTags("Entidad");

// OBTENER RECOLECCIONES PENDIENTES
app.MapGet("/entidades-compost/recolecciones-pendientes", () =>
{
    // Filtrar las entidades con recolecciones pendientes
    var recoleccionesPendientes = entidades
        .SelectMany(e => e.CompostEntidadades
            .Where(c => c.retirado == 0) // Filtrar las recolecciones no retiradas
            .Select(c => new
            {
                NombreEntidad = e.nombre,     // Nombre de la entidad
                FechaPedido = c.fechaPedido,   // Fecha del pedido
                ObsPedido = c.obsPedido,
                Recoleccion = c.recoleccion,
                Retirado = c.retirado == 1 ? "SI" : "NO",
                ObsRetirado = c.obsRetirado
            }))
        .ToList();

    // Verificar si hay datos
    if (recoleccionesPendientes.Count == 0)
    {
        return Results.NotFound("No hay recolecciones pendientes.");
    }

    return Results.Ok(recoleccionesPendientes);
})
.WithTags("Entidad");

// EDITAR RECOLECCIONES (ASIGNARLES UNA FECHA DE RETIRO O MARCARLOS COMO RETIRADOS)
app.MapPut("/entidades-compost/pedidos", ([FromQuery] int idCompostEntidad, [FromBody] CompostEntidad compostEntidadActualizado) =>
{
    // Verificar si el idCompostEntidad del cuerpo es distinto al id en la query
    if (compostEntidadActualizado.idCompostEntidad != 0 && compostEntidadActualizado.idCompostEntidad != idCompostEntidad)
    {
        return Results.BadRequest("No se permite modificar el idCompostEntidad.");
    }

    // Buscar el pedido de compost por idCompostEntidad
    var entidadAActualizar = entidades
        .SelectMany(e => e.CompostEntidadades)
        .FirstOrDefault(c => c.idCompostEntidad == idCompostEntidad);

    if (entidadAActualizar == null)
    {
        return Results.NotFound($"No se encontró un pedido con el id {idCompostEntidad}."); // Código 404
    }

    // Actualizar solo los campos proporcionados (null-safe), sin modificar el idCompostEntidad
    if (compostEntidadActualizado.kilos != 0)
        entidadAActualizar.kilos = compostEntidadActualizado.kilos;

    if (compostEntidadActualizado.fechaPedido != default(DateTime))
        entidadAActualizar.fechaPedido = compostEntidadActualizado.fechaPedido;

    if (compostEntidadActualizado.obsPedido != null)
        entidadAActualizar.obsPedido = compostEntidadActualizado.obsPedido;

    if (compostEntidadActualizado.recoleccion != null)
        entidadAActualizar.recoleccion = compostEntidadActualizado.recoleccion;

    if (compostEntidadActualizado.retirado != null)
        entidadAActualizar.retirado = compostEntidadActualizado.retirado;

    if (compostEntidadActualizado.obsRetirado != null)
        entidadAActualizar.obsRetirado = compostEntidadActualizado.obsRetirado;

    return Results.Ok(entidades); // Código 200
})
.WithTags("Entidad");


// EDITAR UNA ENTIDAD POR ID 
app.MapPut("/entidades/{IdEntidad}", (int IdEntidad, [FromBody] Entidad entidad) =>
{
    var entidadAActualizar = entidades.FirstOrDefault(e => e.idEntidad == IdEntidad);
    // Verificar si la entidad existe
    if (entidadAActualizar == null)
    {
        return Results.NotFound(); // 404 Not Found
    }
    // Verificar si se está intentando modificar el id
    if (entidad.idEntidad != IdEntidad)
    {
        return Results.BadRequest(); // 400 Bad Request
    }
    // Modificar las propiedades de la entidad sin incluir pedidos
    entidadAActualizar.calle = entidad.calle;
    entidadAActualizar.altura = entidad.altura;
    entidadAActualizar.nombre = entidad.nombre;
    entidadAActualizar.email = entidad.email;
    entidadAActualizar.contrasena = entidad.contrasena;

    // Devolver solo los datos de la entidad, excluyendo pedidos
    var response = new 
    {
        entidadAActualizar.idEntidad,
        entidadAActualizar.calle,
        entidadAActualizar.altura,
        entidadAActualizar.nombre,
        entidadAActualizar.email,
        entidadAActualizar.contrasena
    };

    // Devolver 204 No Content si la actualización es exitosa
    return Results.Ok(response); // 200 Ok
}).WithTags("Entidad");


// BORRAR UNA ENTIDAD
app.MapDelete("/entidad", ([FromQuery] int idEntidad) =>
{
    var EntidadAEliminar = entidades.FirstOrDefault(e => e.idEntidad == idEntidad);
    if (EntidadAEliminar != null)
    {
        entidades.Remove(EntidadAEliminar);
        return Results.Ok(entidades); //Codigo 200
    }
    else
    {
        return Results.NotFound(); //Codigo 404
    }
})
    .WithTags("Entidad");





app.Run();


