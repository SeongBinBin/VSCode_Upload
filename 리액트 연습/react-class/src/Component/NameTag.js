import React, {Component} from "react";

class NameTag extends Component{
    state = {
        name: '초기 이름'
    }
    changeName = () => {
        this.setState({name: '수정된 이름'})
    }
    render(){
        console.log('NameTag')
        const {name} = this.state
        return(
            <>
                <h1>{name}</h1>
                <button onClick={this.changeName}>이름 변경</button>
            </>
        )
    }
}
export default NameTag