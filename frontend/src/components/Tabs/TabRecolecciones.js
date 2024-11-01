import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";

function TabRecolecciones() {
  return (
    <Tabs
      aria-label="tabs"
      defaultValue={0}
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
