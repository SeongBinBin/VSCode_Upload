import React, {Component} from "react";

// 클래스 컴포넌트 : this.props
// 함수 컴포넌트 : props

class Counter extends Component{
    state = {
        count: 0
    }
    componentDidMount(){
        this.timerId = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)
    }
    componentWillUnmount(){
        alert('해당 컴포넌트를 보이지 않게 하시겠어요?')
        clearInterval(this.timerId)
    }
    render(){
        const {count} = this.state
        return(
            <div>
                <h1>카운팅: {count}</h1>
            </div>
        )
    }
}
export default Counter