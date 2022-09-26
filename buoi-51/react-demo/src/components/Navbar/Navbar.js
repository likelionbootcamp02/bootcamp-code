import "./Navbar.css";

function NavItem(props) {
  return (
    <li className="nav-item">
      <a href="" className="nav-link">
        {props.name}
      </a>
    </li>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          {/* Logo */}
          <a href="" className="navbar-brand">
            Logo
          </a>

          {/* Nav links */}
          <ul className="navbar-nav">
            <NavItem name="Home" />
            <NavItem name="Contact" />
            <NavItem name="About" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
