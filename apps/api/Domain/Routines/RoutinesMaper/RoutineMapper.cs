using AutoMapper;
using api.Domain.Routines.RoutinesDtos;

namespace api.Domain.Routines.RoutinesMaper;

public class RoutineMapper
{
    public class RoutineProfile : Profile
    {
        public RoutineProfile()
        {
            CreateMap<CreateRoutineDtoReq, Routine>()
                .ForMember(
                  dest => dest.Id, 
                  opt => opt.MapFrom(_ => Guid.NewGuid())
                );
        }
    }
}
