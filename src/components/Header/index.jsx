import { Link } from 'react-router-dom';

import styles from './header.module.scss';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.location}>
        <FaMapMarkerAlt className={styles.map_icon}/>
        <span>Минск</span>
      </div>
      <div className={styles.pages}>
        <Link to='/signin'><p>Войти</p></Link>
        <Link to='manage'><p>Управление магазином</p></Link>
        <Link to='novetly'><p>Новинки</p></Link>
        <Link to='supliers'><p>Для поставщиков</p></Link>
        <Link to='contest'><p>О конкурсе</p></Link>
        <Link to='support'><p>Поддержка</p></Link>
      </div>
      <div className={styles.theme}>
        <MdSunny className={styles.sun_icon}/>
        <span>Светлая</span>
      </div>
    </div>
  )
}

export default Header;
