import { useSelector } from "react-redux";
import styles from "../../MainLayout/MainLayout.module.css";

export default function TopWorkspaceShell({ children, view = "mid" }) {
  const viewState = useSelector(
    (state) => state.workspace.bottomWindowViewData[`${view}View`]
  );

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
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}