using System;
using System.Collections.Generic;

namespace CashFlow.Models;

public partial class PaymentCatgory
{
    public int Id { get; set; }

    public string? CategoryName { get; set; }

    public string? Description { get; set; }

    public int? Type { get; set; }
}
