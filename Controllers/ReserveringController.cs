using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Opdracht_meerReact_1.Controllers;

[ApiController]
[Route("[controller]")]
public class ReserveringController : ControllerBase
{

    private readonly int AantalDagen = 14;
    private static List<Dag> Dagen;
    public ReserveringController()
    {
        Dagen = new List<Dag>();
        for (int i = 1; i <= AantalDagen; i++)
        {
            if (i == 1) {
                Dagen.Add(new Dag(i, new Reservering {Email = "peter@mail", Aantal = 2}) );
            }
            else Dagen.Add(new Dag(i));
        }
    }

    [HttpGet]
    [Route("aantalDagen")]
    public int GetAantalDagen()
    {
        return AantalDagen;
    }

    // test url: https://localhost:44466/reservering/nieuwReservering?dag=2&aantal=9&email=peter@mail
    [HttpGet]
    [Route("nieuwReservering")]
    public IEnumerable<int> NieuwReservering(int dag, int aantal, string email)
    {
        Console.WriteLine($"Nieuwe reservering toevoegen...\ndag: [{dag}, aantal: {aantal}, email: {email}]");
        Dagen[dag - 1].Reserveringen.Add(new Reservering { Email = email, Aantal = aantal });
        return Dagen.Select(d => d.OpenPlekken).ToArray();
    }

    [HttpGet]
    [Route("reservering")]
    public IEnumerable<Dag> GetReserveringenPerDag()
    {
        return Dagen.ToArray();
    }

}