import { Link } from 'react-router-dom';

import error from '../../assets/img/404.png';

import styles from './NotFoundedBlobk.module.scss';

const NotFoundedBlock = () => {
  return (
    <div className={styles.container}>
      <img className={styles.error_image} alt="not founded" src={error}/>
      <p className={styles.error_text}>Страница не найдена, <Link to='/' className={styles.error_text_return}>вернуться на главную?</Link></p>
    </div>
  )
}

export default NotFoundedBlock;
