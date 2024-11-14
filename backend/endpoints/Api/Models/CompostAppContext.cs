using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Api.Models;

public partial class CompostAppContext : DbContext
{
    public CompostAppContext()
    {
    }

    public CompostAppContext(DbContextOptions<CompostAppContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Compostentidad> Compostentidads { get; set; }

    public virtual DbSet<Entidad> Entidads { get; set; }

    public virtual DbSet<Espacioverde> Espacioverdes { get; set; }

    public virtual DbSet<Visitaespacio> Visitaespacios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Server=localhost;Database=CompostApp;Username=administrador;Password=Pass123!");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Compostentidad>(entity =>
        {
            entity.HasKey(e => e.Idcompostentidad).HasName("compostentidad_pkey");

            entity.ToTable("compostentidad");

            entity.Property(e => e.Idcompostentidad).HasColumnName("idcompostentidad");
            entity.Property(e => e.Fechapedido)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("fechapedido");
            entity.Property(e => e.Identidad).HasColumnName("identidad");
            entity.Property(e => e.Kilos).HasColumnName("kilos");
            entity.Property(e => e.Obspedido)
                .HasMaxLength(45)
                .HasColumnName("obspedido");
            entity.Property(e => e.Obsretirado)
                .HasMaxLength(45)
                .HasColumnName("obsretirado");
            entity.Property(e => e.Recoleccion).HasColumnName("recoleccion");
            entity.Property(e => e.Retirado).HasColumnName("retirado");

            entity.HasOne(d => d.IdentidadNavigation).WithMany(p => p.Compostentidads)
                .HasForeignKey(d => d.Identidad)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_compostentidad_entidad");
        });

        modelBuilder.Entity<Entidad>(entity =>
        {
            entity.HasKey(e => e.Identidad).HasName("entidad_pkey");

            entity.ToTable("entidad");

            entity.Property(e => e.Identidad).HasColumnName("identidad");
            entity.Property(e => e.Altura).HasColumnName("altura");
            entity.Property(e => e.Calle)
                .HasMaxLength(45)
                .HasColumnName("calle");
            entity.Property(e => e.Contrasena)
                .HasMaxLength(45)
                .HasColumnName("contrasena");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.Habilitado)
                .HasDefaultValue(true)
                .HasColumnName("habilitado");
            entity.Property(e => e.Nombre)
                .HasMaxLength(45)
                .HasColumnName("nombre");
            entity.Property(e => e.Rol)
                .HasMaxLength(20)
                .HasColumnName("rol");
        });

        modelBuilder.Entity<Espacioverde>(entity =>
        {
            entity.HasKey(e => e.Idespacioverde).HasName("espacioverde_pkey");

            entity.ToTable("espacioverde");

            entity.Property(e => e.Idespacioverde).HasColumnName("idespacioverde");
            entity.Property(e => e.Altura).HasColumnName("altura");
            entity.Property(e => e.Calle)
                .HasMaxLength(45)
                .HasColumnName("calle");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(45)
                .HasColumnName("descripcion");
            entity.Property(e => e.Habilitado)
                .HasDefaultValue(true)
                .HasColumnName("habilitado");
            entity.Property(e => e.Metros2).HasColumnName("metros2");
            entity.Property(e => e.Nombre)
                .HasMaxLength(45)
                .HasColumnName("nombre");
        });

        modelBuilder.Entity<Visitaespacio>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("visitaespacio");

            entity.Property(e => e.Descripcion)
                .HasMaxLength(45)
                .HasColumnName("descripcion");
            entity.Property(e => e.Fecha).HasColumnName("fecha");
            entity.Property(e => e.Idespacioverde).HasColumnName("idespacioverde");
            entity.Property(e => e.Kilos).HasColumnName("kilos");

            entity.HasOne(d => d.IdespacioverdeNavigation).WithMany()
                .HasForeignKey(d => d.Idespacioverde)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_visitaespacio_espacioverde");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
