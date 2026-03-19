"use client"
import classes from "./Signup.module.css"
import Input from "../UiElements/Input"
import Button from "../UiElements/Button"
import { isEmail, minLength, isSame, isEmpty, minAge } from "@/helpers/validators" 
import { useState } from "react"

export default function Signup() {
    const [ name, setName ] = useState("")
    const [ nameError, setNameError ] = useState(false)
    const [ age, setAge ] = useState(0)
    const [ ageError, setAgeError ] = useState(false)
    const [ email, setEmail ] = useState("")
    const [ emailError, setEmailError ] = useState(false)
    const [ password, setPassword ] = useState("")
    const [ passwordError, setPasswordError ] = useState(false)
    const [ confirmPassword, setConfirmPassword ] = useState("")
    const [ confirmPasswordError, setConfirmPasswordError ] = useState(false)
    const [ equalityError, setEqualityError ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!isEmail(email) || !minLength(password) || isEmpty(confirmPassword) || !isSame(password, confirmPassword) || !minLength(name) || !minAge(age)) {
            if(!isEmail(email)) {
                setEmailError(true)
            }

            if(!minLength(password)) {
                setPasswordError(true)
            }

            if(!minLength(confirmPassword)) {
                setConfirmPasswordError(true)
            }

            if(!isSame(password, confirmPassword)) {
                setEqualityError(true)
            }
            
            if(!minLength(name)) {
                setNameError(true)
            }
            
            if(!minAge(age)) {
                setAgeError(true)
            }
            

            return
        }

        setName("")
        setAge("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setEqualityError(false)
    }

    return (
        <form className={classes["sign-form"]} onSubmit={handleSubmit}>
            <h1>Sign up</h1>

            <Input
             id="name"
             type="text"
             label="Name"
             placeholder="Enter your Name."
             value={name}
             error={nameError}
             errorText="Name should be atleast 8 chars!"
             onChange={(e) => {
                const { value } = e.target
                setName(value)
                if(minLength(value)) setNameError(false)
             }}
            />

            <Input
             id="age"
             type="number"
             label="Age"
             placeholder="Enter your Age."
             value={age}
             error={ageError}
             errorText="You should be at least 18 years old to use this web!"
             onChange={(e) => {
                const { value } = e.target
                setAge(value)
                if(minAge(value)) setAgeError(false)
             }}
            />

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
             errorText="Password should be atleast 8 chars!"
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
             errorText="Password should be atleast 8 chars!"
             label="Confirm Password"
             onChange={(e) => {
                const { value } = e.target
                setConfirmPassword(value)
                if(minLength(value)) setConfirmPasswordError(false)
                if(isSame(password, confirmPassword)) setEqualityError(false)
             }}
            />

            <p className={` ${classes["error"]} ${equalityError ? classes["show-error"] :  ""}`}>Passwords are not the same</p>
        <Button className={classes["btn"]}>Send</Button>
        </form>
    )

}