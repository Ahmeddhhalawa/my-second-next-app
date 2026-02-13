import classes from "./welcome.module.css"
import Button from "../UiElements/Button"
import Image from "next/image"
import img1 from "@/components/image/AhmedH.jpeg"

export default function Welcome() {
    return (
        <section className={classes["section"]}>
            <div>
                <h1 className={classes["title"]}>Ah blog</h1>
                <p>Welcome to AH blog where you can learn a lot of of skills likr football, swimming and how to write a react code</p>
                <Button href="/blog" danger>Learn More</Button>
            </div>
            <Image src={img1} alt="Ahmed Halawa" className={classes["img"]} />
        </section>
    )
 }