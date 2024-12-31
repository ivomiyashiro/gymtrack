namespace api.Domain.Workouts.WorkoutDtos;

public class UpdateWorkoutDtoReq
{
  public Guid? Id { get; set; }
  public required string Name { get; set; }
}
