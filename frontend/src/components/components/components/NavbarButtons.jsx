import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../../index.css";

const NavbarButtons = (props) => {
    const [style, setStyle] = useState("visible");
    const [buttons, setButtons] = useState(null);

    const handleResize = () => {
        if(window.innerWidth > 768) {
            setStyle("visible");
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        if(window.innerWidth <= 768) {
            setStyle("collapse");
        }
        if(props.role == "Child") {
            setButtons(
                <div id="nav_button_container">
                    <div className="nav_button" onClick={() => props.isSelected("0")}>Obavijesti</div>
                    <div className="nav_button" onClick={() => props.isSelected("1")}>Povijest liječničkih pregleda</div>
                    <div className="nav_button" onClick={() => props.isSelected("2")}>Generirane ispričnice</div>
                    <div className="nav_button" onClick={() => props.isSelected("3")}>Specijalistički pregledi</div>
                    <div className="nav_button" onClick={() => props.isSelected("4")}>Učitavanje nalaza</div>
                </div>
            )
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
        } else if (props.role == "LOM") {
            setButtons(
                <div id="nav_button_container">
                    <Link to={"/doctor/patientlist"} className="nav_button">Popis pacijenata</Link>
                    <Link to={"/doctor/newpatient"} className="nav_button">Novi pacijent</Link>
                    <Link to={"/doctor/sicknotes"} className="nav_button">Preporuke za bolovanje</Link>
                </div>
            )
        } else if (props.role == "PED") {
            setButtons(
                <div id="nav_button_container">
                    <Link to={"/pediatrician/patientlist"} className="nav_button">Popis pacijenata</Link>
                    <Link to={"/pediatrician/newpatient"} className="nav_button">Novi pacijent</Link>
                </div>
            )
        } else if (props.role == "Pedijatar") {
            setButtons(
                <div id="nav_button_container">
                    <Link to={"/pediatrician/patientprofile/"+props.oib} className="nav_button">Profil pacijenta</Link>
                    <Link to={"/pediatrician/patientprofile/"+props.oib+"/newmedicalexam"} className="nav_button">Novi pregled</Link>
                    <Link to={"/pediatrician/patientprofile/"+props.oib+"/medicalfile"} className="nav_button">Liječnički karton</Link>
                    <Link to={"/pediatrician/patientprofile/"+props.oib+"/specialistexam"} className="nav_button">Specijalistički pregled</Link>
                    <Link to={"/pediatrician/patientprofile/"+props.oib+"/medicalreports"} className="nav_button">Nalazi privatnih ustanova</Link>
                    <Link to={"/pediatrician/patientprofile/"+props.oib+"/sicknote"} className="nav_button">Generiranje ispričnica</Link>
                    <Link to={"/pediatrician/patientprofile/"+props.oib+"/sickleave"} className="nav_button">Generiranje preporuka o bolovanju</Link>
                    <Link to={"/pediatrician/patientprofile/"+props.oib+"/sendnotif"} className="nav_button">Obavijest roditelju</Link>
                </div>
            )
        } else if (props.role == "Parent") {
            setButtons(
                <div id="nav_button_container">
                    <div className="nav_button" onClick={() => props.isSelected("0")}>Obavijesti</div>
                    <div className="nav_button" onClick={() => props.isSelected("1")}>Povijest liječničkih pregleda</div>
                    <div className="nav_button" onClick={() => props.isSelected("2")}>Potvrđena bolovanja</div>
                    <div className="nav_button" onClick={() => props.isSelected("3")}>Specijalistički pregledi</div>
                    <div className="nav_button" onClick={() => props.isSelected("4")}>Učitavanje nalaza</div>
                </div>
            )
        }
    }, [props])

    const renderButtons = (buttons, style) => {
        return <div className="collapsable" style={{visibility: style}}>{buttons}</div>;
    }

    return <div id="nav_buttons">
        <div id="mobile_menu" onClick={() => {
            if(style == "visible") {
                setStyle("collapse");
            } else {
                setStyle("visible");
            }
        }}></div>
        {renderButtons(buttons, style)}
    </div>
}

export default NavbarButtons;