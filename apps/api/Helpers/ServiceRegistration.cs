using api.Domain.Routines.RoutinesServices;
using api.Domain.Workouts.WorkoutServices;

namespace api.Helpers;

public static class ServiceRegistration
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddBusinessServices();
        services.AddInfrastructureServices();
        
        return services;
    }

    private static IServiceCollection AddBusinessServices(this IServiceCollection services)
    {
        services.AddScoped<IRoutineService, RoutineServices>();
        services.AddScoped<IWorkoutService, WorkoutService>();
        
        return services;
    }

    private static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
    {
        services.AddAutoMapper(typeof(Program));
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();

        return services;
    }
}

