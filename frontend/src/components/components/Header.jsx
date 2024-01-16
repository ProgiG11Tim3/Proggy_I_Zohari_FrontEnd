import React from "react";
import "../../index.css";
import { Navigate } from 'react-router-dom';
import logo from "../../images/logo.png";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <div id="header">
                <div id="naslov">
                    <img src={logo} alt="logo" id="icon" onClick={() => {
                        this.element = <Navigate to="/" replace={true}/>
                        this.forceUpdate()
                    }}/>
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