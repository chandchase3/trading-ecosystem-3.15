import SideColumnShell from "../columns/shells/SideColumnShell";
import LeftColumnLayoutMain from "../columns/left/LeftColumnLayoutMain";

export default function MainColumnLeft() {
  return (
    <SideColumnShell panel="leftPanel" direction="left">
      <LeftColumnLayoutMain />
    </SideColumnShell>
  );
}