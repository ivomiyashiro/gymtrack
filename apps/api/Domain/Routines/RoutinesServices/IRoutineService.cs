namespace api.Domain.Routines.RoutinesServices;

public interface IRoutineService
{
  Task<Routine> Create(Routine routine);

  Task<Routine?> GetById(Guid id);

  Task<IEnumerable<Routine>> GetAll();

  Task<Routine?> Update(Routine routine);

  Task<bool> DeleteById(Guid id);
}
