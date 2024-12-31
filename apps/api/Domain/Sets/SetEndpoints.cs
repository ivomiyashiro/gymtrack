using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using api.Domain.Sets.SetServices;
using api.Domain.Sets.SetDtos;

namespace api.Domain.Sets;

public static class SetEndpoints
{
  public static void MapSetEndpoints(this WebApplication app)
  {
    var group = app.MapGroup("/api/workouts");

    group.MapPost("/", async (
      IMapper _mapper,
      ISetService _setService,
      [FromBody] CreateSetDtoBody body
    ) => {
      var set = _mapper.Map<Set>(body);
      var newSet = await _setService.Create(set);

      return Results.Created(
        $"/api/sets/{set.Id}",
        newSet
      );
    });

    group.MapGet("/", async (
        ISetService _setService
    ) => {
      var sets = await _setService.GetAll();

      return Results.Ok(sets);
    });

    group.MapPut("/{id:guid}", async (
      IMapper _mapper,
      ISetService _setService,
      Guid id,
      [FromBody] UpdateSetDtoBody body
    ) => {
      body.Id = id;
      var set = _mapper.Map<Set>(body);
      var updatedSet = await _setService.Update(set);

      return updatedSet != null
          ? Results.Ok(updatedSet)
          : Results.NotFound();
    });

    group.MapDelete("/{id:guid}", async (
        ISetService _setService,
        Guid id
    ) => {
      var deleted = await _setService.DeleteById(id);

      return deleted
        ? Results.Ok() 
        : Results.NotFound();
      });
    }
}
