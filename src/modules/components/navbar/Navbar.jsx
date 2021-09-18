import { NavLink } from "react-router-dom";

import routes from "../../utils/routes";

const Navbar = () => {
  return (
    <div>
      <nav>
        {routes.map(({ dest, name }, key) => (
          <NavLink key={key} to={dest}>
            {name}
          </NavLink>
        ))}
        <NavLink to="unknown">404</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
