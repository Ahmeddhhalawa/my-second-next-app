import classes from "./welcome.module.css"
import Button from "../UiElements/Button"
import Image from "next/image"

export default function Welcome() {
    return (
        <section className={classes["welcome"]}>
            <div className={classes["text"]}>
                <p className={classes["welcome-text"]}>welcome</p>
                <p className={classes["vision"]}>Learning Web</p>
                <p className={classes["vision"]}>Programming today</p>
                <p className={classes["desc"]}>Welcome to AH blog where you can learn a lot of of skills like football, swimming and how to write a react code</p>
                
                <div className={classes["buttons"]}>
                    <Button href="/blog" className={classes["blog-btn"]}>Blog</Button>
                    <Button outline href="/courses">Courses</Button>
                </div>
            </div>
            <div className={classes["img"]}>
                <Image 
                  src="/assets/AhmedH.png" 
                  alr="Ahmed Halawa"
                  loading="eager" 
                  width={160} 
                  height={300} alt="Ahmed Halawa" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   />
            </div>
        </section>
    )
 }