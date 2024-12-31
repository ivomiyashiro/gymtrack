namespace api.Domain.Sets.SetDtos;

public class UpdateSetDtoBody
{
  public Guid Id { get; set; }
  public Guid ExcerciseId { get; set; }
  public Guid WorkoutId { get; set; }
  public int Reps { get; set; }
  public decimal Weight { get; set; }
  public int Rir { get; set; }
}
