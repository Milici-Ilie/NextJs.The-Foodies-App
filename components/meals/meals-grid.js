import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";
//🥒🥒[OUTPUTTING DATA & IMG's]🥒🥒
//🧵🧵[SQLITE DATABASE]🧵🧵 here we imported the content of the Meals Cards
export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
