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
using Microsoft.Data.SqlClient;
using AutoMapper;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace CashFlow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountingYearsController : ControllerBase
    {
        private readonly CashFlowContext _context;
        private readonly ILogger<AccountingYearsController> _logger;
        private readonly IMapper _mapper;
        public AccountingYearsController(CashFlowContext context
            , ILogger<AccountingYearsController> logger
            , IMapper mapper)
        {
            _context = context;
            _logger = logger;
            _mapper = mapper;
        }

        // GET: api/AccountingYears
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AccountingYearDTO>>> GetAccountingYearsList([FromQuery] AccountingYearFiltering requestParameter)
        {
            var lstData = _context.AccountYearGet(null, requestParameter);
            var lstDataDTO = _mapper.Map<IEnumerable<AccountingYearDTO>>(lstData);
            return Ok(lstDataDTO);
        }


        // GET: api/AccountingYears/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AccountingYearDTO>> GetAccountingYear(int id)
        {
            var lstData = _context.AccountYearGet(id, new AccountingYearFiltering());
            if (lstData.Count == 0)
                return NotFound();
            var dataDTO = _mapper.Map<AccountingYearDTO>(lstData[0]);

            return Ok(dataDTO);
        }


        // PUT: api/AccountingYears/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutAccountingYear(AccountingYearDTO AccountingYearDTO)
        {
            var accountingYear = _mapper.Map<AccountingYear>(AccountingYearDTO);
            var id = accountingYear.Id;
            _context.Entry(accountingYear).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return Ok(AccountingYearDTO);
        }

        // POST: api/AccountingYears
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AccountingYear>> PostAccountingYear(AccountingYearDTO AccountingYearDTO)
        {
            var accountingYear = _mapper.Map<AccountingYear>(AccountingYearDTO);

            _context.AccountingYears.Add(accountingYear);
            await _context.SaveChangesAsync();

            AccountingYearDTO.Id = accountingYear.Id;
            return Ok(AccountingYearDTO);
        }

        // DELETE: api/AccountingYears/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccountingYear(int id)
        {

            var accountingYear = await _context.AccountingYears.FindAsync(id);
            if (accountingYear == null)
            {
                return NotFound();
            }

            _context.AccountingYears.Remove(accountingYear);
            await _context.SaveChangesAsync();

            return Ok();
        }

    }
}
