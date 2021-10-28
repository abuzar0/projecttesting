import { NavLink, useHistory } from "react-router-dom";

import routes from "../../utils/routes";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const history = useHistory();

  return (
    <div className={styles.navContainer}>
      <nav>
        <h1 className={styles.navBrand} onClick={() => history.push("/")}>MovieZ</h1>
        <div className={styles.navLinks}>
          {routes.map(
            ({ dest, name }, key) =>
              name && (
                <NavLink key={key} to={dest}>
                  {name}
                </NavLink>
              )
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
