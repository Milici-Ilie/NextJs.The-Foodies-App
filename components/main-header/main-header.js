// "use client"; === check "nav-link.js"

// import { usePathname } from "next/navigation"; === check "nav-link.js"
import Link from "next/link";
//💾💾[CUSTOM COMPONENT]💾💾 creating the Header and also the clickable Logo
import Image from "next/image"; //📷📷[IMAGE] 📷 📷

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png"; //@ => root connection
import classes from "./main-header.module.css"; //🍀🍀[CSS MODULES STYLE]🍀🍀
import NavLink from "./nav-link";

export default function MainHeader() {
  // const path = usePathname(); //🥱🥱[EXERCISING CLIENT COMPONENTS]🥱🥱 NextJSgives a "usePathname" that will check wich path is active, check bellow 👇 🥱🥱[EXERCISING CLIENT COMPONENTS]🥱🥱 ===== check the "nav-link.js"

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        {/* 🍀🍀[CSS MODULES STYLE]🍀🍀 check the "className" to see how to import CSS classes */}
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />{" "}
          NextLevel Food
        </Link>
        {/* 📷📷[IMAGE]📷📷 adding the "priority" in our <Image> will make it to load instantly and not to take the "lazy" statement, bcs this IMG will be displayed at the top of our App */}

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
              {/* this is a reusable component, the process is repetead again also down for the community */}
              {/* 🥱🥱[EXERCISING CLIENT COMPONENTS]🥱🥱 so NextJS will know wich path is active depending on the "startsWith("/meals"), the connection with the URL "/meals" or any other connection", if this is true than add the class "active""
              <Link
                href="/meals"
                className={
                  path.startsWith("/meals") ? classes.active : undefined
                }
              >
                Browse Meals
              </Link> ======> check the "nav-link.js" */}
            </li>

            <li>
              {/* <Link
                href="/community"
                className={
                  path.startsWith("/community") ? classes.active : undefined
                }
                // 🥱🥱[EXERCISING CLIENT COMPONENTS]🥱🥱 for active path
              >
                Foodies Community
              </Link> */}
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
