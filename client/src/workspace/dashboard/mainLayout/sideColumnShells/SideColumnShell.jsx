import { useDispatch, useSelector } from 'react-redux';
import { setLeftPanelWidth, setRightPanelWidth } from '../../../workspaceSlice';
import styles from './SideColumnShell.module.css';

export default function SideColumnShell({ panel, direction, children }) {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.workspace[panel]);

  if (!state.visible) return null;

  const startResize = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = state.width;

    const onMove = (ev) => {
      const delta = direction === 'left' ? ev.clientX - startX : startX - ev.clientX;
      const newWidth = startWidth + delta;

      if (panel === 'leftPanel') {
        dispatch(setLeftPanelWidth(newWidth));
      } else {
        dispatch(setRightPanelWidth(newWidth));
      }
    };

    const stop = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', stop);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', stop);
  };

  return (
    <div className={styles.panel} style={{ width: state.width }}>
      <div className={styles.content}>
        {children /* LeftColumnLayoutMain will render Top + Bottom Workspace */}
      </div>
      <div
        className={styles.resizeHandle}
        style={{
          right: direction === 'left' ? 0 : 'auto',
          left: direction === 'right' ? 0 : 'auto',
        }}
        onMouseDown={startResize}
      />
    </div>
  );
}