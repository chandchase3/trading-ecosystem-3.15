import { useSelector } from 'react-redux';
import TopWorkspaceShell from "../shells/TopWorkspaceShell";
import BottomWorkspaceShell from "../shells/BottomWorkspaceShell";
import LeftWindowLayoutTop from "./LeftWindowLayoutTop";
import LeftWindowLayoutBottom from "./LeftWindowLayoutBottom";

export default function LeftColumnLayoutMain() {
  const { visible } = useSelector(
    (state) => state.workspace.bottomWindowViewData.leftView
  );

  if (!visible) return null;

  return (
    <>
      <TopWorkspaceShell view="left">
        <LeftWindowLayoutTop />
      </TopWorkspaceShell>

      {/* Add bottom panel wrapper to push it to bottom */}
      <div style={{ marginTop: 'auto' }}>
        <BottomWorkspaceShell view="left">
          <LeftWindowLayoutBottom />
        </BottomWorkspaceShell>
      </div>
    </>
  );
}