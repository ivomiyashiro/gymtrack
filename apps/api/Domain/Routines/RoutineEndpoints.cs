using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using api.Domain.Routines.RoutinesDtos;
using api.Domain.Routines.RoutinesServices;

namespace api.Domain.Routines;

public static class RoutineEndpoints
{
    public static void MapRoutineEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/api/routines");

        group.MapPost("/", async (
            IMapper _mapper, 
            IRoutineService _routineService, 
            [FromBody] CreateRoutineDtoReq body
        ) => {
            var newRoutine = _mapper.Map<Routine>(body);
            var createdRoutine = await _routineService.Create(newRoutine);

            return Results.Created(
                $"/api/routines/{createdRoutine.Id}",
                createdRoutine
            );
        });

        group.MapGet("/", async (
            IRoutineService _routineService
        ) => {
            var routines = await _routineService.GetAll();

            return Results.Ok(routines);
        });

        group.MapPut("/{id:guid}", async (
            IMapper _mapper,
            IRoutineService _routineService,
            Guid id,
            [FromBody] CreateRoutineDtoReq body
        ) => {
            var updatedRoutine = await _routineService.Update(new Routine {
                Id = id,
                Name = body.Name,
                Description = body.Description
            });

            return updatedRoutine != null
                ? Results.Ok(updatedRoutine)
                : Results.NotFound();
        });

        group.MapDelete("/{id:guid}", async (
            IRoutineService _routineService,
            Guid id
        ) => {
        var deleted = await _routineService.DeleteById(id);

        return deleted
            ? Results.Ok() 
            : Results.NotFound();
        });
    }
}
