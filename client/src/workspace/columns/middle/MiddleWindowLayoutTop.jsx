// src/workspace/columnLayoutMiddle/MiddleWindowLayoutTop.jsx
import { useSelector } from "react-redux";
import { panelRegistry } from "../panelRegistry";
// import KrakenStreamManager from "../../../providers/kraken/KrakenStreamManager";

export default function MiddleWindowLayoutTop() {
  const window = useSelector((state) => state.workspace.windowLayouts.midTop);
  const tab = window.tabs[window.activeTab];
  const Panel = panelRegistry[tab.viewType];

  return (
    <>
      {/* <KrakenStreamManager /> */}
      {tab.viewType === "scanner" ? (
        <Panel scannerName={tab.data.scannerName} />
      ) : (
        <Panel {...tab.data} />
      )}
    </>
  );
}