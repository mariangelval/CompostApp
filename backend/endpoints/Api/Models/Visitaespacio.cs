using System;
using System.Collections.Generic;

namespace Api.Models;

public partial class Visitaespacio
{
    public int Idespacioverde { get; set; }

    public DateOnly? Fecha { get; set; }

    public short? Kilos { get; set; }

    public string? Descripcion { get; set; }

    public virtual Espacioverde IdespacioverdeNavigation { get; set; } = null!;
}
