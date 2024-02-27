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

    public DateTime? StartDate { get; set; }

    public DateTime? EndDate { get; set; }

}

public partial class AccountingYearDTO
{
    public int Id { get; set; }

    public int AccYear { get; set; }

    public string StartDateJalali { get; set; }

    public string EndDateJalali { get; set; }

}

public partial class AccountingYearResult
{
    public int Id { get; set; }

    public int AccYear { get; set; }

    public DateTime? StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public string StartDateJalali { get; set; }

    public string EndDateJalali { get; set; }

    public long TotalCount { get; set; }
    public long RowNumber { get; set; }
}

public class AccountingYearFiltering : FilteringParams
{

}