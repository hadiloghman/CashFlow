using System;
using System.Collections.Generic;

namespace CashFlow.Models;

public partial class Currency
{
    public int Id { get; set; }

    public string? CurrencyName { get; set; }

    public string? Abbrivation { get; set; }

    public string? Symbol { get; set; }

    public virtual ICollection<Payment> CFPaymentIdCurrencyConvertedNavigations { get; set; } = new List<Payment>();

    public virtual ICollection<Payment> CFPaymentIdCurrencyInitNavigations { get; set; } = new List<Payment>();
}
