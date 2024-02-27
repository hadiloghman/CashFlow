using AutoMapper;
using CashFlow.Helper;
using CashFlow.Models;
using Microsoft.Build.Framework;

namespace CashFlow
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<AccountingYear, AccountingYearDTO>().ForMember(dest => dest.EndDateJalali, opt => opt.MapFrom(src => SharedFunctions.getDateJalali(src.EndDate)))
                .ForMember(dest => dest.StartDateJalali, opt => opt.MapFrom(src => SharedFunctions.getDateJalali(src.StartDate)));
            CreateMap<AccountingYearDTO, AccountingYear>().ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => SharedFunctions.getDateGregorian(src.EndDateJalali)))
                .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => SharedFunctions.getDateGregorian(src.StartDateJalali)));
        }
    }
}
