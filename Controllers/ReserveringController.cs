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
    public async Task<IEnumerable<Voorstelling>> Get()
    {
        return await _context.Voorstellingen.ToListAsync();
    }

    [HttpPost]
    public async Task Post(Reservering reservering)
    {
        _context.Reserveringen.Add(reservering);
        await _context.SaveChangesAsync();
    }
}