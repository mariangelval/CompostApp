using System;
using System.Collections.Generic;

namespace Api.Models;

public partial class Compostentidad
{
    public int Idcompostentidad { get; set; }

    public int Identidad { get; set; }

    public short? Kilos { get; set; }

    public DateTime? Fechapedido { get; set; }

    public string? Obspedido { get; set; }

    public DateOnly? Recoleccion { get; set; }

    public bool? Retirado { get; set; }

    public string? Obsretirado { get; set; }

    public virtual Entidad IdentidadNavigation { get; set; } = null!;
}
