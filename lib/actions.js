"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === ""; //👮‍♀️👮‍♀️[INPUT VALIDATION]👮‍♀️👮‍♀️ === also we need to pass the prop "prevState" down in the "ShareMeal" function PROP's for this to work
}

//🍕🍕[HANDLING FORM SUBMISSIONS]🍕🍕
export async function shareMeal(prevState, formData) {
  // if (!formData || typeof formData.get !== "function") {
  //   return { message: "Invalid form data." };
  // }
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  }; //we take the exact data and centralize them in the exact sport where we need them thanks to the titles that we give to all the <input's.../> fields that we create, they are connected with the <input's.../> thanks to the "name=title", etc...
  console.log(meal);

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Invalid input." };
  } //👮‍♀️👮‍♀️[INPUT VALIDATION]👮‍♀️👮‍♀️ this will display an error if one of the demands from above are not correctly completed

  // console.log(meal); //🍕🍕[HANDLING FORM SUBMISSIONS]🍕🍕 with this "console.log" we check in the Terminal if our Input Field Form works.
  await saveMeal(meal);
  // revalidatePath("/", "layout");
  revalidatePath("/meals"); //🚓🚓[FIXING NEXT.JS FOR PRODUCTION]🚓🚓 we need to use this function to FIX the cahce NextJS, we use this to every page that need to be revalidate, that has some info's/data's that must be reloaded, refactched, we must pass the path of the page that we want to re-validate, in our case ('/meals') ==== NOTE ❗❗ if we wanted to revalidate all the pages we could write ('/', 'layout')
  redirect("/meals");

  //this will redirect the user to another page after he created the "meals" in our case, some new content
} //🍕🍕[HANDLING FORM SUBMISSIONS]🍕🍕 ❗IMPORTANT❗ check the "action={shareMeal}" from the <form .../>, NextJS gives us the possibilit to collect directly all the data's from the <input's.../> only doing this stuffs by creating this function and calling it in the <form .../>
