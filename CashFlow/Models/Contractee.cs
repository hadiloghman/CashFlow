using System;
using System.Collections.Generic;

namespace CashFlow.Models;

public partial class Contractee
{
    public long Id { get; set; }

    public string? Name { get; set; }

    public string? Phone { get; set; }

    public string? Address { get; set; }

    public string? Description { get; set; }
}
