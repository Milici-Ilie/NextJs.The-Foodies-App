import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals"; //"@" represents the root folder
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
}; //🌠🌠[STATIC METADATA]🌠🌠

async function Meals() {
  const meals = await getMeals(); //🔃🔃[LOADING PAGE]🔃🔃 here we create the fallback background content that will be displayed simultaneous with the Loading state === we are calling this function at the bottom of this file 👇

  return <MealsGrid meals={meals} />;
}

//🥒🥒[OUTPUTTING DATA & IMG's]🥒🥒
export default function MealsPage() {
  //🧵🧵[SQLITE DATABASE]🧵🧵 in NextJS we can use "async" inside of a function bcs is a Server Component, check Chat GPT for more info's === and if we had a code that need a promise we can use directly "await" inside of the function, to see and ex. about this check the function "getMeals()" from "meals.js" file from [lib] folder
  // const meals = await getMeals(); //and that's it, no "useEffect" like we do in React, now we can immediatly take data from our backend file ... check bellow 👇 in the <main>...</main> component, there we call this variable "meals" ==== check in the "Meals()" from above 👆 and see why we deleted the "async" from here

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose yout favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Yout Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* 🔃🔃[LOADING PAGE]🔃🔃 we need to wrap our content that we  whant to be visible or loading inside of the <Suspense> ... </Suspense> wich is provided by React, this <Suspende></Suspende> allow us to show fallback content until some data was loaded */}
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
        {/* 🔃🔃[LOADING PAGE]🔃🔃 the "fallback" will take care of the Spinner and the content that must be displayed until the <Meals/> content is loaded by <Suspense/> */}
      </main>
    </>
  );
}
