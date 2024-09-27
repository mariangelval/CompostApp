```mermaid
erDiagram
    Entidad {
        SMALLINT idEntidad PK
        VARCHAR calle
        SMALLINT altura
        VARCHAR nombre
        VARCHAR email
    }
    
    CompostEntidad {
        SMALLINT idCompostEntidad PK
        SMALLINT idEntidad FK
        SMALLINT kilos
        DATETIME fechaPedido
        VARCHAR obsPedido
        DATE recoleccion
        TINYINT retirado
        VARCHAR obsRetirado
    }
    
    EspacioVerde {
        SMALLINT idEspacioVerde PK
        VARCHAR calle
        MEDIUMINT altura
        SMALLINT metros2
        VARCHAR descripcion
    }

    VisitaEspacio {
        SMALLINT idVisitaEspacio PK
        SMALLINT idEspacioVerde FK
        DATE fecha
        SMALLINT kilos
        VARCHAR descripcion
    }
    
    Entidad ||--o{ CompostEntidad : ""
    EspacioVerde ||--o{ VisitaEspacio : ""
```