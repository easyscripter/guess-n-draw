import { Outlet } from "react-router-dom";
import Header from "../Header";
import styles from "./Layout.module.scss";
const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
