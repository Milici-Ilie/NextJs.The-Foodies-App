"use client";
//⛔⛔[HANDLING ERROS]⛔⛔

export default function Error() {
  //NOTE!!! inside of "Error(...here...)" we ca add ({error}) and NextJS will give us more details about the Error, and possible we can style thise errors, ask CHAT GPT for more info's about it
  return (
    <main className="error">
      <h1>Meal not found!</h1>
      <p>Failed to create meal.</p>
    </main>
  );
}
