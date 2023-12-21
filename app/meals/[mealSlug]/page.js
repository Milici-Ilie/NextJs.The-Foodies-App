import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
//📳📳[DYNAMIC ROUTES & ROUTE PARAMETERS]📳📳

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound(); //🌋🌋[INDIVIDUAL CONTENT ERROR]🌋🌋
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
} //🌠🌠[DYNAMIC METADATA]🌠🌠 🌠🌠[DYNAMIC METADATA]🌠🌠

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>"); //📳📳[DYNAMIC ROUTES & ROUTE PARAMETERS]📳📳 very important

  return (
    <>
      <header>
        <div className={classes.image}>
          <Image fill src={meal.image} />
        </div>
        {/* 📳📳[DYNAMIC ROUTES & ROUTE PARAMETERS]📳📳 <Image fill/> is provided by NextJS toupload IMG's, we use also the "fill" prop to auto fill the sizes: with, height of the IMG */}
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>NAME</a>
          </p>
          {/* here when the user click the name of the author will open the Email program to sent an email to that person */}
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
        {/* // "dangerouslySetInnerHTML" is a PROP that will display directly cod of
        HTML form another file in our <p>...</p>, better not to use it if you
        can acces those codes with another abordes */}
      </main>
    </>
  );
}
