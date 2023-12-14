import "./Navbar.css";

function Navbar({ showMenu }) {
  return (
    <nav className={`nav-bar ${showMenu ? "open" : ""}`}>
      <ul className="nav-menu">
        <li className="menu-item">
          <a className="menu-link" href="">
            <h2>New</h2>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="">
            <h2>Dashboard</h2>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="">
            <h2>Reports</h2>
          </a>
        </li>
      </ul>

      <div className="nav-control">
        <input type="checkbox" />
        Toggle
      </div>
    </nav>
  );
}

export default Navbar;
