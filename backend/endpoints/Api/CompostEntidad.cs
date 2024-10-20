namespace Api;
public class CompostEntidad
{
    public short idCompostEntidad { get; set;}
    public short kilos { get; set;}
    public DateTime fechaPedido { get; set;}
    public string obsPedido { get; set; }
    public DateTime? recoleccion { get; set;}
    public sbyte retirado { get; set;}
    public string obsRetirado { get; set; }
}