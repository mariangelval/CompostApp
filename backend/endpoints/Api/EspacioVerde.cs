namespace Api;
public class EspacioVerde
{
    public short idEspacioVerde { get; set; }
    public string calle { get; set; }
    public short altura { get; set; }
    public short metros2 { get; set; }
    public string descripcion { get; set; }
    public List<VisitaEspacio> VisitaEspacios { get; set; } = new List<VisitaEspacio>();
}