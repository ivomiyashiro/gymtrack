using AutoMapper;
using api.Domain.Sets.SetDtos;

namespace api.Domain.Sets;

public class SetMapper
{
    public class SetProfile : Profile
    {
        public SetProfile()
        {
            CreateMap<CreateSetDtoBody, Set>();
            CreateMap<UpdateSetDtoBody, Set>();
        }
    }
}
