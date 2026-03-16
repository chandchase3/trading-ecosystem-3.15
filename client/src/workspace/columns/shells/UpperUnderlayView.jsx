import { useSelector } from "react-redux";
import styles from "../../layout/MainLayout.module.css";
import { panelRegistry } from "../../views/panels/panelRegistry";

export default function TopWorkspaceShell({ viewId, panel }) {
  console.log("this log does appera in console")
  const viewState = useSelector(
    (state) => state.workspace.bottomWindowViewData[panel]
  )
  if (!viewState) return null; 
    
    const { overlay, height: secondaryHeight, visible: secondaryVisible } = viewState;

    const view = useSelector(
    state => state.views.views[viewId]
  );

  if (!view) return <p>hi</p>;

  const Panel = panelRegistry[view.viewType];
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
        <Panel {...view.data} />
      </main>
    </div>
  );
}