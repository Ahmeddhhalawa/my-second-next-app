"use client"
import classes from "./Signup.module.css"
import Input from "../UiElements/Input"
import Button from "../UiElements/Button"
import { isEmail, minLength, isSame, isEmpty } from "@/helpers/validators" 
import { useState } from "react"

export default function Signup() {
    const [ name, setName ] = useState("")
    const [ nameError, setNameError ] = useState(false)
    const [ birthdate, setBirthdate ] = useState("")
    const [ birthdateError, setBirthdateError ] = useState(false)
    const [ email, setEmail ] = useState("")
    const [ emailError, setEmailError ] = useState(false)
    const [ password, setPassword ] = useState("")
    const [ passwordError, setPasswordError ] = useState(false)
    const [ confirmPassword, setConfirmPassword ] = useState("")
    const [ confirmPasswordError, setConfirmPasswordError ] = useState(false)
    const [ equalityError, setEqualityError ] = useState(false)
    const [ message, setMessage ] = useState("")
    const [ showMsg, setShowMsg ] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!isEmail(email) || !minLength(password) || !minLength(confirmPassword)  || isEmpty(birthdate) || !isSame(password, confirmPassword) || !minLength(name) ) {
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
            
            if(!minLength(birthdate)) {
                setBirthdateError(true)
            }
            
            
            return
        }

        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setBirthdate("")
        setEqualityError(false)
        setShowMsg(true)
    }

const calcBirthdate = (dataString) => {
  const birth = new Date(dataString);
  const today = new Date();
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // ✅ USE THE SAME VARIABLES
  setMessage(`You are ${years} years, ${months} months, and ${days} days old`);
};
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
             id="birthdate"
             type="date"
             label="Birthdate"
             placeholder="Enter your Birthdate."
             value={birthdate}
             error={birthdateError}
             errorText="Enter a valid birthdate!"
             onChange={(e) => {
                setShowMsg(false)
                 const { value } = e.target
                 setBirthdate(value)
                 calcBirthdate(value)
                if(minLength(value)) setBirthdateError(false)
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
            <p className={ `${classes["message"]} ${showMsg ? classes["show-msg"] : ""}`} onClick={calcBirthdate}>{message}</p>
        <Button className={classes["btn"]}>Send</Button>
        </form>
    )

}