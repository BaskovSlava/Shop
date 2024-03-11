import { Link } from 'react-router-dom';

import styles from './PopularCategories.module.scss';

const PopularCategories = ({ name, image }) => {
  const urlCategories = '/categories/' + name;
  return (
    <Link to={urlCategories}>
    <div className={styles.container}>
      <img className={styles.categories_image} src={image}/>
      <p className={styles.categories_name}>{name}</p>
    </div>
    </Link>
  )
}

export default PopularCategories;
