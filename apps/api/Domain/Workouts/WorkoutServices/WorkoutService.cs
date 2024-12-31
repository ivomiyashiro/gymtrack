using API.AppDbContext;
using Microsoft.EntityFrameworkCore;

namespace api.Domain.Workouts.WorkoutServices;

public class WorkoutService : IWorkoutService
{
    private readonly AppDbContext _dbContext;

    public WorkoutService(AppDbContext dbContext) 
    {
        _dbContext = dbContext;
    }

    public async Task<Workout> Create(Workout workout)
    {
        _dbContext.Workouts.Add(workout);
        await _dbContext.SaveChangesAsync();

        return workout;
    }

    public async Task<bool> DeleteById(Guid id)
    {
        var result = await _dbContext.Workouts.Where(x => x.Id == id).ExecuteDeleteAsync();
        return result > 0;
    }

    public async Task<IEnumerable<Workout>> GetAll()
    {
        return await _dbContext.Workouts.ToListAsync();
    }

    public async Task<Workout?> GetById(Guid id)
    {
        return await _dbContext.Workouts.FindAsync(id);
    }

    public async Task<Workout?> Update(Workout workout)
    {
        _dbContext.Workouts.Update(workout);
        var result = await _dbContext.SaveChangesAsync();
        return result > 0 ? workout : default;
    }
}
