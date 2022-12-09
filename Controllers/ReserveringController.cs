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
    public int Get()
    {
        // return await _context.Voorstellingen.ToListAsync();
        return 69;
    }

    [HttpPost]

    public async Task PostReserverin(int dag, int aantal, string email)
    {
        Reservering reservering = new Reservering { Aantal = aantal, Email = email };

        Console.WriteLine(reservering.ToString());
        // _context.Reserveringen.Add(reservering);
        // await _context.SaveChangesAsync();
    }
}