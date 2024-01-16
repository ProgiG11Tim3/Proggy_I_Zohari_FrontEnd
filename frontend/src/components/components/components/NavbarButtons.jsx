import React from "react";

import "../../../index.css";

class NavbarButtons extends React.Component {
    render() {
        return <div id="nav_button_container">
            <div className="nav_button">Obavijesti</div>
            <div className="nav_button">Povijest liječničkih pregleda </div>
            <div className="nav_button">Potvrđena bolovanja</div>
            <div className="nav_button">Specijalistički pregledi </div>
            <div className="nav_button">Učitavanje nalaza</div>
        </div>
    }
}

export default NavbarButtons;