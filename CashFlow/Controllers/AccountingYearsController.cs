using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CashFlow.Data;
using CashFlow.Models;
using Microsoft.CodeAnalysis.Elfie.Model;
using System.Drawing.Printing;
using CashFlow.Models.APIParameters;
using Microsoft.Data.SqlClient;

namespace CashFlow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountingYearsController : ControllerBase
    {
        private readonly CashFlowContext _context;

        public AccountingYearsController(CashFlowContext context)
        {
            _context = context;
        }



        // GET: api/AccountingYears
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AccountingYear>>> GetCFAccountingYears([FromQuery] AccountingYearGetParameters requestParameter)
        {
            var data = _context.AccountYearGet(requestParameter);

            return data;
        }

        [HttpPost("AccountingYearsTable")]
        public async Task<ActionResult<IEnumerable<AccountingYear>>> GetCFAccountingYearsTable()
        {
            if (_context.AccountingYears == null)
            {
                return NotFound();
            }
            //var q = _context.AccountingYears.AsQueryable();
            ////q = ApplyDataTablesFiltering("14", q);
            //var data = await _context.AccountingYears.ToListAsync();
            var draw = "1";
            if (!string.IsNullOrEmpty(Request.Form["draw"]) && !string.IsNullOrEmpty(Request.Form["draw"][0]))
                draw = Request.Form["draw"][0];

            var sortColumn = Request.Form["columns[" + Request.Form["order[0][column]"].FirstOrDefault() + "][data]"].FirstOrDefault();
            var sortColumnDirection = Request.Form["order[0][dir]"].FirstOrDefault();
            int pageSize = 10;
            if (!int.TryParse(Request.Form["length"].ToString(), out pageSize))
            {
                pageSize = 10;
            }
            int pageNumber = 0;
            if (!int.TryParse(Request.Form["start"].ToString(), out pageNumber))
            {
                pageNumber = 0;
            }
            pageNumber = (pageNumber / pageSize) + 1;
            sortColumnDirection = sortColumnDirection ?? "asc";
            var data = _context.AccountYearGet(sortColumn, (sortColumnDirection == "desc" ? -1 : 0), pageSize, pageNumber);
            var result = new
            {
                draw = draw,
                recordsTotal = data.Count > 0 ? data[0].TotalCount : 0,
                recordsFiltered = data.Count > 0 ? data[0].TotalCount : 0,
                data = data
            };
            return Ok(result);
        }

        private IQueryable<AccountingYear> ApplyDataTablesFiltering(string? searchValue, IQueryable<AccountingYear> query)
        {
            if (!string.IsNullOrEmpty(searchValue))
            {
                string searchTerm = searchValue;

                // Get the properties of YourDataModel
                var properties = typeof(AccountingYear).GetProperties();
                query = query.Where(o => properties.Any(p => p.GetValue(o, null) != null && p.GetValue(o, null).ToString().Contains(searchValue)));
                // Build a combined OR condition for all string properties
            }

            return query;
        }


        // GET: api/AccountingYears/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AccountingYear>> GetCFAccountingYear(int id)
        {
            if (_context.AccountingYears == null)
            {
                return NotFound();
            }
            var cFAccountingYear = await _context.AccountingYears.FindAsync(id);

            if (cFAccountingYear == null)
            {
                return NotFound();
            }

            return cFAccountingYear;
        }


        // PUT: api/AccountingYears/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCFAccountingYear(int id, AccountingYear cFAccountingYear)
        {
            if (id != cFAccountingYear.Id)
            {
                return BadRequest();
            }

            _context.Entry(cFAccountingYear).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CFAccountingYearExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            //return NoContent();
            return Ok(await _context.AccountingYears.OrderBy(o => o.AccYear).ToListAsync());
        }

        // POST: api/AccountingYears
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AccountingYear>> PostCFAccountingYear(AccountingYear cFAccountingYear)
        {
            if (_context.AccountingYears == null)
            {
                return Problem("Entity set 'CashFlowContext.CFAccountingYears'  is null.");
            }
            _context.AccountingYears.Add(cFAccountingYear);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetCFAccountingYear", new { id = cFAccountingYear.Id }, cFAccountingYear);
            return Ok(await _context.AccountingYears.OrderBy(o => o.AccYear).ToListAsync());
        }

        // DELETE: api/AccountingYears/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCFAccountingYear(int id)
        {
            if (_context.AccountingYears == null)
            {
                return NotFound();
            }
            var cFAccountingYear = await _context.AccountingYears.FindAsync(id);
            if (cFAccountingYear == null)
            {
                return NotFound();
            }

            _context.AccountingYears.Remove(cFAccountingYear);
            await _context.SaveChangesAsync();

            //return NoContent();
            return Ok(await _context.AccountingYears.OrderBy(o => o.AccYear).ToListAsync());
        }

        private bool CFAccountingYearExists(int id)
        {
            return (_context.AccountingYears?.Any(e => e.Id == id)).GetValueOrDefault();
        }


    }
}
