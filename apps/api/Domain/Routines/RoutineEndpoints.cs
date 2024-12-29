using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using api.Domain.Routines.RoutinesDtos;
using api.Domain.Routines.RoutinesServices;

namespace api.Domain.Routines;

public static class MovieEndpoints
{
    public static void MapRoutineEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("routines");

        group.MapPost("/", async (
            IMapper _mapper, 
            IRoutineService _routineService, 
            [FromBody] CreateRoutineDtoReq body
        ) => {
            var newRoutine = _mapper.Map<Routine>(body);
            var createdRoutine = await _routineService.Create(newRoutine);

            return Results.Created(
                $"/routines/{createdRoutine.Id}",
                 createdRoutine
            );
        });

        group.MapGet("/", async (
            IMapper _mapper, 
            IRoutineService _routineService
        ) => {
            var routines = await _routineService.GetAll();

            return Results.Ok(routines);
        });
    }
}
