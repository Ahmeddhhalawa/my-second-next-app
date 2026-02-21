"use client";

import Button from "@/Components/UiElements/Button";
import { useState } from "react";
import classes from "./page.module.css"

export default function ContactsPage() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("")
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    // send to an api
    console.log(name, email);
    if (name.trim().length === 0 || !email.includes("@") || subject.trim().length < 5) {
        if(name.trim().length === 0) {
            setNameError("Please provide a valid name!")
        }
        if(!email.includes("@")) {
            setEmailError("Please enter email")
        }
        if(subject.trim().length < 5) {
            setSubjectError("Subject should be at least five chars!")
        }
        return
    }

    setName("");
    setEmail("")
    setSubject("")
  };

  return (
    <form onSubmit={handleSubmit} className={classes["contact-form"]}>
      <h3>Contact us</h3>

      <div className={classes["form-input"]}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Write Your Name"
          onChange={(e) => {
            setName(e.target.value)
            if (e.target.value.trim().length > 0) {
                setNameError("")
            }}}
        />
        <p className={classes["error"]}>{nameError}</p>
      </div>

       <hr />

      <div className={classes["form-input"]}>
        <label htmlFor="email">Your Email</label>
        <textarea
          type="email"
          id="email"
          placeholder="Write a valid email"
          onChange={(e) => {
            setEmail(e.target.value)
        if(e.target.value.trim().includes("@")) {
            setEmailError("")
        }}}
          value={email}
        ></textarea>
        <p className={classes["error"]}>{emailError}</p>
      </div>
       <hr />

      <div className={classes["form-input"]}>
        <label htmlFor="subject">Your Subject</label>
        <textarea
          type="text"
          id="subject"
          placeholder="Write subject in details"
          onChange={(e) => {
            setSubject(e.target.value)
            if(e.target.value.trim().length >= 5) {
                setSubjectError("")
            }}}
          value={subject}
        ></textarea>
        <p className={classes["error"]}>{subjectError}</p>
      </div>

      <Button className={classes["btn"]}>Send</Button>
    </form>
  );
}