import React, {useState, useReducer} from "react";

function reducer(state, action){    // reducer : 사용자 액션(인터렉션)의 종류에 따라서 현재 state 값을 변경하는 함수
    // state : 현재상태, action : 사용자 액션의 종류(객체형태)
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter(){
    const [number, dispatch] = useReducer(reducer, 0)

    const onIncrease = () => {
        dispatch({type: 'INCREMENT'})
    }
    const onDecrease = () => {
        dispatch({type: 'DECREMENT'})
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default Counter