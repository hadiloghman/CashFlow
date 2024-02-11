using System.Globalization;

namespace CashFlow.Helper
{
    public class SharedFunctions
    {
        public static string getCurrentDateJalali()
        {
            System.Globalization.PersianCalendar pc = new System.Globalization.PersianCalendar();
            string str;
            str = pc.GetYear(DateTime.Now).ToString() + "/" + (pc.GetMonth(DateTime.Now).ToString().Length == 1 ? "0" + pc.GetMonth(DateTime.Now).ToString() : pc.GetMonth(DateTime.Now).ToString()) + "/" + (pc.GetDayOfMonth(DateTime.Now).ToString().Length == 1 ? "0" + pc.GetDayOfMonth(DateTime.Now).ToString() : pc.GetDayOfMonth(DateTime.Now).ToString());
            return str;
        }

        public static string? getDateJalali(DateTime? date)
        {
            if (!date.HasValue) return null;
            var dt = date.Value;

            System.Globalization.PersianCalendar pc = new System.Globalization.PersianCalendar();
            string str;
            str = pc.GetYear(dt).ToString() + "/" + (pc.GetMonth(dt).ToString().Length == 1 ? "0" + pc.GetMonth(dt).ToString() : pc.GetMonth(dt).ToString()) + "/" + (pc.GetDayOfMonth(dt).ToString().Length == 1 ? "0" + pc.GetDayOfMonth(dt).ToString() : pc.GetDayOfMonth(dt).ToString());
            return str;
        }

        public static string getTimeString()
        {
            return DateTime.Now.Hour.ToString() + ":" + DateTime.Now.Minute.ToString() + ":" + DateTime.Now.Second.ToString();
        }

        public static string getCurrentDateString()
        {
            return DateTime.Now.Year.ToString() + "/" + DateTime.Now.Month.ToString() + "/" + DateTime.Now.Day.ToString();
        }

        public static DateTime? getGregorianDate(string? jalaliDate)
        {
            if (string.IsNullOrEmpty(jalaliDate)) return null;

            if (jalaliDate.Split('/').Length != 3)
            {
                throw new Exception("The Date format is not correct");
            }
            int year = int.Parse(jalaliDate.Split('/')[0]);
            int month = int.Parse(jalaliDate.Split('/')[1]);
            int day = int.Parse(jalaliDate.Split('/')[2]);
            PersianCalendar pc = new PersianCalendar();
            return pc.ToDateTime(year, month, day, 0, 0, 0, 0);

        }
    }
}
