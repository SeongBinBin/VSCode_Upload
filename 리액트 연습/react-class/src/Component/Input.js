import React from "react";

function Input({ children, size, color, label, handleChange, placeholder }){
    return (
    <div className="input_div">
    <p>{label}</p>
    <input className={`Button ${size} ${color}`} onClick={handleChange} placeholder={placeholder}>
         {children}</input>
    </div>
    )
}
export default Input