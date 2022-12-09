
public class Dag {
    public Dag(int id) {
        Id = id;
        Reserveringen = new List<Reservering>();
    }
    public Dag (int id, Reservering reservering) : this(id){
        Reserveringen.Add(reservering);
    }
    
    public int Id { get; set; }
    public List<Reservering> Reserveringen { get; set; }
    public int OpenPlekken => 10 - Reserveringen.Sum(r => r.Aantal);
}