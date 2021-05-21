import React, { useCallback, useEffect, useState } from 'react';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import Styles from './AvailableMeals.module.css';

const AvailableMeals = props => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMeals = useCallback(async () => {
      const response = await fetch('https://react-http-689f4-default-rtdb.firebaseio.com/meals.json');
      const data = await response.json();

      if(!response.ok)
        throw new Error('Something went wrong...');

      const meals = [];
      
      for(let key in data) {
        let meal = data[key];

        meals.push({...meal, id: key});
      }

      setMeals(meals)
    }, []);

    // Will only run on the first rendering!
    useEffect(() => {
      // Cannot use await keyword in useEffect
      fetchMeals().catch(error => setError(error.message));
      setIsLoading(false);
    }, [fetchMeals]);

    const toAvailableMeals = () => {
        return meals.map(meal => {
            return <MealItem key={meal.id} name={meal.name} id={meal.id}
              description={meal.description} price={meal.price}/>;
        });
    }

    const showAvailableMeals = () => {
      let loading = (<section className={Styles['meals-loading']}>
        <p>Loading...</p></section>);
      
      return isLoading ? loading : 
      (<section className={Styles.meals}>
        <Card>{toAvailableMeals()}</Card>
      </section>);
    };

    if(error)
      return <section className={Styles['meals-error']}><p>Something went wrong...</p></section>;
    else 
      return showAvailableMeals();
};

export default AvailableMeals;