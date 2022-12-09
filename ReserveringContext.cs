using Microsoft.EntityFrameworkCore;
using Opdracht_meerReact_1.Models;

public class ReserveringContext : DbContext {

    public DbSet<Voorstelling> Voorstellingen { get; set; }
    public DbSet<Reservering> Reserveringen { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder b) {
        b.UseSqlite("Data Source=Voorstelling.db");
    }

}