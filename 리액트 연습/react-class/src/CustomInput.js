import React, {Component} from "react";

class CustomInput extends Component{
    constructor(props){
        super(props)
        this.textInput = React.createRef()  // ref 생성하기 (변수 생성처럼)
    }
    focusInput = () => {
        console.log(this.textInput.current)
        this.textInput.current.focus()  // ref 사용하기
    }
    
    render(){
        return(
            <>
                <input type="text" ref={this.textInput}></input>    {/* ref 설정하기 */}
                <button onClick={this.focusInput}>포커스</button>
            </>
        )
    }
}
export default CustomInput