import React from "react";

function Dropdown({open, value}){
    return(
        <div className={`dropdown_bar ${open? "open": "close"}`}>
            <ul>
                <li>{`${value}1`}</li>
                <li>{`${value}2`}</li>
                <li>{`${value}3`}</li>
            </ul>
        </div>
    )
}
export default Dropdown

Dropdown.defaultProps = {
    open: false
}