import { useSelector } from "react-redux";
import styles from "./WorkspaceLayout.module.css";
import { panelRegistry } from "../views/panels/panelRegistry";

export default function TopColumnView({ viewId }) {
  const tabState = useSelector(
    state => state.viewTabs.viewTabs[viewId]
  );
  const tab = useSelector(
    state => state.viewTabs.tabs[tabState?.activeTab]
  );
  if (!tab) return null;

  const Panel = panelRegistry[tab.viewType];

  return (
    <main className={styles.mainContent}>
      <Panel {...tab.data} />
    </main>
  );
}