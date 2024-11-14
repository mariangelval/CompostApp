using System;
using System.Collections.Generic;

namespace Api.Models;

public partial class Entidad
{
    public int Identidad { get; set; }

    public string Calle { get; set; } = null!;

    public short? Altura { get; set; }

    public string Nombre { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Contrasena { get; set; } = null!;

    public bool? Habilitado { get; set; }

    public string Rol { get; set; } = null!;

    public virtual ICollection<Compostentidad> Compostentidads { get; set; } = new List<Compostentidad>();
}
