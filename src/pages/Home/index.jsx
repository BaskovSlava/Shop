import { useEffect, useState } from "react";

import SkeletonPopularCategories from "../../components/SkeletonPopularCategories";
import PopularCategories from '../../components/PopularCategories'

import styles from './Home.module.scss';

const Home = () => {
  const [popularCategories, setPopularCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.escuelajs.co/api/v1/categories?limit=5')
      .then((res) => res.json())
      .then((categories) => {
        setPopularCategories(categories)
        setIsLoading(false);
      })
  }, []);
  return (
    <div className={styles.popular_categories_container}>
      <p className={styles.popular_categories}>Популярные категории</p>
      <div className={styles.categories_container}>
        {
          isLoading ? [...new Array(5)].map((_, index) => <SkeletonPopularCategories key={index} />) : popularCategories.map((obj) => <PopularCategories key={obj.id} {...obj}/>)
        }
      </div>
    </div>
  )
}

export default Home;
