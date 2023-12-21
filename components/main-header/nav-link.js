"use client";
//🥱🥱[EXERCISING CLIENT COMPONENTS]🥱🥱 we created this small component to render it on the client side only this content and not the entire file where this function will be used .... we want to do this to make sure that this is not a client component and is still rendered on the server
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css"; //🍀🍀[CSS MODULES STYLE]🍀🍀

export default function NavLink({ href, children }) {
  const path = usePathname();

  {
    /* 🥱🥱[EXERCISING CLIENT COMPONENTS]🥱🥱 so NextJS will know wich path is active depending on the "startsWith("/meals"), the connection with the URL "/meals" or any other connection", if this is true than add the class "active"" */
  }
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
