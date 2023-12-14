import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <ul className="nav-menu">
        <li className="menu-item">
          <a className="menu-link" href="">
            <h3>item1</h3>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="">
            <h3>item2</h3>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="">
            <h3>Support</h3>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
