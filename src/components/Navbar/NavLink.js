import Link from "next/link"
import { usePathname } from "next/navigation" 
import classes from "./NavLink.module.css"

export default function NavLink ( {href, text, hideNavList} ) {
    const pathname = usePathname()
    const isActive = href === "/" ? href === pathname  : pathname.startsWith(href);

    return ( 
    <li onClick={hideNavList} className={`${isActive ? classes["active"] : ""}`}>
        <Link href={href}>{text}</Link>
    </li>
    )
}