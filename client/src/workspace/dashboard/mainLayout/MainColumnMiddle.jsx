import styles from "./MainLayout.module.css";
import MiddleColumnLayoutMain from "../columnLayoutMiddle/MiddleColumnLayoutMain";

export default function MainColumnMiddle() {
  return (
    <div className={styles.mainColumn}>
      <MiddleColumnLayoutMain />
    </div>
  );
}