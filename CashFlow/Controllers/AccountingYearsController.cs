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
        private readonly ILogger<AccountingYearsController> _logger;
        public AccountingYearsController(CashFlowContext context,ILogger<AccountingYearsController> logger)
        {
            _context = context;
            _logger = logger;
        }



        // GET: api/AccountingYears
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AccountingYear>>> GetCFAccountingYears([FromQuery] AccountingYearGetParameters requestParameter)
        {
            var data = _context.AccountYearGet(requestParameter);
            return data;
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
