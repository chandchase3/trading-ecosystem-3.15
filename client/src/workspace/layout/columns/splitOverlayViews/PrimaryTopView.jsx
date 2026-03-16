import { useSelector } from "react-redux";
import styles from "../../WorkspaceLayout.module.css";
import { panelRegistry } from "../../../views/panels/panelRegistry";

export default function PrimaryTopView({ viewId, panel }) {

  const viewState = useSelector(
    state => state.workspace.bottomWindowViewData[panel]
  );

  if (!viewState) return null;

  const { overlay, height: secondaryHeight, visible: secondaryVisible } = viewState;

  const tabState = useSelector(
    state => state.viewTabs.viewTabs[viewId]
  );

  const tab = useSelector(
    state => state.viewTabs.tabs[tabState?.activeTab]
  );

  if (!tab) return null;

  const Panel = panelRegistry[tab.viewType];

  return (
    <div
      className={styles.mainContentWrapper}
      style={{
        flex: 1,
        minHeight: 0,
        overflowY: "auto",
        paddingBottom: secondaryVisible && !overlay ? `${secondaryHeight}px` : "0px",
      }}
    >
      <main className={styles.mainContent}>
        <Panel {...tab.data} />
      </main>
    </div>
  );
}