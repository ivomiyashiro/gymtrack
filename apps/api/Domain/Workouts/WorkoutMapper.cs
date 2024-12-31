using AutoMapper;
using api.Domain.Workouts.WorkoutDtos;

namespace api.Domain.Workouts;

public class WorkoutMapper
{
    public class WorkoutProfile : Profile
    {
        public WorkoutProfile()
        {
            CreateMap<CreateWorkoutDtoReq, Workout>();
        }
    }
}
