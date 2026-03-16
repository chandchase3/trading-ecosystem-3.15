import { useSelector } from "react-redux";
import { panelRegistry } from "../panelRegistry";

export default function LeftWindowLayoutBottom() {

  const window = useSelector(
    (state) => state.workspace.windowLayouts.leftBottom
  );

  const tab = window.tabs[window.activeTab];

  const Panel = panelRegistry[tab.viewType];

  return tab.viewType === "scanner"
    ? <Panel scannerName={tab.data.scannerName} />
    : <Panel {...tab.data} />;
}
