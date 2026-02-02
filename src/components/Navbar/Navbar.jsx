"use client"
import NavLink from "./NavLink"
import Link from "next/link"

import classes from "./Navbar.module.css"
import { useState } from "react"

export default function Navbar( ) {
    const [showNavList, setShowNavList] = useState(false)
    const toggleMenu = () => setShowNavList(!showNavList)
    const hideNavList = () => setShowNavList(false)
    
    return (
        <nav className={classes["nav-bar"]}>
            <h1>
                <Link href="/">Mo Blog</Link>
            </h1>
            
            <ul className={`${classes["nav-list"]} ${showNavList ? classes["show-nav-list"] : ""}`}>
                <NavLink href="/" text="Home" hideNavList={hideNavList}/>
                <NavLink href="/blog" text="Blog" hideNavList={hideNavList}/>
                <NavLink href="/about" text="About" hideNavList={hideNavList}/>
                <NavLink href="/contacts" text="Contacts" hideNavList={hideNavList}/>
            </ul>

            <button className={classes["menu-button"]} onClick={toggleMenu} aria-label="menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        
        </nav>

    )
}