import React, {Component} from "react";     // jsx 문법 사용

function Todo({user, name, done, description}){
    return(
        <>
        <h2>사용자: {user}</h2>
        <h3>할일 제목: {name}</h3>
        <h4>할일 종료여부: {done? "종료": "진행중"}</h4>
        <p>할일 상세설명: {description}</p>
        </>
    )
}

export default Todo