import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { HiSearch } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";

import styles from './SearchEngine.module.scss';

import logo from '../../assets/img/logo.png';
import sublogo from '../../assets/img/sublogo.png';

export const SearchEngine = () => {
  return (
    <section className={styles.container}>
      <div className={styles.category}>
        <div className={styles.category_container}>
          <BiCategory className={styles.category_icon} />
        </div>
      </div>
      <div className={styles.logo}>
        <img className={styles.logo_image} src={logo} />
      </div>
      <div className={styles.search_container}>
        <div className={styles.everywhere}>
          <img className={styles.search_logo} src={sublogo}/>
          Везде
        </div>
        <form className={styles.search}>
          <img className={styles.search_sublogo} src={sublogo}/>
          <input type="search" placeholder="Искать на Shop" className={styles.search_line} />
          <button className={styles.search_reset}>
            <RxCross2 />
          </button>
          <button className={styles.search_button}>
            <HiSearch />
          </button>
        </form>
      </div>
      <div className={styles.container_settings}>
        <Link to='favorites' className={styles.icon_container}><MdFavoriteBorder className={styles.icon} /></Link>
        <Link to='cart' className={styles.icon_container}><BsCart4 className={styles.icon} /></Link>
        <Link to='registration' className={styles.icon_container}><AiOutlineUser className={styles.icon} /></Link>
      </div>
    </section>
  )
}

export default SearchEngine;
