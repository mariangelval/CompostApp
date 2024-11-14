using Api;
using Microsoft.AspNetCore.Mvc;
using Api.Endpoints;
using Api.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
string connectionString = builder.Configuration.GetConnectionString("composta_db");
builder.Services.AddDbContext<CompostAppContext>(options => options.UseNpgsql(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options => options.EnableTryItOutByDefault());
}


app.MapGroup("/api")
    .MapEntidadEndpoints()
    .WithTags("Entidad");

app.MapGroup("/api")
    .MapEspacioVerdeEndpoints()
    .WithTags("Espacios Verdes");
app.MapGroup("/api")
    .MapCompostEndpoints()
    .WithTags("Pedidos");

app.Run();


