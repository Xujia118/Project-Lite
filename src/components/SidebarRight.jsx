import "./SideBarRight.css";

function SideBarRight() {
    return ( 
        <aside className="sidebar right">
            <h3 className="sidebar-title">Wish List</h3>
            <ul className="sidebar-menu">
                <li><a className="sidebar-link" href="">Learn React</a></li>
                <li><a className="sidebar-link" href="">Laundry</a></li>
                <li><a className="sidebar-link" href="">ENCP Assignment</a></li>
            </ul>
        </aside>
     );
}

export default SideBarRight;