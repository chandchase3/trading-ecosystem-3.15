import ResizableColumnShell from "./dynamicCols/ResizableColumnShell";
import BottomOverlayView from "./splitOverlayViews/BottomOverlayView";
import PrimaryTopView from "./splitOverlayViews/PrimaryTopView";


export default function ColumnLayout({colId, panel, direction, topView, bottomView }) {
  console.log(colId)
  return (
    <ResizableColumnShell panel={panel} direction={direction}>
      <PrimaryTopView viewId={colId} panel={panel} />
      <BottomOverlayView viewId={colId+100} panel={panel} />
    </ResizableColumnShell>
  )}