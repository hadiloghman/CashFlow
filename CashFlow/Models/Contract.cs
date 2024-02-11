using System;
using System.Collections.Generic;

namespace CashFlow.Models;

public partial class Contract
{
    public int Id { get; set; }

    public int? IdCompanyProject { get; set; }

    public int? IdContractee { get; set; }

    public string? ContractDate { get; set; }

    public string? CreateDate { get; set; }

    public decimal? Amount { get; set; }

    public string? Description { get; set; }
}
