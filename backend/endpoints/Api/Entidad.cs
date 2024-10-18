namespace Api;
public class Entidad
{
    public short idEntidad { get; set;}
    public string calle { get; set;}
    public short altura { get; set;}
    public string nombre { get; set;}
    public string email { get; set;}
    public string contrasena { get; set;}
    public List<CompostEntidad> CompostEntidadades { get; set; } = new List<CompostEntidad>();
}