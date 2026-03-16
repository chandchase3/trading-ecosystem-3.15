import SideColumnShell from "./SideColumnShell";
import LeftColumnLayout from "../columns/left/LeftColumnLayout";

export default function MainColumnLeft() {
  return (
    <SideColumnShell panel="leftPanel" direction="left">
      <LeftColumnLayout />
    </SideColumnShell>
  );
}