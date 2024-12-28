using api.Sets;

namespace api.Excercises;
public class Excercise
{
  public required Guid ExcerciseId { get; init; }
  public required string Name { get; set; }
  public virtual ICollection<Set> Sets { get; set; } = [];
}
