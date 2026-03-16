import ResizableColumnShell from "./dynamicCols/ResizableColumnShell";
import BottomOverlayView from "./splitOverlayViews/BottomOverlayView";
import PrimaryTopView from "./splitOverlayViews/PrimaryTopView";

// hardcoded test tabs
const testTabs = {
  1: 1001,
  2: 1002,
  3: 1003,

  101: 1101,
  102: 1102,
  103: 1103
};

export default function ColumnLayout({colId, panel, direction}) {
  return (
    <ResizableColumnShell panel={panel} direction={direction}>
      <PrimaryTopView viewId={colId} panel={panel} />
      <BottomOverlayView viewId={colId+100} panel={panel} />
    </ResizableColumnShell>
  )
}