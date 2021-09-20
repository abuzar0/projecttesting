import { NavLink } from "react-router-dom";

import routes from "../../utils/routes";

import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <nav>
        <h1 className={styles.navBrand}>App</h1>
        <div className={styles.navLinks}>
          {routes.map(
            ({ dest, name }, key) =>
              name && (
                <NavLink key={key} to={dest}>
                  {name}
                </NavLink>
              )
          )}
          <NavLink to="unknown" exact>
            404
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
