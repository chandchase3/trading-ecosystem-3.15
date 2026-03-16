import SideColumnShell from "./sideColumnShells/SideColumnShell";
import LeftColumnLayoutMain from "../columnLayoutLeft/LeftColumnLayoutMain";

export default function MainColumnLeft() {
  return (
    <SideColumnShell panel="leftPanel" direction="left">
      <LeftColumnLayoutMain />
    </SideColumnShell>
  );
}