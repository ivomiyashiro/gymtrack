using Microsoft.EntityFrameworkCore;
using API.AppDbContext;
using api.Helpers;
using api.Domain.Routines;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddApplicationServices();
builder.Services.AddDbContext<AppDbContext>(optionsBuilder => 
    optionsBuilder.UseSqlServer(builder.Configuration.GetConnectionString("Default"))
);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Endpoints
var apiGroup = app.MapGroup("/api");
app.MapRoutineEndpoints();

app.UseHttpsRedirection();

app.Run();
