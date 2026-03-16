import { useDispatch, useSelector } from "react-redux";
import {
  setMiddleBottomWindowHeight,
  setLeftBottomWindowHeight,
  setRightBottomWindowHeight
} from "../../../workspaceSlice";

import { useState } from "react";
import styles from "./BottomWorkspaceShell.module.css";

export default function BottomWorkspaceShell({ children, view = "mid" }) {
  const dispatch = useDispatch();

  const { height, minHeight, maxHeight } = useSelector(
    (state) => state.workspace.bottomWindowViewData[`${view}View`]
  );

  const [dragHeight, setDragHeight] = useState(height);
  const [dragging, setDragging] = useState(false);

  const startResize = (e) => {
    e.preventDefault();
    setDragging(true);
    const startY = e.clientY;
    const startHeight = height;

    const onMouseMove = (eMove) => {
      let delta;
      if (view === "left" || view === "right") {
        // flip delta for side panels so dragging up increases height
        delta = startY - eMove.clientY;
      } else {
        delta = startY - eMove.clientY; // middle panel behaves normally
      }

      const newHeight = Math.max(minHeight, Math.min(maxHeight, startHeight + delta));
      setDragHeight(newHeight);
    };

    const onMouseUp = (eUp) => {
      let delta;
      if (view === "left") {
        delta = startY - eUp.clientY;
        const finalHeight = Math.max(minHeight, Math.min(maxHeight, startHeight + delta));
        dispatch(setLeftBottomWindowHeight(finalHeight));
        setDragHeight(finalHeight);
      } else if (view === "right") {
        delta = startY - eUp.clientY;
        const finalHeight = Math.max(minHeight, Math.min(maxHeight, startHeight + delta));
        dispatch(setRightBottomWindowHeight(finalHeight));
        setDragHeight(finalHeight);
      } else {
        delta = startY - eUp.clientY;
        const finalHeight = Math.max(minHeight, Math.min(maxHeight, startHeight + delta));
        dispatch(setMiddleBottomWindowHeight(finalHeight));
        setDragHeight(finalHeight);
      }

      setDragging(false);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      className={styles.secondaryPanel}
      style={{
        height: dragging ? dragHeight : height,
        maxHeight: "calc(100vh - 50px)",
      }}
    >
      <div
        className={styles.resizeHandle}
        onMouseDown={startResize}
      />
      <div className={styles.panelContent}>
        {children}
      </div>
    </div>
  );
}