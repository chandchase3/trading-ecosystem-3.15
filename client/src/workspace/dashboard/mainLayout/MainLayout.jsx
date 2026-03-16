import { useSelector } from 'react-redux';
import TopNav from '../navs/TopNav';
import BottomNav from '../navs/BottomNav';
import MainColumnRight from './MainColumnRight';
import MainColumnLeft from './MainColumnLeft';
import MainColumnMiddle from './MainColumnMiddle';
import styles from './MainLayout.module.css';

export default function MainLayout() {
  const workspace = useSelector((state) => state.workspace);

  return (
    <div className={styles.container}>
      <TopNav />

      <div className={styles.body}>
        {workspace.leftPanel.visible && <MainColumnLeft />}
        <MainColumnMiddle />
        {workspace.rightPanel.visible && <MainColumnRight />}
      </div>

      <BottomNav />
    </div>
  );
}