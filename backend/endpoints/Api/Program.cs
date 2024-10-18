using Api;

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

// Endpoints
// Datos de prueba

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
            new CompostEntidad { idCompostEntidad = 1, kilos = 13, fechaPedido = DateTime.Now, obsPedido = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", recoleccion = new DateTime(2024, 11, 18), retirado = 1, obsRetirado = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
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
            new CompostEntidad { idCompostEntidad = 2, kilos = 25, fechaPedido = DateTime.Now, obsPedido = "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", recoleccion = new DateTime(2024, 11, 20), retirado = 0, obsRetirado = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." }
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
            new CompostEntidad { idCompostEntidad = 3, kilos = 18, fechaPedido = DateTime.Now, obsPedido = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.", recoleccion = new DateTime(2024, 11, 25), retirado = 1, obsRetirado = "Excepteur sint occaecat cupidatat non proident, sunt in culpa." }
        }
    }
};

app.MapGet("/entidades-compost", () =>
{
    return Results.Ok(entidades);
})
.WithTags("Entidad");




app.Run();


