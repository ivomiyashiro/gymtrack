using API.AppDbContext;
using Microsoft.EntityFrameworkCore;

namespace api.Domain.Routines.RoutinesServices;

public class RoutineServices : IRoutineService
{
    private readonly AppDbContext _dbContext;

    public RoutineServices(AppDbContext dbContext) 
    {
        _dbContext = dbContext;
    }

    public async Task<Routine> Create(Routine routine)
    {
        _dbContext.Routines.Add(routine);
        await _dbContext.SaveChangesAsync();

        return routine;
    }

    public async Task<bool> DeleteById(Guid id)
    {
        var result = await _dbContext.Routines.Where(x => x.Id == id).ExecuteDeleteAsync();
        return result > 0;
    }

    public async Task<IEnumerable<Routine>> GetAll()
    {
        return await _dbContext.Routines.ToListAsync();
    }

    public async Task<Routine?> GetById(Guid id)
    {
        return await _dbContext.Routines.FindAsync(id);
    }

    public async Task<Routine?> Update(Routine routine)
    {
        _dbContext.Routines.Update(routine);
        var result = await _dbContext.SaveChangesAsync();
        return result > 0 ? routine : default;
    }
}
