using Microsoft.EntityFrameworkCore;
using api.Excercises;
using api.Workouts;

namespace api.Sets;
public class Set
{
  public required Guid Id { get; init; }
  public required Guid ExcerciseId { get; set; }
  public required Guid WorkoutId { get; set; }
  public int Reps { get; set; }
  [Precision(5, 2)]
  public decimal Weight { get; set; }
  public int Rir { get; set; }
  public DateTime CreatedAt { get; set; } = DateTime.Now;
  public DateTime UpdatedAt { get; set; }
  public virtual required Excercise Excercise { get; set; }
  public virtual required Workout Workout { get; set; }
}
