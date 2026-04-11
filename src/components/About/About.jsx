"use client"

import { useEffect, useState } from "react"

const About = () => {
    const [name, SetName] = useState("Mohamed")
    useEffect(() => {
        console.log("Use Effect", name)    
    }, [name, age])

    return (
        <div>
            <h2>About</h2>
            <input type="search" placeholder="Search by name" value={name} onChange={(e) => SetName(e.target.value)} />
        </div>
    )
}
export default About