import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";

function TabRecolecciones({ onChange }) {
  const [valorTab, setValorTab] = React.useState(0); // Estado local para la pestaña seleccionada

  const manejarCambio = (nuevoValor) => {
    setValorTab(nuevoValor);
    onChange(nuevoValor); // Llama a la función de cambio pasada desde el padre
  };
  return (
    <Tabs
      aria-label="tabs"
      value={valorTab}
      onChange={(event, newValue) => manejarCambio(newValue)}
      sx={{ bgcolor: "transparent", width: "340px" }}
    >
      <TabList
        disableUnderline
        sx={{
          p: 0.5,
          gap: 0.5,
          borderRadius: "xl",
          width: "200px",
          bgcolor: "#eceae5",
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: "sm",
            bgcolor: "background.surface",
          },
        }}
      >
        <Tab disableIndicator className="tab-button">
          Programadas
        </Tab>
        <Tab disableIndicator className="tab-button">
          Enviadas
        </Tab>
      </TabList>
    </Tabs>
  );
}

export default TabRecolecciones;
