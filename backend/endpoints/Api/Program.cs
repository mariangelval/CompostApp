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

// Entidades y pedidos de cada una
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

// Espacios verdes
List<EspacioVerde> espaciosVerdes = new List<EspacioVerde>
{
    new EspacioVerde
    {
        idEspacioVerde = 1,
        nombre = "Plaza del Angel Gris",
        calle = "Avellaneda",
        altura = 0,
        descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        metros2 = 40,
        VisitaEspacios = new List<VisitaEspacio>
        {
            new VisitaEspacio{ idVisitaEspacio = 1, fecha = new DateTime(2024, 1, 6), kilos = 30, descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
            new VisitaEspacio{ idVisitaEspacio = 2, fecha = new DateTime(2024, 5, 6), kilos = 20, descripcion = "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" }
        }
    },
    new EspacioVerde
    {
        idEspacioVerde = 2,
        nombre = "Parque Patricios",
        calle = "Caseros",
        altura = 123,
        descripcion = "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        metros2 = 75,
        VisitaEspacios = new List<VisitaEspacio>
        {
            new VisitaEspacio{ idVisitaEspacio = 3, fecha = new DateTime(2024, 2, 15), kilos = 25, descripcion = "Praesent libero. Sed cursus ante dapibus diam" },
            new VisitaEspacio{ idVisitaEspacio = 4, fecha = new DateTime(2024, 6, 20), kilos = 35, descripcion = "Nulla quis sem at nibh elementum imperdiet" }
        }
    },
    new EspacioVerde
    {
        idEspacioVerde = 3,
        nombre = "Plaza San Martin",
        calle = "Libertador",
        altura = 456,
        descripcion = "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
        metros2 = 120,
        VisitaEspacios = new List<VisitaEspacio>
        {
            new VisitaEspacio{ idVisitaEspacio = 5, fecha = new DateTime(2024, 3, 10), kilos = 15, descripcion = "Sed nisi. Nulla quis sem at nibh elementum imperdiet" },
            new VisitaEspacio{ idVisitaEspacio = 6, fecha = new DateTime(2024, 7, 25), kilos = 10, descripcion = "Fusce nec tellus sed augue semper porta" }
        }
    },
    new EspacioVerde
    {
        idEspacioVerde = 4,
        nombre = "Plaza Manzana",
        calle = "Corrientes",
        altura = 789,
        descripcion = "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
        metros2 = 60,
        VisitaEspacios = new List<VisitaEspacio>
        {
            new VisitaEspacio{ idVisitaEspacio = 7, fecha = new DateTime(2024, 4, 5), kilos = 28, descripcion = "Duis sagittis ipsum. Praesent mauris" },
            new VisitaEspacio{ idVisitaEspacio = 8, fecha = new DateTime(2024, 8, 15), kilos = 22, descripcion = "Fugiat nulla pariatur. Excepteur sint occaecat" }
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

// OBTENER UNA LISTA DE ESPACIOS VERDES
app.MapGet("/espacio-verde", () =>
{
    var soloEspaciosVerdes = espaciosVerdes.Select(e => new
    {
        e.idEspacioVerde,
        e.nombre,
        e.calle,
        e.altura,
        e.metros2,
        e.descripcion 
    }).ToList();
    return Results.Ok(soloEspaciosVerdes);
}).WithTags("Espacios Verdes");


// REGISTRAR UN NUEVO ESPACIO VERDE
app.MapPost("/espacio-verde", ([FromBody] EspacioVerde espacioVerde) =>
{
    espaciosVerdes.Add(espacioVerde);
    return Results.Ok(espaciosVerdes);
})
.WithTags("Espacios Verdes");


// BORRAR UN ESPACIO VERDE
app.MapDelete("/espacio-verde", ([FromQuery] int idEspacioVerde) =>
{
    var EspacioVerdeAEliminar = espaciosVerdes.FirstOrDefault(e => e.idEspacioVerde == idEspacioVerde);
    if (EspacioVerdeAEliminar != null)
    {
        espaciosVerdes.Remove(EspacioVerdeAEliminar);
        return Results.Ok(espaciosVerdes); //Codigo 200
    }
    else
    {
        return Results.NotFound(); //Codigo 404
    }
})
    .WithTags("Espacios Verdes");
 
 // EDITAR UN ESPACIO VERDE POR ID
app.MapPut("/espacios-verdes/{idEspacioVerde}", (int idEspacioVerde, [FromBody] EspacioVerde espacioVerde) =>
{
    var EspacioVerdeAActualizar = espaciosVerdes.FirstOrDefault(e => e.idEspacioVerde == idEspacioVerde);
    // Verificar si la entidad existe
    if (EspacioVerdeAActualizar == null)
    {
        return Results.NotFound(); // 404 Not Found
    }
    // Verificar si se está intentando modificar el id
    if (espacioVerde.idEspacioVerde != idEspacioVerde)
    {
        return Results.BadRequest(); // 400 Bad Request
    }
    // Modificar las propiedades de la entidad sin incluir visitas asociadas
    EspacioVerdeAActualizar.nombre = espacioVerde.nombre;
    EspacioVerdeAActualizar.calle = espacioVerde.calle;
    EspacioVerdeAActualizar.altura = espacioVerde.altura;
    EspacioVerdeAActualizar.metros2 = espacioVerde.metros2;
    EspacioVerdeAActualizar.descripcion = espacioVerde.descripcion;

    // Devolver solo los datos de la entidad, excluyendo pedidos
    var response = new 
    {
        EspacioVerdeAActualizar.idEspacioVerde,
        EspacioVerdeAActualizar.nombre,
        EspacioVerdeAActualizar.calle,
        EspacioVerdeAActualizar.altura,
        EspacioVerdeAActualizar.metros2,
        EspacioVerdeAActualizar.descripcion
    };

    // Devolver 204 No Content si la actualización es exitosa
    return Results.Ok(response); // 200 Ok
}).WithTags("Espacios Verdes");

// VER ESPACIOS VERDES EN FUNCIÓN DE SU PRIORIDAD (los que fueron visitados más recientemente de últimos y de primeros los espacio cuya visita fue hace mucho)
app.MapGet("/espaciosVerdesPrioridad", () =>
{
    var espaciosVerdesOrdenados = espaciosVerdes
        .Select(e => new
        {
            e.idEspacioVerde,
            e.nombre,
            e.calle,
            e.altura,
            e.descripcion,
            e.metros2,
            UltimaVisita = e.VisitaEspacios
                .OrderByDescending(v => v.fecha)
                .FirstOrDefault()?.fecha,
            KilosUltimaVisita = e.VisitaEspacios
                .OrderByDescending(v => v.fecha)
                .FirstOrDefault()?.kilos,
        })
        .OrderBy(e => e.UltimaVisita ?? DateTime.MinValue)
        .ToList();

    return Results.Ok(espaciosVerdesOrdenados);
}).WithTags("Espacios Verdes");

// VER HISTORIAL DE PEDIDOS
app.MapGet("/historialPedidos", () =>
{
    var pedidosPasados = entidades
        .SelectMany(e => e.CompostEntidadades)
        .Where(p => p.fechaPedido < DateTime.Now)
        .Select(p => new
        {
            p.idCompostEntidad,
            p.kilos,
            p.fechaPedido,
            p.obsPedido,
            p.recoleccion,
            p.retirado,
            p.obsRetirado
        })
        .ToList();

    return Results.Ok(pedidosPasados);
}).WithTags("Pedido");

// OBTENER RESERVA ACTUAL DE COMPOST A REVISARRRR
app.MapGet("/reservaTotal", () =>
{
    var kilosIngresados = entidades.Sum(e => e.CompostEntidadades.Sum(c => c.kilos));
    var kilosRetirados = entidades.Sum(e => e.CompostEntidadades.Where(c => c.retirado == 1).Sum(c => c.kilos));
    var reservaActual = kilosIngresados - kilosRetirados;

    var resultado = new
    {
        KilosIngresados = kilosIngresados,
        KilosRetirados = kilosRetirados,
        ReservaActual = reservaActual
    };

    return Results.Ok(resultado);
}).WithTags("Reserva");





app.Run();


