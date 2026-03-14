import classes from "./Input.module.css"
import { useState } from "react"

export default function Input({
    id, 
    type, 
    label, 
    placeholder, 
    value,
    error, 
    errorText,
    onChange,
}) {
    const [ inputType, setInputType ] = useState("password")
    const [ icon, setIcon ] = useState(<i className="fa-solid fa-eye"></i>)
    function toggleType() {
        if(inputType === "password")  {
            setInputType("text")
            setIcon(<i className="fa-solid fa-eye-slash"></i>)
        } else if (inputType === "text") {
            setInputType("password")
            setIcon(<i className="fa-solid fa-eye"></i>)
        } else {
            setInputType("text")
        }
    }
    return (
        <div className={classes["form-input"]}>
            <label htmlFor={id}>{label}</label>
            {type === "textarea" ? (
                <textarea 
                    id={id} 
                    placeholder={placeholder} 
                    onChange={onChange}></textarea>
            ) : type === "password" ? (
                <div className={classes["password"]}>
                    <input id={id} type={inputType} placeholder={placeholder} value={value} onChange={onChange}/>
                    <button type="button" onClick={toggleType} className={classes["btn"]}>{icon}</button>
                </div>
            ) : (
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            )}
            <p className={classes["error"]}>{error ? errorText : ""}</p>
        </div>
    )
}