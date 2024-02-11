using System;
using System.Collections.Generic;

namespace CashFlow.Models;

public partial class CompanyProject
{
    public long Id { get; set; }

    public string? Name { get; set; }

    /// <summary>
    /// 0=company 1=project
    /// </summary>
    public int? TypeCategory { get; set; }

    public string? Address { get; set; }

    public string? Phone { get; set; }

    public string? Description { get; set; }

    public string? StartDate { get; set; }
}
