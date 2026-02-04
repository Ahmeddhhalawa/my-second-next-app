import Link from "next/link"
import classes from "./Button.module.css"

export default function Button( { children, onClick, href, danger, outline, className, disabled } )  {
    const classN = ` ${className} ${classes["button"]} ${danger ? classes["danger"] : ""} ${outline ? classes["outline"] : ""}`
    return href ? 
        (<Link href={href} className={classN} disabled={disabled}>{children}</Link>)  :
        (<button onClick={onClick} className={classN} disabled={disabled}>{children}</button>)
}