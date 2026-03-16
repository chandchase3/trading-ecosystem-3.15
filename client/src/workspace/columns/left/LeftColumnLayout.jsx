import { useSelector } from 'react-redux';
import TopWorkspaceShell from "../shells/TopWorkspaceShell";
import BottomWorkspaceShell from "../shells/BottomWorkspaceShell";
import LeftPrimaryView from "./LeftPrimaryView";
import LeftOverlayView from "./LeftOverlayView";

export default function LeftColumnLayout() {
  const { visible } = useSelector(
    (state) => state.workspace.bottomWindowViewData.leftView
  );

  if (!visible) return null;

  return (
    <>
      <TopWorkspaceShell view="left">
        <LeftPrimaryView />
      </TopWorkspaceShell>

      <div style={{ marginTop: 'auto' }}>
        <BottomWorkspaceShell view="left">
          <LeftOverlayView />
        </BottomWorkspaceShell>
      </div>
    </>
  );
}