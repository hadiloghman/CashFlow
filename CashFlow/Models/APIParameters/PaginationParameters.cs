using CashFlow.Models.Enums;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Net.Quic;

namespace CashFlow.Models.APIParameters
{
    public class PaginationParameters
    {
        public string SortColumn { get; set; }
        public enumSortDirections SortDirection { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }

        public SqlParameter[] GetSqlParameters()
        {
            var sqlParameters = new SqlParameter[] {
            new SqlParameter("@sortColumn", SqlDbType.VarChar) {Direction=ParameterDirection.Input, Value = this.SortColumn ?? Convert.DBNull},
            new SqlParameter("@sortDirection", SqlDbType.Int) {Direction=ParameterDirection.Input, Value = (int)this.SortDirection },
            new SqlParameter("@pageSize", SqlDbType.Int) {Direction=ParameterDirection.Input, Value = this.PageSize },
            new SqlParameter("@pageNumber", SqlDbType.Int) {Direction=ParameterDirection.Input, Value = this.PageNumber },

        };
            return sqlParameters;
        }

    }
}
