import React from "react";
import Header from "./components/Header";
import Profil from "./components/components/Profile";
import "../index.css"

class Template extends React.Component {
    render() {
        return <div id="template">
            <Header profil={this.props.profil} buttons={this.props.buttons}/>
            {this.props.children}
        </div>
    }
}

export default Template