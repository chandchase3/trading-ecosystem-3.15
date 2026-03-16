import TopNav from './navs/TopNav';
import BottomNav from './navs/BottomNav';
import ColumnLayout from "./columns/ColumnLayout";
import styles from './WorkspaceLayout.module.css';

export default function WorkspaceLayout() {

  return (
    <div className={styles.container}>
      <TopNav />

      <div className={styles.body}>
        <ColumnLayout panel="leftPanel" colId={1} direction="left" topView={1} bottomView={101} />
        <ColumnLayout panel="midPanel"colId={2} topView={2} bottomView={102} />
        <ColumnLayout panel="rightPanel" colId={3}  direction="right" topView={3} bottomView={103} />
      </div>
      <BottomNav />
    </div>
  );
}