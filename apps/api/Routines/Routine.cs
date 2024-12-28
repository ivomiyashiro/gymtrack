using api.Workouts;

namespace api.Routines;
public class Routine
{
  public required Guid Id { get; init; }
  public required string Name { get; set; }
  public string? Description { get; set; }
  public virtual ICollection<Workout> Workouts { get; set; } = [];
}
