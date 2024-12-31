using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using api.Domain.Workouts.WorkoutServices;
using api.Domain.Workouts.WorkoutDtos;

namespace api.Domain.Workouts;

public static class WorkoutEnpoints
{
  public static void MapWorkoutEndpoints(this WebApplication app)
  {
    var group = app.MapGroup("/api/workouts");

    group.MapPost("/", async(
      IMapper _mapper,
      IWorkoutService _workoutService,
      [FromBody] CreateWorkoutDtoReq body
    ) => {
      var workout = _mapper.Map<Workout>(body);
      var newWorkout = await _workoutService.Create(workout);

      return Results.Created(
        $"/api/workouts/{workout.Id}",
        newWorkout
      );
    });

    group.MapGet("/", async(
      IWorkoutService _workoutService
    ) => {
      var workouts = await _workoutService.GetAll();

      return Results.Ok(workouts);
    });

    group.MapPut("/{id:guid}", async (
        IMapper _mapper,
        IWorkoutService _workoutService,
        Guid id,
        [FromBody] UpdateWorkoutDtoReq body
    ) => {
        body.Id = id;      
        var workout = _mapper.Map<Workout>(body);
        var updatedWorkout = await _workoutService.Update(workout);

        return updatedWorkout != null
            ? Results.Ok(updatedWorkout)
            : Results.NotFound();
    });

    group.MapDelete("/{id:guid}", async (
      IWorkoutService _workoutService,
      Guid id
    ) => {
      var deleted = await _workoutService.DeleteById(id);

      return deleted
        ? Results.Ok() 
        : Results.NotFound();
    });
  }
}
