import ResizableColumnShell from "../columns/shells/ResizableColumnShell";
import LowerOverlayView from "../columns/shells/LowerOverlayView";
import UpperUnderlayView from "../columns/shells/UpperUnderlayView";


export default function ColumnLayout({ panel, direction, topView, bottomView }) {
  return (
    <ResizableColumnShell panel={panel} direction={direction}>
      <UpperUnderlayView viewId={topView} panel={panel} />
      <LowerOverlayView viewId={bottomView} panel={panel} />
    </ResizableColumnShell>
  )}