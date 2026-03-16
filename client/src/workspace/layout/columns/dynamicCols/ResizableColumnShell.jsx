import { useDispatch, useSelector } from 'react-redux';
import { setLeftPanelWidth, setRightPanelWidth } from '../../../workspaceSlice';
import styles from './ResizableColumnShell.module.css';

export default function ResizableColumnShell({ panel, direction, children }) {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.workspace[panel]);

  if (!state?.visible) return null;

  const startResize = (e) => {
    if (!direction) return; // middle column: no resize
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = state.width;

    const onMove = (ev) => {
      const delta = direction === 'left' ? ev.clientX - startX : startX - ev.clientX;
      const newWidth = startWidth + delta;

      if (panel === 'leftPanel') {
        dispatch(setLeftPanelWidth(newWidth));
      } else if (panel === 'rightPanel') {
        dispatch(setRightPanelWidth(newWidth));
      }
      // mid panel: no resize
    };

    const stop = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', stop);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', stop);
  };

  return (
    <div
      className={styles.panel}
      style={{
        width: direction ? state.width : 'auto', // middle: auto width
        flex: panel === 'midPanel' ? 1 : 'none', // middle grows to fill
      }}
    >
      <div className={styles.content}>
        {children /* Top + Bottom workspace or dynamic content */}
      </div>

      {direction && (
        <div
          className={styles.resizeHandle}
          style={{
            right: direction === 'left' ? 0 : 'auto',
            left: direction === 'right' ? 0 : 'auto',
          }}
          onMouseDown={startResize}
        />
      )}
    </div>
  );
}