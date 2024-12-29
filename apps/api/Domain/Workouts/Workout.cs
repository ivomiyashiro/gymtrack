using api.Domain.Routines;
using api.Domain.Sets;

namespace api.Domain.Workouts;
public class Workout
{
  public required Guid Id { get; init; }
  public Guid RoutineId { get; set; }
  public required string Name { get; set; }
  public required Routine Routine { get; set; }
  public ICollection<Set> Sets { get; set; } = [];
}
