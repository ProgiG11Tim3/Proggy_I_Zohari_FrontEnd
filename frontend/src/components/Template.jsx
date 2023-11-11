import React from "react";
import Header from "./components/Header";
import Profil from "./components/components/Profil";
import "../index.css"

class Template extends React.Component {
    render() {
        return <div id={"Template"}>
            {/* <Header profil={<Profil />}/> */}
            <Header/>
            {this.props.children}
        </div>
    }
}

export default Template