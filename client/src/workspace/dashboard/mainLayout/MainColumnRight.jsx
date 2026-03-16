import React from "react";
// import { useSelector } from "react-redux";
import SideColumnShell from "./sideColumnShells/SideColumnShell";

export default function MainColumnRight() {
  // const panelType = useSelector((state) => state.workspace.rightPanel.config.type);

  return (
    <SideColumnShell panel="rightPanel" direction="right">
      
      {/* {panelType === "simple" && <SimplePanel />}

      {panelType === "singleFeature" && <SingleFeaturePanel panelId="rightPanel" />}

      {!["simple", "singleFeature"].includes(panelType) && <p>Noo panel type selected</p>} */}

    </SideColumnShell>
  );
}
