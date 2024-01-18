import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../../index.css";

const NavbarButtons = (props) => {
    const [third, setThird] = useState("Potvrđena bolovanja");
    const [buttons, setButtons] = useState(
        <div id="nav_button_container">
            <div className="nav_button" onClick={() => props.isSelected("0")}>Obavijesti</div>
            <div className="nav_button" onClick={() => props.isSelected("1")}>Povijest liječničkih pregleda</div>
            <div className="nav_button" onClick={() => props.isSelected("2")}>{third}</div>
            <div className="nav_button" onClick={() => props.isSelected("3")}>Specijalistički pregledi</div>
            <div className="nav_button" onClick={() => props.isSelected("4")}>Učitavanje nalaza</div>
        </div>
    )

    useEffect(() => {
        if(props.role == "Child") {
            setThird("Generirane ispričnice ");
        } else if (props.role == "Doktor") {
            setButtons(
                <div id="nav_button_container">
                    <Link to={"/doctor/patientprofile/"+props.oib} className="nav_button">Profil pacijenta</Link>
                    <Link to={"/doctor/patientprofile/"+props.oib+"/newmedicalexam"} className="nav_button">Novi pregled</Link>
                    <Link to={"/doctor/patientprofile/"+props.oib+"/medicalfile"} className="nav_button">Liječnički karton</Link>
                    <Link to={"/doctor/patientprofile/"+props.oib+"/specialistexam"} className="nav_button">Specijalistički pregled</Link>
                    <Link to={"/doctor/patientprofile/"+props.oib+"/medicalreports"} className="nav_button">Nalazi privatnih ustanova</Link>
                </div>
            )
        }
    }, [props])

    return <div id="nav_button_container">
        <div id="mobile_menu" ></div>
        {buttons}
    </div>
}

export default NavbarButtons;