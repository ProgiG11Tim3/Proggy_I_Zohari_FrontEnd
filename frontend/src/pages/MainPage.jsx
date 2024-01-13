import React from "react";
import Template from "../components/Template";
import "../index.css"
import { Link } from "react-router-dom";


class MainPage extends React.Component {
    render() {
        return <div>
            {/* <Header profil={<Profil />}/> */}
            <Template>
                <div id={"home_bigboy_main"}>
                    <div id={"home_main_container"}>
                        <div id={"role_main_container"} className={"roditelj_text"}>
                            RODITELJ
                            <div id={"role_sub_container"} className={"role_sub_text"}>
                                Izradite Ozdravi profil za Vas i Vaše dijete.
                                <div className={"role_sub-smol_text"}>Puni katalog usluga</div>
                            </div>

                        </div>
                        <div id={"role_main_container"} className={"ped_text"}>
                            PEDIJATAR
                            <div id={"role_sub_container"} className={"role_sub_text"}>
                                Prijavite pacijente u sustav na jednom mjestu.
                                <div className={"role_sub-smol_text"}>Puni katalog usluga</div>
                            </div>
                        </div>
                        <div id={"role_main_container"} className={"lom_text"}>
                            LIJEČNIK OBITELJSKE MEDICINE
                            <div id={"role_sub_container"} className={"role_sub_text role_sub_text_lom"}>
                                Prijavite pacijente u sustav na jednom mjestu.
                                <div className={"role_sub-smol_text"}>Puni katalog usluga</div>
                            </div>
                        </div>

                    </div>
                    <div id={"home_reg_log_container"}>
                        <Link to="/register" id={"reg_button"}>Registriraj se</Link>
                        <div id={"prijava_button"}>
                            <Link to="/login" className={"linkic"}>Prijava</Link>
                        </div>
                    </div>

                </div>


            </Template>
        </div>
    }
}

export default MainPage
