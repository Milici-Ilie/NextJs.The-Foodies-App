"use client";
import { shareMeal } from "@/lib/actions";
import { useFormState } from "react-dom";
import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
//🛂🛂[CREATING NEW CONTENT]🛂🛂
export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null }); //👮‍♀️👮‍♀️[INPUT VALIDATION]👮‍♀️👮‍♀️ HOOK provided by "React-dom"//// this HOOK is responsible for managing the state of this page wich uses a Form Input that will be submitted with help of Server Actions ... for more details about this HOOK and how it works ask Chat GPT and/or check the Lesson 125 from Next.JS course "Working with Server Action Responses & useFormState"... check also at the bottom of the file 👇

  // async function shareMeal(formData) {
  //   "use server"; // 🍕🍕[HANDLING FORM SUBMISSIONS]🍕🍕 "use server" is used every time when we create a function that takes effect on the server, this is going to be a Server Action

  //   const meal = {
  //     title: formData.get("title"),
  //     summary: formData.get("summary"),
  //     instruction: formData.get("instruction"),
  //     image: formData.get("image"),
  //     creator: formData.get("name"),
  //     creator_email: formData.get("email"),
  //   }; //we take the exact data and centralize them in the exact sport where we need them thanks to the titles that we give to all the <input's.../> fields that we create, they are connected with the <input's.../> thanks to the "name=title", etc...

  //   console.log(meal); //🍕🍕[HANDLING FORM SUBMISSIONS]🍕🍕 with this "console.log" we check in the Terminal if our Input Field Form works.
  // } //🍕🍕[HANDLING FORM SUBMISSIONS]🍕🍕 ❗IMPORTANT❗ check the "action={shareMeal}" from the <form .../>, NextJS gives us the possibilit to collect directly all the data's from the <input's.../> only doing this stuffs by creating this function and calling it in the <form .../>

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          {/* 🛂🛂[CREATING NEW CONTENT]🛂🛂 calling the Uploading IMG function */}
          {
            state.message && <p>{state.message}</p>
            // 👮‍♀️👮‍♀️[INPUT VALIDATION]👮‍♀️👮‍♀️
          }
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
          {/* 🚇🚇[SUBMISSION STATUS]🚇🚇 */}
        </form>
      </main>
    </>
  );
}
