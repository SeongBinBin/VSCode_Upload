import React, {Component} from "react";

// 클래스 컴포넌트 : this.props
// 함수 컴포넌트 : props

class Counter extends Component{
    render(){
        // this.props = {user: "SB"}
        console.log(this.props)
        return(
            <>
                <h1>Props 변경하기</h1>
            </>
        )
    }
}
export default Counter