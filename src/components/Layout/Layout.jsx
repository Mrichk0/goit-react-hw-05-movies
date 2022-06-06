import { NavLink, Outlet } from 'react-router-dom';

import styles from './layout.module.css';

const getActiveLink = ({ isActive }) =>
  isActive ? styles.linkActive : styles.link;

const Layout = () => {
  return (
    <>
      <header className={styles.menu}>
        <nav>
          <ul className={styles.menuNav}>
            <li className={styles.menuBtn}>
              <NavLink className={getActiveLink} to="/">
                Home
              </NavLink>
            </li>
            <li className={styles.menuBtn}>
              <NavLink className={getActiveLink} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
