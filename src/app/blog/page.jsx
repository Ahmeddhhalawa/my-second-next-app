"use client"

import { useState } from "react"

import classes from "./page.module.css"
import Button from "@/components/UiElements/Button"

export default function BlogPage() {
    const [counter, setCounter] = useState(0)
    const [showList, setShowList] = useState(true)

    const increaseCounter = () => {
        if(counter >= 10) return

        setCounter(counter + 1)
    }

    const decreaseCounter = () => {
        if(counter <= 0) return

        setCounter(counter - 1)
    }

    const resetCounter = () => setCounter(0)

    const toggleMenu = () => setShowList(!showList)

    return (
        <section>
            <h2>Blog Page</h2>
            <div>
                <p>{counter}</p>
                <section className={classes["actions"]}>
                    <Button onClick={increaseCounter} disabled={counter >= 10}>+</Button>
                    <Button onClick={decreaseCounter} outline disabled={counter <= 0}>-</Button>
                    <Button onClick={resetCounter} danger disabled={counter === 0}>Reset</Button>
                </section> 
            </div>

            <br />
            <hr />
            <br />

            <div>
                <Button onClick={toggleMenu} danger={showList}>{showList ? "Hide" : "Show"} menu</Button>
                    <ul className={`${classes["list"]} 
                        ${!showList ? classes["hide-list"] : ""}`}>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            </div>
        </section>
    )
}