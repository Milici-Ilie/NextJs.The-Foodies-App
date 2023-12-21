//🧵🧵[SQLITE DATABASE]🧵🧵 here we want to write code that will take data/info's from the DATA BASE "initdb.js" file, our backend file
// import Error from "@/app/meals/error";
import sql from "better-sqlite3"; // this "better-sqlite3" is provided by NextJS
import slugify from "slugify";
import xss from "xss";
//📵📵[XSS PROTECTION]📵📵 check the "slugify" and "xss" from above
import fs from "node:fs"; // 📷📷[STORING IMG's]📷📷 working with File System/ API

const db = sql("meals.db"); //we took the "sql" from above and use it as a function, and connect it with our "meals.db" backend file

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); //🧵🧵[SQLITE DATABASE]🧵🧵 here we are creating a delay of 2s before the App displays the data & also this is just an ex. to see that how to directly connect "async" in the function and immediatly use "await" after

  // throw new Error("Loading meals failed"); //⛔⛔[HANDLING ERROS]⛔⛔ this was just for testing purposses. by activating this line of code you will se the Error after 3 sec of loading the Meals in the Meals page of the App and display ing the Error after those 3 sec
  return db.prepare("SELECT * FROM meals").all(); //🧵🧵[SQLITE DATABASE]🧵🧵 ".all()" method is used to fetch data in our backend base and whant to get all the rows that are Fetched by that statement, ===== ".run()" will be used to insert/change data, ===== if we want to get a single row we must use ".get()"
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

//📵📵[XSS PROTECTION]📵📵 👇
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true }); //will make the letters lower case
  meal.instructions = xss(meal.instructions); //protection against scripting

  const extension = meal.image.name.split(".").pop(); //📷📷[STORING IMG's]📷📷 from here to bellow we are creating the method to not store the IMG in the Data base and just create a "path" to that IMG, better for persormance
  const fileName = `${meal.slug}.${extension}`; //📷📷[STORING IMG's]📷📷 creating a new name for every picture
  //📷📷[STORING IMG's]📷📷 we are storing the IMG in our "image:formData.get('image')" in the function "shareMeal" from the "actions.js" file

  const stream = fs.createWriteStream(`public/images/${fileName}`); //here we are using the imported "fs" with the variable "fileName" to create new names, we also write the "path" to our IMG's 'puclic/images/...'
  const bufferedImage = await meal.image.arrayBuffer(); //for more info's ask Chat GPT

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });

  meal.image = `/images/${fileName}`; //📷📷[STORING IMG's]📷📷

  db.prepare(
    `INSERT INTO meals 
    (title, summary, instructions, creator, creator_email, image, slug) 
    VALUES (
      @title,
      @summary, 
      @instructions, 
      @creator, 
      @creator_email, 
      @image, 
      @slug
      )
   `
  ).run(meal); //respect the order
}
