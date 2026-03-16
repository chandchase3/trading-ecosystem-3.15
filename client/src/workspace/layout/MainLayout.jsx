import TopNav from '../navs/TopNav';
import BottomNav from '../navs/BottomNav';
import ColumnLayout from "./ColumnLayout";
import styles from './MainLayout.module.css';

export default function MainLayout() {

  return (
    <div className={styles.container}>
      <TopNav />

      <div className={styles.body}>
        <ColumnLayout panel="leftPanel" topView={1} bottomView={101} />
        <ColumnLayout panel="midPanel" topView={2} bottomView={102} />
        <ColumnLayout panel="rightPanel" topView={3} bottomView={103} />
      </div>
      <BottomNav />
    </div>
  );
}4 