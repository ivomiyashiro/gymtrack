namespace api.Domain.Sets.SetServices;

public interface ISetService
{
  Task<Set> Create(Set set);

  Task<Set?> GetById(Guid id);

  Task<IEnumerable<Set>> GetAll();

  Task<Set?> Update(Set set);

  Task<bool> DeleteById(Guid id);
}
