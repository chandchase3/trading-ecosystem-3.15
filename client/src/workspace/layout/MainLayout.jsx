import TopNav from '../navs/TopNav';
import BottomNav from '../navs/BottomNav';
import SideColumnShell from "../columns/shells/SideColumnShell";
import TopWorkspaceShell from "../columns/shells/TopWorkspaceShell";
import BottomWorkspaceShell from "../columns/shells/BottomWorkspaceShell";
import LeftWindowLayoutTop from "./LeftWindowLayoutTop";
import LeftWindowLayoutBottom from "./LeftWindowLayoutBottom";
import MiddleWindowLayoutTop from "./MiddleWindowLayoutTop";
import MiddleWindowLayoutBottom from "./MiddleWindowLayoutBottom";

import styles from './MainLayout.module.css';

export default function MainLayout() {

  return (
    <div className={styles.container}>
      <TopNav />

      <div className={styles.body}>

        <SideColumnShell panel="leftPanel" direction="left">
          <TopWorkspaceShell view="left">
            <div>hi</div>
          </TopWorkspaceShell>

            <BottomWorkspaceShell view="left">
            <div>hi</div>
            </BottomWorkspaceShell>
        </SideColumnShell>

        <SideColumnShell panel="midPanel">
          <TopWorkspaceShell view="mid">
            <div>hi</div>
          </TopWorkspaceShell>

          <BottomWorkspaceShell view="mid">
            <div>hi</div>
          </BottomWorkspaceShell>
        </SideColumnShell>

        <SideColumnShell panel="rightPanel" direction="right">
          <TopWorkspaceShell view="right">
            <div>hi</div>
          </TopWorkspaceShell>
          <BottomWorkspaceShell view="right">
            <div>hi </div>
          </BottomWorkspaceShell>
        </SideColumnShell>

      </div>
      <BottomNav />
    </div>
  );
}