import React from "react";
import Header from "./components/Header";
import Profil from "./components/components/Profil";
import "../index.css"

class Template extends React.Component {
    render() {
        return <div>
            {/* <Header profil={<Profil />}/> */}
            <Header/>
        </div>
    }
}

export default Template