namespace MIS_521_A2
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var app = builder.Build();

            app.UseStaticFiles();
            app.UseDefaultFiles();

            app.Run();
        }
    }
}