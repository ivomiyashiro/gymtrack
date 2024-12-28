using api.Routines;
using api.Sets;

namespace api.Workouts;
public class Workout
{
  public required Guid Id { get; init; }
  public Guid RoutineId { get; set; }
  public required string Name { get; set; }
  public virtual required Routine Routine { get; set; }
  public virtual ICollection<Set> Sets { get; set; } = [];
}
