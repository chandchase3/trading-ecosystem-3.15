import styles from "./MainLayout.module.css";
import MiddleColumnLayoutMain from "../columns/middle/MiddleColumnLayoutMain";

export default function MainColumnMiddle() {
  return (
    <div className={styles.mainColumn}>
      <MiddleColumnLayoutMain />
    </div>
  );
}