// src/workspace/columnLayoutMiddle/MiddleColumnLayoutMain.jsx
import { useSelector } from "react-redux";
import TopWorkspaceShell from "../shells/TopWorkspaceShell";
import BottomWorkspaceShell from "../shells/BottomWorkspaceShell";
import MiddleWindowLayoutTop from "./MiddleWindowLayoutTop";
import MiddleWindowLayoutBottom from "./MiddleWindowLayoutBottom";

export default function MiddleColumnLayoutMain() {
  const { visible } = useSelector(
    (state) => state.workspace.bottomWindowViewData.midView
  );

  return (
    <>
      <TopWorkspaceShell view="mid">
        <MiddleWindowLayoutTop />
      </TopWorkspaceShell>

      <BottomWorkspaceShell view="mid">
        <MiddleWindowLayoutBottom />
      </BottomWorkspaceShell>
    </>
  );
}














