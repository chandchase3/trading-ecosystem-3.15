import TopNav from './navs/TopNav';
import BottomNav from './navs/BottomNav';
import ColumnLayout from "./columns/ColumnLayout";
import styles from './WorkspaceLayout.module.css';

export default function WorkspaceLayout() {

  return (
    <div className={styles.container}>
      <TopNav />

      <div className={styles.body}>
<ColumnLayout colId={1} panel="leftPanel" direction="left" />
<ColumnLayout colId={2} panel="midPanel" />
<ColumnLayout colId={3} panel="rightPanel" direction="right" />
      </div>
      <BottomNav />
    </div>
  );
}