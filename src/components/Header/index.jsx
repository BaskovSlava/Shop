import { Link } from 'react-router-dom';

import styles from './header.module.scss';

import { FaMapMarkerAlt } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.location}>
        <FaMapMarkerAlt className={styles.location_map_icon}/>
        <span className={styles.location_city}>Минск</span>
      </div>
      <nav className={styles.nav}>
        <Link to='/signin'><p className={styles.nav_element}>Войти</p></Link>
        <Link to='/manage'><p className={styles.nav_element}>Управление магазином</p></Link>
        <Link to='/novetly'><p className={styles.nav_element}>Новинки</p></Link>
        <Link to='/supliers'><p className={styles.nav_element}>Для поставщиков</p></Link>
        <Link to='/contest'><p className={styles.nav_element}>О конкурсе</p></Link>
        <Link to='/support'><p className={styles.nav_element}>Поддержка</p></Link>
      </nav>
      <div className={styles.theme}>
        <MdSunny className={styles.theme_sun_icon}/>
        <span className={styles.theme_color}>Светлая</span>
      </div>
    </header>
  )
}

export default Header;
