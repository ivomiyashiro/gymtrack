using API.AppDbContext;
using Microsoft.EntityFrameworkCore;

namespace api.Domain.Sets.SetServices;

public class SetService : ISetService
{
    public readonly AppDbContext _dbContext;

    public SetService(AppDbContext dbContext) 
    {
        _dbContext = dbContext;
    }

    public async Task<Set> Create(Set set)
    {
        _dbContext.Sets.Add(set);
        await _dbContext.SaveChangesAsync();

        return set;
    }

    public async Task<bool> DeleteById(Guid id)
    {
        var result = await _dbContext.Sets.Where(x => x.Id == id).ExecuteDeleteAsync();
        return result > 0;
    }

    public async Task<IEnumerable<Set>> GetAll()
    {
        return await _dbContext.Sets.ToListAsync();
    }

    public async Task<Set?> GetById(Guid id)
    {
        return await _dbContext.Sets.FindAsync(id);
    }

    public async Task<Set?> Update(Set set)
    {
        _dbContext.Sets.Update(set);
        var result = await _dbContext.SaveChangesAsync();
        return result > 0 ? set : default;
    }
}
