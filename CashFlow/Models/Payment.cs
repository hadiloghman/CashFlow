using System;
using System.Collections.Generic;

namespace CashFlow.Models;

public partial class Payment
{
    public int Id { get; set; }

    public int IdPayer { get; set; }

    /// <summary>
    /// 0=company 1=project 2= contractee
    /// </summary>
    public int PayerType { get; set; }

    public int IdPayee { get; set; }

    /// <summary>
    /// 0=company 1=project 2= contractee
    /// </summary>
    public int PayeeType { get; set; }

    public DateTime PaymentDate { get; set; }

    public decimal AmountInit { get; set; }

    public int IdCurrencyInit { get; set; }

    public decimal AmountConverted { get; set; }

    public int IdCurrencyConverted { get; set; }

    public string? Description { get; set; }

    public virtual Currency IdCurrencyConvertedNavigation { get; set; } = null!;

    public virtual Currency IdCurrencyInitNavigation { get; set; } = null!;
}
