"use client"
import Input from "../UiElements/Input"
import Button from "../UiElements/Button"
import { isEmail, minLength, isSame,  } from "@/helpers/validators" 
import classes from "./Signup.module.css"
import { useState } from "react"

export default function Signup() {
    const [ email, setEmail ] = useState("")
    const [ emailError, setEmailError ] = useState(false)
    const [ password, setPassword ] = useState("")
    const [ passwordError, setPasswordError ] = useState(false)
    const [ confirmPassword, setConfirmPassword ] = useState("")
    const [ confirmPasswordError, setConfirmPasswordError ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!isEmail(email) || !minLength(password) || !isSame(password, confirmPassword)) {
            if(!isEmail(email)) {
                setEmailError(true)
            }

            if(!minLength(password)) {
                setPasswordError(true)
            }

            if(!isSame(password, confirmPassword)) {
                setConfirmPasswordError(true)
            }

            return
        }

        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <form className={classes["sign-form"]} onSubmit={handleSubmit}>
            <h1>Sign up</h1>

            <Input
             id="email"
             type="email"
             label="Email"
             placeholder="Enter your Email."
             value={email}
             error={emailError}
             errorText="Please provide a valid Email"
             onChange={(e) => {
                const { value } = e.target
                setEmail(value)
                if(isEmail(value)) setEmailError(false)
             }}
            />

            <Input
             id="password"
             type="password"
             placeholder="Enter your Password."
             value={password}
             error={passwordError}
             errorText="Please provide a valid Password"
             label="Password"
             onChange={(e) => {
                const { value } = e.target
                setPassword(value)
                if(minLength(value)) setPasswordError(false)
             }}
            />

            <Input
             id="confirmPassword"
             type="password"
             placeholder="Enter your Confirm Password."
             value={confirmPassword}
             error={confirmPasswordError}
             errorText="Passwords not the same"
             label="Confirm Password"
             onChange={(e) => {
                const { value } = e.target
                setConfirmPassword(value)
                if(minLength(value)) setConfirmPasswordError(false)
             }}
            />
        <Button className={classes["btn"]}>Send</Button>
        </form>
    )

}