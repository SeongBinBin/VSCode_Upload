import React from "react";

class Person extends React.Component{
    state = {
        name: "sunrise",
        age: 23,
        friends: [
            "victoria",
            "daniel",
            "hanna"
        ]
    }

    displayInfo = () => {
        const {name, age, friends} = this.state
        alert(
            `* 신상정보 *\n---------------\n이름: ${name}\n나이: ${age}\n친구: ${friends}`
        )
    }
    
    render() {
        return(
            <>
                <button onClick={this.displayInfo}>신상정보 확인하기</button>
            </>
        )
    }
}

export default Person