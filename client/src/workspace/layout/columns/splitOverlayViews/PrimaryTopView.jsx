import { useSelector } from "react-redux";
import styles from "../../WorkspaceLayout.module.css";
import TopColumnView from "../../TopColumnView";

export default function PrimaryTopView({ viewId, panel }) {
  const viewState = useSelector(
    state => state.workspace.bottomWindowViewData[panel]
  );
  if (!viewState) return null;

  const { overlay, height: secondaryHeight, visible: secondaryVisible } = viewState;
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
        <TopColumnView viewId={viewId} />
      </main>
    </div>
  );
}