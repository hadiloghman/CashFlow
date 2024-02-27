using CashFlow.Models.Enums;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Net.Quic;

namespace CashFlow.Models
{
    public class FilteringParams
    {
        public string SortColumn { get; set; }
        public enumSortDirections SortDirection { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }

        public virtual List<SqlParameter> GetSqlParameters()
        {
            var sqlParameters = new List<SqlParameter>{
            new SqlParameter("@sortColumn", SqlDbType.VarChar) {Direction=ParameterDirection.Input, Value = SortColumn ?? Convert.DBNull},
            new SqlParameter("@sortDirection", SqlDbType.Int) {Direction=ParameterDirection.Input, Value = (int)SortDirection },
            new SqlParameter("@pageSize", SqlDbType.Int) {Direction=ParameterDirection.Input, Value = PageSize },
            new SqlParameter("@pageNumber", SqlDbType.Int) {Direction=ParameterDirection.Input, Value = PageNumber },

        };
            return sqlParameters;
        }

    }
}
