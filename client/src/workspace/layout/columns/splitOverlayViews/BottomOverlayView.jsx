import { useDispatch, useSelector } from "react-redux";
import { setMiddleBottomWindowHeight, setLeftBottomWindowHeight, setRightBottomWindowHeight } from "../../../workspaceSlice";
import { useState, useCallback } from "react";
import styles from "./BottomOverlayView.module.css";
import { panelRegistry } from "../../../views/panels/panelRegistry";

export default function BottomOverlayView({ viewId, panel }) {
  console.log("rendering bottom overlay")
  const dispatch = useDispatch();
  const { height, minHeight, maxHeight } = useSelector(
    (state) => state.workspace.bottomWindowViewData[panel]
  );

  // const Panel = panelRegistry[view.viewType];

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



  
  // ============ Panel Registry ==============
  const view = useSelector((state) => state.views.views[viewId]);
  if (!view) return null;
  
  const Panel = panelRegistry[view.viewType];
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
          
        <Panel {...view.data} />
      </div>

    </div>
  );
}