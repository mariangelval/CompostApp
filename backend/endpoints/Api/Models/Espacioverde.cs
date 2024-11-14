using System;
using System.Collections.Generic;

namespace Api.Models;

public partial class Espacioverde
{
    public int Idespacioverde { get; set; }

    public string? Nombre { get; set; }

    public string? Calle { get; set; }

    public int? Altura { get; set; }

    public short? Metros2 { get; set; }

    public string? Descripcion { get; set; }

    public bool? Habilitado { get; set; }
}
