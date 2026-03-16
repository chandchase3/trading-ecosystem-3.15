import { useDispatch, useSelector } from "react-redux";
import { setMiddleBottomWindowHeight, setLeftBottomWindowHeight, setRightBottomWindowHeight } from "../../workspaceSlice";
import { useState, useCallback } from "react";
import styles from "./LowerOverlayView.module.css";

export default function LowerOverlayView({ viewId, panel }) {
  const dispatch = useDispatch();
  const { height, minHeight, maxHeight } = useSelector(
    (state) => state.workspace.bottomWindowViewData[panel]
  );

  const view = useSelector((state) => state.views.views[viewId]);
  if (!view) return null;

  const [dragHeight, setDragHeight] = useState(height);
  const [dragging, setDragging] = useState(false);

  const startResize = useCallback((e) => {
    e.preventDefault();
    setDragging(true);
    const startY = e.clientY;
    const startHeight = height;

    const onMouseMove = (ev) => {
      const delta = startY - ev.clientY;
      const newHeight = Math.max(minHeight, Math.min(maxHeight, startHeight + delta));
      setDragHeight(newHeight);
    };

    const onMouseUp = (ev) => {
      const delta = startY - ev.clientY;
      const finalHeight = Math.max(minHeight, Math.min(maxHeight, startHeight + delta));

      if (panel === "leftPanel") dispatch(setLeftBottomWindowHeight(finalHeight));
      else if (panel === "rightPanel") dispatch(setRightBottomWindowHeight(finalHeight));
      else dispatch(setMiddleBottomWindowHeight(finalHeight));

      setDragHeight(finalHeight);
      setDragging(false);

      // Always remove listeners here!
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }, [dispatch, height, minHeight, maxHeight, panel]);

  return (
    <div
      className={styles.secondaryPanel}
      style={{
        height: dragging ? dragHeight : height,
        maxHeight: "calc(100vh - 50px)",
      }}
    >
      <div className={styles.resizeHandle} onMouseDown={startResize} />
      <div className={styles.panelContent}>
        {view.data && view.data.scannerName && <div>{view.data.scannerName}</div>}
      </div>
    </div>
  );
}