namespace api.Domain.Workouts.WorkoutDtos;

public class CreateWorkoutDtoReq
{
  public required string Name { get; set; }
  public required Guid RoutineId { get; set;}
}
