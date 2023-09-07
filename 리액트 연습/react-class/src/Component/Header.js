import React from "react";

function Header({onSearch}){
    const inputChange = (e) => {
        const searchText = e.target.value
        onSearch(searchText)
    }

    return(
        <div className="header">
                <input placeholder="검색어를 입력해주세요." className="header_input" onChange={inputChange}></input>
                {/* <button className="sort-btns">Price</button> */}
        </div>
    )
}
export default Header