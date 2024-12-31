using AutoMapper;
using api.Domain.Routines.RoutinesDtos;

namespace api.Domain.Routines;

public class RoutineMapper
{
    public class RoutineProfile : Profile
    {
        public RoutineProfile()
        {
            CreateMap<CreateRoutineDtoReq, Routine>();
        }
    }
}
