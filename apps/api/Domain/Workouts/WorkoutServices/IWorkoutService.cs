namespace api.Domain.Workouts.WorkoutServices;

public interface IWorkoutService
{
  Task<Workout> Create(Workout workout);

  Task<Workout?> GetById(Guid id);

  Task<IEnumerable<Workout>> GetAll();

  Task<Workout?> Update(Workout workout);

  Task<bool> DeleteById(Guid id);
}
