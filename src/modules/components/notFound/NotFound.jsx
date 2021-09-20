import { Link } from "react-router-dom";

import styles from "./notFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.nfContainer}>
      <p className={styles.message}>404 &nbsp;|&nbsp; Not Found</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
