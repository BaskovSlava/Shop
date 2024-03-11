import React from "react";
import styles from "../../components/Footer/footer.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import imgLogo from "../Footer/img/shop.jpg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.item, styles.item_1)}>
        <h2>
          <span className={styles.circleImage}>
            <img className={styles.shopLogo} src={imgLogo} alt="shop" />
          </span>
          Shop
        </h2>
        <p>
          Огромный ассортимент товаров для бизнеса. Shop.com - это оптовый
          маркетплейс, на котором вы найдете товары по отличным ценам напрямую
          от поставщиков. Найдите свой товар без суеты среди широкого количества
          продавцов.
        </p>
      </div>
      <div className={classNames(styles.item, styles.item_2)}>
        <h2>Сайт</h2>
        <p>
          <Link to=''>Для поставщиков</Link>
        </p>
        <p>
          <Link to=''>Помощь</Link>
        </p>
      </div>
      <div className={classNames(styles.item, styles.item_3)}>
        <h2>Информация</h2>
        <p>
          <Link to=''>Пользовательское соглашение</Link>
        </p>
        <p>
          <Link to=''>Политика обработки персональных данных</Link>
        </p>
        <p>
          <Link to=''>Контент</Link>
        </p>
      </div>
      <div className={classNames(styles.item, styles.item_3)}>
        <h2>Подпишитесь на наш канал в Telegram</h2>
        <p>
          <Link to=''>Чтобы быть в курсе всех акций и скидок</Link>
        </p>
        <div className={styles.buttonTg}>
          <p className={styles.buttonTgColorText}> Перейти в Telegram </p>
        </div>
      </div>
      <div className={classNames(styles.item, styles.item_3)}>
          <div className="socialNetworks"><Link to=''><img src="" alt="" /></Link></div>
          <div className="socialNetworks"><Link to=''><img src="" alt="" /></Link></div>
          <div className="socialNetworks"><Link to=''><img src="" alt="" /></Link></div>
        <div className={styles.buttonTg}>
          <p className={styles.buttonTgColorText}> Перейти в Telegram </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
