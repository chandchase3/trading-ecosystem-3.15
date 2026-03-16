import { useSelector } from "react-redux";
import ColumnRenderer from "./ColumnRenderer";

export default function WorkspaceRenderer(){

  const workspace = useSelector(
    state => state.views.workspaces[state.views.activeWorkspace]
  );

  const workspaceTab =
    workspace.workspaceTabs[state.views.activeWorkspaceTab];

  const { columns } = workspaceTab;

  return (
    <>
      {columns.map(col => (
        <ColumnRenderer key={col} column={col}/>
      ))}
    </>
  );

}