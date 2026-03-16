import { useSelector } from "react-redux";
import { panelRegistry } from "../panelRegistry";

export default function ViewRenderer({viewId}){

  const workspace = useSelector(
    state => state.views.workspaces[state.views.activeWorkspace]
  );

  const workspaceTab =
    workspace.workspaceTabs[state.views.activeWorkspaceTab];

  const viewTabs = workspaceTab.viewTabs[viewId];

  const tab = viewTabs.tabs[viewTabs.activeTab];

  const Panel = panelRegistry[tab.panel];

  if(!Panel) return null;

  return <Panel {...tab.data} />;
}