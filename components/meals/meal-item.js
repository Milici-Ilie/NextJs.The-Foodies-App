import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.css";
//🥒🥒[OUTPUTTING DATA & IMG's]🥒🥒
//🧵🧵[SQLITE DATABASE]🧵🧵 here is created the CARD content of our Meals presentation
export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
          {/* here we are uploading IMG's with different dimension, the user will be able to upload IMG's with different dimensions ... we can use "fill" prop instead of setting a "width" and "height" whenever we have an IMG where we dont know the dimensions in advance */}
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
          {/* the ${slug} component will make the selected "meal" to be dynamic, auto selected by connecting it with the Folder "[mealSlug]" and the file "page.js" from there */}
        </div>
      </div>
    </article>
  );
}
