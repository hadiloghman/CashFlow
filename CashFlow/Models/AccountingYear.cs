using CashFlow.Helper;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CashFlow.Models;

public partial class AccountingYear
{
    public int Id { get; set; }

    public int AccYear { get; set; }

    public string? StartDateJalali { get; set; }

    public string? EndDateJalali { get; set; }

    public DateTime? StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public long TotalCount{ get; set; }
    public long RowNumber { get; set; }

    //[NotMapped]
    //public string? StartDateJalali
    //{
    //    get
    //    {
    //        return SharedFunctions.getDateJalali(this.StartDate);
    //    }
    //    set
    //    {
    //        this.StartDate = SharedFunctions.getGregorianDate(value);
    //    }
    //}

    //[NotMapped]
    //public string? EndDateJalali
    //{
    //    get
    //    {
    //        return SharedFunctions.getDateJalali(this.EndDate);
    //    }
    //    set
    //    {
    //        this.EndDate = SharedFunctions.getGregorianDate(value);
    //    }

    //}


    //[JsonConverter(typeof(Helper.CustomDateTimeConvertor))]
    //public DateTime? StartDate { get; set; }

    //[JsonConverter(typeof(Helper.CustomDateTimeConvertor))]
    //public DateTime? EndDate { get; set; }
}
