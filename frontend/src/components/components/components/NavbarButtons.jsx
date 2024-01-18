import React, { useEffect, useState } from "react";

import "../../../index.css";

const NavbarButtons = (props) => {
    const [third, setThird] = useState("Potvrđena bolovanja");

    useEffect(() => {
        if(props.role == "Child") {
            setThird("Generirane ispričnice ");
        }
    }, [props])

    return <div id="nav_button_container">
        <div id="nav_button_container">
            <div className="nav_button" onClick={() => props.isSelected("0")}>Obavijesti</div>
            <div className="nav_button" onClick={() => props.isSelected("1")}>Povijest liječničkih pregleda</div>
            <div className="nav_button" onClick={() => props.isSelected("2")}>{third}</div>
            <div className="nav_button" onClick={() => props.isSelected("3")}>Specijalistički pregledi</div>
            <div className="nav_button" onClick={() => props.isSelected("4")}>Učitavanje nalaza</div>
        </div>     
    </div>
}

export default NavbarButtons;