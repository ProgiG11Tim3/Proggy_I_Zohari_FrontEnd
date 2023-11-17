import React from "react";
import "../../index.css";
import { Navigate } from 'react-router-dom';
import logo from "../../images/logo.png";

class Header extends React.Component {đ
    constructor(props) {
        super(props)
        this.element = null
    }

    render() {
        return <div>
            {this.element}
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
            <div id="navbar">
                <div>EN</div>
                <div>aA</div>
            </div>
        </div>
    }
}

export default Header