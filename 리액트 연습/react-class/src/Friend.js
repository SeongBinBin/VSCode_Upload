import React, {Component} from "react";

function Friend({name, age, city}){
    return(
        <>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{city}</h2>
        <h2>----------------</h2>
        </>
    )
}

export default Friend