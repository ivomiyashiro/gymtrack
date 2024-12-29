using api.Domain.Sets;

namespace api.Domain.Excercises;

public class Excercise
{
  public required Guid ExcerciseId { get; init; }
  public required string Name { get; set; }
  public ICollection<Set> Sets { get; set; } = [];
}
