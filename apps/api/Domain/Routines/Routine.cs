using api.Domain.Workouts;

namespace api.Domain.Routines;

public class Routine
{
  public required Guid Id { get; init; } = new Guid();
  public required string Name { get; set; }
  public string? Description { get; set; }
  public ICollection<Workout> Workouts { get; set; } = [];
}
