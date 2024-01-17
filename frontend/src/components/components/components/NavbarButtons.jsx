import React from "react";

import "../../../index.css";

class NavbarButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: <div id="nav_button_container">
                <div className="nav_button" onClick={() => this.props.isSelected("0")}>Obavijesti</div>
                <div className="nav_button" onClick={() => this.props.isSelected("1")}>Povijest liječničkih pregleda </div>
                <div className="nav_button" onClick={() => this.props.isSelected("2")}>Potvrđena bolovanja</div>
                <div className="nav_button" onClick={() => this.props.isSelected("3")}>Specijalistički pregledi </div>
                <div className="nav_button" onClick={() => this.props.isSelected("4")}>Učitavanje nalaza</div>
            </div>
        }
    }

    componentDidMount() {
        if(this.props.role == "Child") {
            this.setState({
                buttons: <div id="nav_button_container">
                    <div className="nav_button" onClick={() => this.props.isSelected("0")}>Obavijesti</div>
                    <div className="nav_button" onClick={() => this.props.isSelected("1")}>Povijest liječničkih pregleda </div>
                    <div className="nav_button" onClick={() => this.props.isSelected("2")}>Generirane ispričnice</div>
                    <div className="nav_button" onClick={() => this.props.isSelected("3")}>Specijalistički pregledi </div>
                    <div className="nav_button" onClick={() => this.props.isSelected("4")}>Učitavanje nalaza</div>
                </div>
            })
        } 
    }

    render() {
        return <div id="nav_button_container">
            {this.state.buttons}        
        </div>
    }
}

export default NavbarButtons;