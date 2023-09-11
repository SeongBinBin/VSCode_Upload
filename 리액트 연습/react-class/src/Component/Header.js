import React, { useState } from "react";
import Dropdown from "./Dropdown";

function Header({onSearch}){
    const [isHovering, setIsHovering] = useState(false)
    const [dropdownName, dropdownValue] = useState("")
    const [shadow, setShadow] = useState(false)

    const inputChange = (e) => {
        const searchText = e.target.value
        onSearch(searchText)
    }

    const handleMouseOver = (e) => {
        setIsHovering(true)
        dropdownValue(e.target.innerHTML)
    }
    
    const handleMouseOut = () => {
        setIsHovering(false)
    }

    // const movingScroll = () => {
    //     if (window.scrollY > 100) {
    //         // const header = document.querySelector('.header')
    //         // header.classList.add('header_scroll')
    //         this.setState({this.state.shadow: true})
    //     }
    // }
    const handleScroll = () => {
        if (window.scrollY > 100) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      }

    return(
        <div className={`header ${shadow? 'shadow': ''}`}>
                <div className="dropdown">
                    <p 
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>HOME</p>
                    <p
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>STATE</p>
                    <p
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>CONTACT</p>
                </div>
                <Dropdown open={isHovering? true: false} value={dropdownName}></Dropdown>
                <input placeholder="검색어를 입력해주세요." className="header_input" onChange={inputChange}></input>
                {/* <button className="sort-btns">Price</button> */}
        </div>
    )
}
export default Header