using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Opdracht_meerReact_1.Models;

namespace Opdracht_meerReact_1.Controllers;

[ApiController]
[Route("[controller]")]
public class ReserveringController : ControllerBase
{
    private readonly ReserveringContext _context;
    public ReserveringController(ReserveringContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IEnumerable<int> Get()
    {
        // return await _context.Voorstellingen.ToListAsync();
        Console.WriteLine("Get");
        return new int[] { 1, 2, 3, 4, 5 };
    }

    [HttpGet]
    public IEnumerable<int> GetReservering(int dag, int aantal, string email)
    {
        Console.WriteLine($"dag: {dag}, aantal: {aantal}, email: {email}");
        return new int[] { 69, 420 };
    }

    [HttpPost]
    public async Task PostReserverin(ReserveringLayout layout)
    {
        Reservering reservering = new Reservering { Dag = layout.dag, Aantal = layout.aantal, Email = layout.email };

        Console.WriteLine(reservering.ToString());
        // _context.Reserveringen.Add(reservering);
        // await _context.SaveChangesAsync();
    }
}

public class ReserveringLayout
{
    public int dag { get; set; }
    public int aantal { get; set; }
    public string email { get; set; }
}
