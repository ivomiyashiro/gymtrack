using AutoMapper;
using api.Domain.Workouts.WorkoutDtos;

namespace api.Domain.Workouts.WorkoutMaper;

public class WorkoutMaper
{
    public class WorkoutProfile : Profile
    {
        public WorkoutProfile()
        {
            CreateMap<CreateWorkoutDtoReq, Workout>();
        }
    }
}
