import { Link, NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

const NavBar = () => {
    return <header className={styles.header}>
        <nav>
            <ul>
                {/* Link/NavLink component prevents page reloading  */}
                <li><NavLink activeClassName={styles.active} to='/welcome'>Welcome</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/products'>Products</NavLink></li>
            </ul>
        </nav>
    </header>;
};

export default NavBar;