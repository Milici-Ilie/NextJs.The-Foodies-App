                                                                              # Cuprins #

# 1. NEXT-JS COURSE

> How to INSTALL NEXT-JS ===> Terminal: "npx create-next-app@latest"❗❗

> If the code is to old in our version of NextJS and React than update and install: ===> Terminal: "npm install next@latest react@latest react-dom@latest"
> How to install REACT-ICONS ===> Terminal: "npm install react-icons"
> HOW to install React-Router ===> Terminal: "npm install react-router-dom"
> Check DOC about "structuring NextJS" projects

# 2. REACT REFRESHER

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > (((REACT-CRASH-COURSE project))) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    ## ✅I. -How to create a project with REACT-APP or VITE.

                                                                     ❗❗❗[INSTALLING REACT & VITE]❗❗❗

-Fore React: "npx create-react-app my-app"
-For Vite: "npm create vite"
-Terminal: "npm install" => to instal the "node_modules"

    ## ✅II. -Outputting Dynamic Values
              -How to create a random Array with names

[Post.jsx]

                                                                        ❗❗❗[DYNAMIC VALUES]❗❗❗

    ## ✅III. -Reusing Components

[App.jsx]

                                                                        ❗❗❗[REUSING COMPONENTS]❗❗❗

    ## ✅IV. -Passing data between components with PROPS

[App.jsx]/[Post.jsx]

                                                                            ❗❗❗[USING PROPS]❗❗❗

    ## ✅V. -CSS Styling & CSS Modules
             -How to create classes auttomatically with React

[Post.jsx]/[Post.module.css]

-We need to create a file named "Post.module.css", it's very necessary to have that "...module..." this is how REACT will recognize that file and it will know that he need to create random class names for our CSS variables

                                                                            ❗❗❗[CSS MODULES]❗❗❗

    ## ✅VI. -Exercise and another Component
              -How to connect files between tham, custom HOOK
              -How to import CSS classes

-Check the files to see how we used the PROPS and how we imported files
-For this check the connection between the files:

[App.jsx]/[PostList.jsx]/[Post.jsx]/[PostList.module.css] =>this is the order of tracking the connection between files, start with "App.jsx" and go on with the file imports

                                                                        ❗❗❗[ANOTHER COMPONENT]❗❗❗

    ## ✅VII. How to use "STATE" management: "useState", "useEffect", etc

[NewPost.jsx]/[NewPost.module.css]/[PostList.jsx]

                                                                        ❗❗❗[STATE MANAGEMENT]❗❗❗

    ## ✅VIII. -Adding Event-Listeners
                -Working with States
                -How to store the data from the INPUT field and past it in a completely new auttomatically created content every time when we text something

=>First we need to create a function that must be doing what we need (check "changeBodyHandler" function for ex. in the "NewPost.jsx" file) and than we must past the "onChange" prop where is need it
=>We use "Event-Listeners" when we have same data that must be loaded, again and again, everytime when we change some data's
=>Check for "onChange" prop to see how to refatch data from <textarea/>
=>to pass the text from the INPUT field in a new content we must use "useState" Ract HOOK to do this

[NewPost.jsx]

                                                                            ❗❗❗[EVENT LISTENER & STATES]❗❗❗

    ## ✅IX. -Lifting State UP
              -How to use a "useState" or any other HOOK in the Parent file to be accesible in every file
              -HOOK State, making a state usable to all the files

=> If we have a state that is created in component A, but we need it in the component B we need to lift this state UP making it accesible to all the files that are connected with it

[NewPost.jsx]/[PostList.jsx]

                                                                            ❗❗❗[LIFTING THE STATE UP]❗❗❗

    ## ✅X. -The special children PROPS
             -How to pass PROPS/VALUES between files
             -How to create a POP-UP when you click a button

[PostList.jsx]/[Modal.jsx]

                                                                                ❗❗❗[CHILDREN PROPS]❗❗❗

    ## ✅XI. -State and conditional Content
              -How to close the MODAL WINDOW/ POP-UP content by pressing the BACKGROUND or the CLOSE Button

[PostList.jsx]/[Modal.jsx]

                                                                                ❗❗❗[MODAL WINDOW/POP-UP]❗❗❗

    ## ✅XII. -Adding a Shared Header & More State Management
               -How to open the MODAL WINDOW/ POP-UP content when we press a Button
               -How to create a Header

[MainHeader.jsx]/[App.jsx.=>replacing.the.name.with.the.file=>"Posts.jsx"]/[PostList.jsx]/[]

                                                                                ❗❗❗[POP-UP BUTTON]❗❗❗

    ## ✅XIII. Adding the Form Buttons

[NewPost.jsx]/[PostsList.jsx]

                                                                                ❗❗❗[FORM BUTTONS]❗❗❗

    ## ✅XIV. -Handling Form Submission
               -How to Submit the content MODAL WINDOW/POP-UP when press the "Submit" button
               -How to create dinamically/automatically new content when "Submit" the FORM

[NewPost.jsx]

                                                                                ❗❗❗[SUBMIT THE FORM]❗❗❗

    ## ✅XV. -Updating State Based on Previous State
              -How to take data from the INPUT content and create dynamically a new content in the page/display instead of hard coding

=> First we must take the data from "function submitHandler(event){...}" from "NewPost.jsx" file, check the "console.log" to see the data, and we must pass it in the "PostsList.jsx" file

[PostList.jsx]/[NewPost.jsx]

                                                                            ❗❗❗[UPDATING STATES DYNAMICALLY]❗❗❗

    ## ✅XVI. -Outputting List Data
               -How to take Data from the INPUT field and use it to create a new content

[PostList.jsx]/[]

                                                                            ❗❗❗[OUTPUTTING LIST DATA]❗❗❗

    ## ✅XVII. -Adding a Backend to the React SPA
                -Dummy Backend
                -How to create a STORE, rest API, backend SERVER

[FOLDER.dummy.backend.react.crash.course]

                                                                                ❗❗❗[BACKEND SPA]❗❗❗

    ## ✅XVIII. -Sending a POST HTTP Request
                 -How to sent requests to BACKEND data base

-fetch();
[PostList.jsx]/[app.js]

                                                                                ❗❗❗[BACKEND REQUESTS]❗❗❗

    ## ✅XIX. -Handling Side Effects with useEffect()
               -How to use UseEffect()
               -Gow to fetch page when we first visit/reload the page

[PostList.jsx]

                                                                                ❗❗❗[EFFECT WITH USEEFFECT]❗❗❗

    ## ✅XX. -Handling Loading State
             -How to create a Loading State until fetching data

[PostsList.jsx]

                                                                                    ❗❗❗[LOADING STATE]❗❗❗

    ## ✅XXI. -Understanding & Adding Routing
               -How to create more pages and connected them togheter
               -How to install REACT ROUTER
               -Addin Routes/connecting pages
               -How to create "Layout Routes", making the pages  even after connected with the URL to work by sending also the PROPS for functionallity

> Terminal: "npm install react-router-dom"
> -ROUTING => connecting multiple PATH's, more pages connected between according to the URL

[LESSON.38]/[main.jsx]/[RootLayout.jsx]/[NewPost.jsx]/[Posts.jsx]/[]

                                                                                    ❗❗❗[ADDING ROUTING]❗❗❗

    ## ✅XXII. -Linking & Navigating
                -How to create links where we can navigate and the App to steal work
                -{ LINK } component provided be REACT under the hood

[MainHeader.jsx]/[Modal.jsx]/[NewPost.jsx]

                                                                                    ❗❗❗[LINKING & NAVIGATING]❗❗❗

    ## ✅XXIII. -How to submitt Data with action
                 -How to display content after submitting the POP-UP/MODAL WINDOW
                 -How to take data from the INPUT field

[Lesson.44]/[main.jsx]/[NewPost.jsx]

                                                                                    ❗❗❗[SUBMITTING DATA]❗❗❗

    ## ✅XXIV. -Dynamic Routes
                -How to open a content/MODAL WINDOW/Pop-Up windows when we click on his content

[Lesson.45]/[main.jsx]/[PostDetails.jsx]/[Post.jsx]

                                                                                    ❗❗❗[DYNAMIC ROUTES]❗❗❗

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .
> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .
> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >
> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > (((2.NextJs.first.project))) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .
> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .

# 3. NextJS Essentials (App Router)

    ## ✅I. -Understanding File-based Routing & React Server Components

[Lesson.87]

                                                                                      ❗❗❗[---]❗❗❗

    ## ✅II. -Adding Another Route via the File System
              -How to Add new "path's"/connections/pages in NextJS
              -How to name you files

> 1)-We add new "path's"/connections by creating a New Folder inside of the ["app"] FOLDER, for ex we can add a folder named: ["about"]
> 2)-Inside of ["about"] folder we now create a file named [page.js], this will create the connection between files in NextJS
> -In NextJS the file name does matter, because the name is the one who tell NextJS that we want that file as a page, if we need it as a page, for ex: "page.js", this page is responsible for the ROOT page/HOME page/ starting page

[Lesson.88]/[check.the.files.from.project]/[ABOUT/page.js]

=> page.js >>> Define page content
=> layout.js >>> Define wrapper around pages
=> not-found.js >>> Define "Not Found" fallback page
=> error.js >>> Define "Error" fallback page
=> loading.js >>> Fallback page wich is shown when there is a "loading" time
=> route.js >>> API route. does NOT return JSX code but instead data in the JSON format

                                                                                      ❗❗❗[---]❗❗❗

    ## ✅III. -Navigating between pages
               -How to connect pages auttomatically in NextJS
               -How to use "LINK" to connect pages/ SPA in NextJS

> Import "<Link href="/folder name"> ... code ... </Link>

[APP/page.js]

                                                                                      ❗❗❗[LINK SPA]❗❗❗

    ## ✅IV. -Working with Pages & Layout

> The "Layout" will wrapp the entire App inside her, it'a like a cover
> In NextJS "metadata" represents the Header of the App

[layout.js]

                                                                                      ❗❗❗[PAGES & LAYOUT]❗❗❗

    ## ✅V. -How to organize you'r NextJS project
             -How to import CSS files in NextJS
             -How to set a FAV ICON, the small round IMG for our srv/app (inside of the Folder "app" create/place an "Icon" named [icon.png], oblidatory the "icon" name, and the NextJS will auttomatically take the IMG and make it FEV ICON)

[Lesson.91]/[APP/ABOUT/icon.png]

    ## ✅VI. -Confinguring Dynamic Routes & Using Route Paramaters
              -How to create more pages inside of one Folder and make those pades separate

=> [APP/BLOG] => and now we must add a folder inside of paranteze drepte, ex: "[slug]", [page.js]. Always create a "page.js", only in this way NextJS will create the connection between pages
=>the "[slug]" folder dont need any connection from another file, this will auttomatically be activate when the user enter something else, for ex: "link.../meals/asdnasfajsf" now the [slug] folder will be open, consider it like an Error folder

[APP/BLOG/[SLUG]/page.js]

                                                                                         ❗❗❗[MORE PAGES]❗❗❗

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .
> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .
> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >
> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > (((Using App Router))) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > (((3.NextJs.The Foodies App))) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .
> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > .

# 4. NextJS Essentials (App Router)

=>The Parrent "Layout" from the Root will apply to all the child Folder, and the "Layouts" inside of the child Folders will apply only to those Folders
[MEALS/layout.js]

    ## ✅I. -Adding a Custom Component to a Layout
             -How to create a Clickable Logo, Link
             -Creating the HEADER

[layout.js]/[main-header.js]

                                                                                         ❗❗❗[CUSTOM COMPONENT]❗❗❗

    ## ✅II. -How to connect pages in NextJs

[check.The.Foodies.App]

    ## ✅III. -How to style the NextJS Project using CSS Modules
               -How to import CSS Classes in NextJS, React

[Lesson.99]/[main-header.js]/[main-header.css]

> import "./globals.css"; ---> this will affect all pages on all components❗❗❗❗
> import classes from "./main-header.module.css"; ---> this will import classes only for the current file❗❗❗❗

                                                                                         ❗❗❗[CSS MODULES STYLE]❗❗❗

    ## ✅IV. -How to optimize IMG's/images in NextJS. Image Component
              -How to upload "lazy images" that display's only if they're visible on the page, for better performance

> For more details check the DOC on the NEXT.js page at "Building Your Application" and <Image>
> Import auto settings for every desktop, device, etc from: "import logoImg from "@/assests/logo.png""
> import Image from "next/image" ... inside of code write: <Image>

[main-header.js]

                                                                                         ❗❗❗[[IMAGE]]❗❗❗

    ## ✅V. -How to add an IMAGE slideshow
             -How to create slides
             -How to auttomatically change/load IMG's at every "interval" amount of sec's

[IMAGES/image.slideshow.js]/[]

                                                                                         ❗❗❗[SLIDESHOW IMAGE]❗❗❗

    ## ✅VI. -React Server Components VS Client Components - When to use what?
             -How to auttomatically change/load IMG's at every "interval" amount of sec's
             -IMPORTANT, check doc's on NextJS about "React Server Components (RSC)" "Client Components"

> We need to use "use client"; at the top of the file to make effect. We use "use client" when we have some effect on the server client and not at the backend, all the actions on the client side/front-end will need the "use client" in NextJS
> "use client";

[image-slideshow.js]

                                                                                    ❗❗❗[SERVER/CLIENTS COMPONENTS]❗❗❗

    ## ✅VII. -Using Client Components Effieciently
               -How to check wich page is active, on wicch page is the user and make the title more shinny/different
               -Active path

> NextJS gives us this solution for checking the active path: "import {usePathname} from "next/navigation"" ....... check the [main-header.js]

[COMMUNITY/page.js]/[page.module.css]/[main-header.js]

                                                                                    ❗❗❗[EXERCISING CLIENT COMPONENTS]❗❗❗

    ## ✅VIII. -Outputting Meals Data & Images with Unknown Dimensions
                -How to upload IMG's with different dimensions & auto sett the full/filled dimensions
                -How to take data & IMG's

[MEALS/page.js]/[COMPONENTS/MEALS/meals-grid.js]/[COMPONENTS/MEALS/meal-item.js]

                                                                                    ❗❗❗[OUTPUTTING DATA & IMG's]❗❗❗

    ## ✅IX. -How to sett Up a SQLite Database
              -How to sett up a small backend for small mobile App
              -How to install a backend data base with SQL
              -How to Fetch data By Leveraging NextJS & Fullstack Capabilities
              -How to upload DATA's/INFO's from the backend
              -How to Fetch/Insert and Get Data from the backend file
              -How to directly use "async" and "await" in a function, available only in NextJS on server components and no "useEffect" HOOK

> Terminal: "npm install better-sqlite3" .NOTE (must cancel the APP terminal before proceed the instalation)
> "initdb.js" is a backend structure
> After Installing the SQLite and created the file run in the Terminal: "node initdb.js" to run the file
> In our case after the "node initdb.js" was finish there will be created a new file named "meals.db"

[initdb.js]/[MEALS/SHARE/page.js]/[LIB/meals.js]/[meal-item.js]/[meals-grid.js]

                                                                                    ❗❗❗[SQLITE DATABASE]❗❗❗

    ## ✅X. -Adding a Loading Page
             -Using Suspense & Streamed Responses For Granular Loading State Management
             -How to INSTANT display some contents but also the LOADING Spinner
             -Content & Loading Statement simultaneous

[APP/MEALS/loading-out.js]/[APP/page.js]/[APP/MEALS/page.js]

                                                                                    ❗❗❗[LOADING PAGE]❗❗❗

    ## ✅XI. -Handling Errors
              -How to set Errors for pages that are not founded/ for ex: "404 | page not found"
              -Handling "Not Found" States

[APP/MEALS/errors.js]/[LIB/meals.js]/[APP/not-found.js]

                                                                                    ❗❗❗[HANDLING ERROS]❗❗❗

    ## ✅XII. -Loading & Rendering Meal Details via Dynamic Routes & Route Parameters

[APP/MEALS/mealSLUG/page.js]/[LIB/meals.js]

                                                                            ❗❗❗[DYNAMIC ROUTES & ROUTE PARAMETERS]❗❗❗

    ## ✅XIII. -Throwing Not Found Erros For Individual Meals
                -How to Throw Erros for some specific cotents
                -Error "Not Found" function provided by NextJS(will acces the closest file for Errors in the App)

[MEALS/mealSLUG/page.js]

                                                                            ❗❗❗[INDIVIDUAL CONTENT ERROR]❗❗❗

    ## ✅XIV. -How to add new content/creating new "Meals" content
               -Uploading photo's/IMG's from computer
               -How to preview the IMG after you upload it, displaying a small version of the original IMG
               -How to Upload multiple IMG's
               -How to edit the "Choose picture/IMG" button

[Lesson.116]/[MEALS/SHARE/page.js]/[COMPONENTS/MEALS/image-picker.js]

                                                                            ❗❗❗[CREATING NEW CONTENT]❗❗❗
                                                                            ❗❗❗[PREVIEW IMAGE]❗❗❗

    ## ✅XV. -Introducing & Using Server Actions for Handling Form Submissions
              -How to store/take info's/data from the "Form Submissions/Fields"
              -How to create new content after adding/completing the Form Submissions
              -How to Store Server Actions in Separate Files (used when we want to store data from Input Form inside of a page wich is "use client", NOTE that we can't store info's in a file that is "use client" so check the files, check the "actions.js" file from bellow 👇)

[MEALS/SHARE/page.js]/[COMPONENTS/LIB/actions.js]

                                                                            ❗❗❗[HANDLING FORM SUBMISSIONS]❗❗❗

    ## ✅XVI. -Creating a Slug & Sanitizing User Input for XSS Preotection
               -How to save/store meals
               -How to save/How to store data
               -How to protect against cross-site scripting attacks
               -How to install "Slug"/How to create friendly Titles using Slugify

> Terminal: npm install slugify ----->friendly and recreated URL titles
> Terminal: npm install xss ----->Protection against scrpt attacks
> We need to Protect our App. from Scripting attack because we are storing the data's/info's from the user and siplaying as an HTML, check the [MEALS/mealSLUG/page.js]

[LEAB/meals.js]

                                                                                    ❗❗❗[XSS PROTECTION]❗❗❗

    ## ✅XVII. -Storing Uploaded Images & Storing Data in the Database
                -How to store IMG's in the Database
                -How to use "fs" fileSystem/API: "import fs from 'node:fs'"
                -How to create a "path" to the IMG and not store it in the Data Base, good for Performance
                -How to "redirect" the user to a different page after finishing to complet some conte/create a new "meal" table

[Lesson.122]/[PUBLIC/images]/[LIB/meals]

                                                                                    ❗❗❗[STORING IMG's]❗❗❗

    ## ✅XVIII. -Managing the Form Submission Status with useFormStatus
                 -How to update the Button and tell the User that the request it's on its way

> we need to import the: import {useFormStatus} from 'react-dom';

[COMPONENTS/MEALS/meals-form-submit.js]/[]

                                                                                    ❗❗❗[SUBMISSION STATUS]❗❗❗

    ## ✅XIX. -Adding Server-Side Input Validation
               -How to check/validate the data/info's that we take from the user
               -How to check data's from the User
               -How to validate Data on the Server-Side and not only on the Client-Side
               -How to display the Error Validation on the same Page where we have the INPUT field page for data/info's, bcs if we sent the User to an Error Page than all the info's from completed fields will be lost, so we can display that Error on the same page
               -Working with Server Action Responses & useFormState

> NOTE . we make the Error to work and be displayed on the same page and not redirect, but this Error can also be customized, something fancy or some POP-UP, etc

[LIB/actions.js]/[MEALS/SHARE/page.js]

                                                                                    ❗❗❗[INPUT VALIDATION]❗❗❗

    ## ✅XX. -How to prepare the project ofr Production in NextJS and making the App to work as expected
              -How to FIX the Cache in NextJS

> Starting for PRODUCTION... Terminal: 'npm run build'
> Checking the App... Termina: 'npm start'

[Lesson.126]/[LIB/action.js]/[]

                                                                                    ❗❗❗[FIXING NEXT.JS FOR PRODUCTION]❗❗❗

    ## ✅XXI. -How to store IMG's for NextJS App./ Need to use another Library that act like a Cloud where the App. can store those IMG's
               -Check the Lesson 128-129

[Lesson.128-129]

    ## ✅XXII. -How to add "Static MetaData" to pages

> This Metadata represents the title and descrition of a page, if we add this code to every file/page that we have we can set different titles to all our contents

[Lesson.130]/[layout.js]/[MEALS/page.js]

                                                                                    ❗❗❗🌠🌠[STATIC METADATA]🌠🌠❗❗❗

    ## ✅XXIII. -How to add "Dynamic MetaData" to pages

> This "Dynamic MetaData" is used for pages that will be re-render/dynamic pages

[MEALS/mealSLUG/page.js]

                                                                                    ❗❗❗🌠🌠[DYNAMIC METADATA]🌠🌠❗❗❗

# 5. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 6. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 7. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 8. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 9. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 10. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 11. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 12. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 13. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 14. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 15. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 16. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 17. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 18. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 19. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 20. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 21. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 22. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 23. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 24. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 25. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 26. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 27. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 28. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 29. Titlu

## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

# 30. Titlu

    ## ✅I. subtitlu

    ## ✅II. subtitlu

    ## ✅III. subtitlu

    ## ✅IV. subtitlu

    ## ✅V. subtitlu

    ## ✅VI. subtitlu

    ## ✅VII. subtitlu

    ## ✅VIII. subtitlu

    ## ✅IX. subtitlu

    ## ✅X. subtitlu

    ## ✅XI. subtitlu

    ## ✅XII. subtitlu

    ## ✅XIII. subtitlu

    ## ✅XIV. subtitlu

    ## ✅XV. subtitlu

    ## ✅XVI. subtitlu

    ## ✅XVII. subtitlu

    ## ✅XVIII. subtitlu

    ## ✅XIX. subtitlu

    ## ✅XX. subtitlu

    ## ✅XXI. subtitlu
    ## ✅XXII. subtitlu
    ## ✅XXIII. subtitlu
    ## ✅XXIV. subtitlu
    ## ✅XXV. subtitlu
    ## ✅XXVI. subtitlu
    ## ✅XXVII. subtitlu
    ## ✅XXVIII. subtitlu
    ## ✅XXIX. subtitlu
    ## ✅XXX. subtitlu
    ## ✅XXXI. subtitlu
    ## ✅XXXII. subtitlu
    ## ✅XXXIII. subtitlu
    ## ✅XXXIV. subtitlu
    ## ✅XXXV. subtitlu
    ## ✅XXXVI. subtitlu
    ## ✅XXXVII. subtitlu
    ## ✅XXXVIII. subtitlu
    ## ✅XXXIX. subtitlu
    ## ✅XL. subtitlu
