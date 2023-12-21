"use client";
import { useFormStatus } from "react-dom";
//🚇🚇[SUBMISSION STATUS]🚇🚇
export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
} //🚇🚇[SUBMISSION STATUS]🚇🚇 ternary operator to check if the Button was pressed pr not === now go and check the "page.js" file from "SHARE" folder
