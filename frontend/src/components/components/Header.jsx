import React from "react";
import "../../index.css";
import logo from "../../images/logo.png";

class Header extends React.Component {
    render() {
        return <div>
            <div id="naslov">
                <img src={logo} alt="logo" id="icon"/>
                <div id="naslov_text">
                    <div>Ozdravi</div>
                    <div id="podnaslov_text">Olakšava život kad imate bolesnu djecu</div>
                </div>
            </div>
            {this.props.profil}
            <div id="navbar">
                <div>EN</div>
                <div>aA</div>
            </div>
        </div>
    }
}

export default Header