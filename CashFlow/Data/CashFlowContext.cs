using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data;
using CashFlow.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Components;
using CashFlow.Models.APIParameters;

namespace CashFlow.Data;

public partial class CashFlowContext : DbContext
{
    public CashFlowContext()
    {
    }

    public CashFlowContext(DbContextOptions<CashFlowContext> options)
        : base(options)
    {

    }

    public virtual DbSet<AccountingYear> AccountingYears { get; set; }

    public virtual DbSet<CompanyProject> CompanyProjects { get; set; }

    public virtual DbSet<Contract> Contracts { get; set; }

    public virtual DbSet<Contractee> Contractees { get; set; }

    public virtual DbSet<Currency> Currencies { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<PaymentCatgory> PaymentCatgories { get; set; }

    public List<AccountingYear> AccountYearGet(string? sortColumn, int? sortDirection, int? pageSize, int? pageNumber)
    {
        try
        {
            var parameters = new[] {
            new SqlParameter("@sortColumn", SqlDbType.VarChar) { Direction = ParameterDirection.Input, Value = sortColumn },
            new SqlParameter("@sortDirection", SqlDbType.Int) { Direction = ParameterDirection.Input, Value = sortDirection },
            new SqlParameter("@pageSize", SqlDbType.Int) { Direction = ParameterDirection.Input, Value = pageSize },
            new SqlParameter("@pageNumber", SqlDbType.Int) { Direction = ParameterDirection.Input, Value = pageNumber },

        };

            var results = this.Set<AccountingYear>()
                 .FromSqlRaw("EXEC sp_AccountingYearGet @sortColumn, @sortDirection, @pageSize, @pageNumber", parameters)
                 .ToList();

            return results;
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    public List<AccountingYear> AccountYearGet(PaginationParameters parameters)
    {
        try
        {
            var sqlParameters = parameters.GetSqlParameters();

            var results = this.Set<AccountingYear>()
                 .FromSqlRaw("EXEC sp_AccountingYearGet @sortColumn, @sortDirection, @pageSize, @pageNumber", sqlParameters)
                 .ToList();

            return results;
        }
        catch (Exception ex)
        {
            return null;
        }
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AccountingYear>(entity =>
        {
            entity.ToTable("AccountingYear");

            entity.Property(e => e.EndDate).HasColumnType("datetime");
            entity.Property(e => e.StartDate).HasColumnType("datetime");
            entity.Property(e => e.TotalCount).HasColumnType("bigint");
            entity.Property(e => e.RowNumber).HasColumnType("bigint");

        });

        modelBuilder.Entity<CompanyProject>(entity =>
        {
            entity.ToTable("CompanyProject");

            entity.Property(e => e.Address).HasMaxLength(500);
            entity.Property(e => e.Description).HasMaxLength(500);
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.Phone).HasMaxLength(500);
            entity.Property(e => e.StartDate).HasMaxLength(50);
            entity.Property(e => e.TypeCategory).HasComment("0=company 1=project");
        });

        modelBuilder.Entity<Contract>(entity =>
        {
            entity.ToTable("Contract");

            entity.Property(e => e.Amount).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.ContractDate)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.CreateDate)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Description).HasMaxLength(500);
        });

        modelBuilder.Entity<Contractee>(entity =>
        {
            entity.ToTable("Contractee");

            entity.Property(e => e.Address).HasMaxLength(500);
            entity.Property(e => e.Description).HasMaxLength(500);
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.Phone).HasMaxLength(50);
        });

        modelBuilder.Entity<Currency>(entity =>
        {
            entity.ToTable("Currency");

            entity.Property(e => e.Abbrivation).HasMaxLength(50);
            entity.Property(e => e.CurrencyName).HasMaxLength(100);
            entity.Property(e => e.Symbol).HasMaxLength(50);
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.Property(e => e.AmountConverted).HasColumnType("decimal(18, 0)");
            entity.Property(e => e.AmountInit).HasColumnType("decimal(18, 0)");
            entity.Property(e => e.Description).HasMaxLength(1000);
            entity.Property(e => e.PayeeType).HasComment("0=company 1=project 2= contractee");
            entity.Property(e => e.PayerType).HasComment("0=company 1=project 2= contractee");
            entity.Property(e => e.PaymentDate).HasColumnType("datetime");

            entity.HasOne(d => d.IdCurrencyConvertedNavigation).WithMany(p => p.CFPaymentIdCurrencyConvertedNavigations)
                .HasForeignKey(d => d.IdCurrencyConverted)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CFPayments_CFCurrencyConvereted");

            entity.HasOne(d => d.IdCurrencyInitNavigation).WithMany(p => p.CFPaymentIdCurrencyInitNavigations)
                .HasForeignKey(d => d.IdCurrencyInit)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CFPayments_CFCurrencyInit");
        });

        modelBuilder.Entity<PaymentCatgory>(entity =>
        {
            entity.Property(e => e.CategoryName).HasMaxLength(100);
            entity.Property(e => e.Description).HasMaxLength(500);
        });

        OnModelCreatingPartial(modelBuilder);
    }


    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
