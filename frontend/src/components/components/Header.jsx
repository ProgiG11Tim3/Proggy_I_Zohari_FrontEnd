import React from "react";
import "../../index.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <div id="header">
                <div id="naslov">
                    <Link to="/">
                        <img src={logo} alt="logo" id="icon"/>
                    </Link>
                    <div id="naslov_text">
                        <div>Ozdravi</div>
                        <div id={"podnaslov_text"}>Olakšava život kad imate bolesnu djecu</div>
                    </div>
                </div>
                {this.props.profil}
            </div>
            <div id="navbar">
                {this.props.buttons}
                <div id="language_button">EN</div>
                <div id="aa_button">aA</div>
            </div>
        </div>
    }
}

export default Header