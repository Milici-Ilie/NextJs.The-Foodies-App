//⛔⛔[HANDLING ERROS]⛔⛔
//thanks to NextJS we can add this file "not-found.js" or "error" files where we want and it will be displayed depending on file position, global position or some specific Folder, it will auttomatically connect with all the siblings and Folders if is in the Root/Parrent components, or with the siblings from a specific Folder if you want to have some customes styles applyed to some pages
export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
    </main>
  );
}
