using Microsoft.EntityFrameworkCore;
using api.Routines;
using api.Workouts;
using api.Excercises;
using api.Sets;

namespace API.AppDbContext;
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {}

    public DbSet<Routine> Routines { get; set; }
    public DbSet<Workout> Workouts { get; set; }
    public DbSet<Excercise> Excercises { get; set; }
    public DbSet<Set> Sets { get; set; }

}

