
namespace Opdracht_meerReact_1.Models;

public class Reservering {
    public int Id { get; set; }
    public int VoorstellingId { get; set; }
    public int Aantal { get; set; }
    public string Naam { get; set; }
    public string Email { get; set; }
}