import React from "react";
import Template from "../components/Template";
import Input from "../components/Input";
import "../index.css"

class RegisterPage extends React.Component {
    render() {
        return <div>
            {/* <Header profil={<Profil />}/> */}
            <Template>
                <div>
                    <div className="naslov">Registracija</div>
                    <div id="register_main_container">
                        <div>
                            Osnovni podaci
                            <div className="register_category_container">
                                <Input tag="Ime" name="ime" placeholder="Ime"/>
                                <Input tag="Prezime" name="prezime" placeholder="Prezime"/>
                                <Input tag="OIB" name="oib" placeholder="OIB"/>
                                <Input tag="Datum rođenja" name="datum_rod" placeholder="Odaberi datum"/>
                                <Input tag="Mjesto prebivališta" name="mjesto_preb" placeholder="Odaberi mjesto"/>
                                <Input tag="Poštanski broj prebivališta" name="post_broj" placeholder="Poštanski broj"/>
                            </div>
                        </div>
                        <div>
                            Kontakt podaci
                            <div className="register_category_container">
                                <Input tag="Broj telefona" name="broj_tel" placeholder="+385"/>
                                <Input tag="Adresa elektroničke pošte" name="email" placeholder="Adresa elektroničke pošte"/>
                        </div>
                        </div>
                        <div>
                            Podaci za prijavu
                            <div className="register_category_container">
                                <Input tag="Lozinka" name="lozinka1" placeholder="Lozinka"/>
                                <Input tag="Ponovi lozinku" name="lozinka2" placeholder="Ponovljena lozinka"/>
                                <Input tag="Korisničko ime" name="username" placeholder="Korisničko ime"/>
                            </div>
                        </div>
                        <div>
                            Poslodavac
                            <div className="register_category_container">
                                <Input tag="E-mail poslodavca" name="poslodavac_mail" placeholder="E-mail poslodavca"></Input>
                            </div>
                        </div>
                        <button id="register_button">REGISTRIRAJ SE</button>
                    </div>
                </div>
            </Template>
        </div>
    }
}

export default RegisterPage