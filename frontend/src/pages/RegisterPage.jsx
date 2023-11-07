import React from "react";
import Template from "../components/Template";
import "../index.css"

class MainPage extends React.Component {
    render() {
        return <div>
            {/* <Header profil={<Profil />}/> */}
            <Template>
                <div>
                    Registracija
                    <div>
                        <div>Osnovni podaci</div>
                        <div>Kontakt podaci</div>
                        <div>Podaci za prijavu</div>
                        <div>Poslodavac</div>
                    </div>
                </div>
            </Template>
        </div>
    }
}

export default MainPage