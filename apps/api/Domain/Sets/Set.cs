using Microsoft.EntityFrameworkCore;
using api.Domain.Workouts;
using api.Domain.Excercises;

namespace api.Domain.Sets;

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
  public required Excercise Excercise { get; set; }
  public required Workout Workout { get; set; }
}
