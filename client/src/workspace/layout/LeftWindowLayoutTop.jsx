import { useSelector } from "react-redux";
import { panelRegistry } from "../views/panels/panelRegistry";

export default function LeftWindowLayoutTop() {

  const window = useSelector(
    (state) => state.workspace.windowLayouts.leftTop
  );

  const tab = window.tabs[window.activeTab];

  const Panel = panelRegistry[tab.viewType];

  return tab.viewType === "scanner"
    ? <Panel scannerName={tab.data.scannerName} />
    : <Panel {...tab.data} />;
}