import React from "react";
import "../index.css"

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.for = null;
        if(this.props.for != undefined) {
            this.for = "Za: "+this.props.for;
        }
        this.button = null;
        if(this.props.button == "true") {
            this.button = <button className="notif_open">PREGLED</button>;
        }
    }

    render() {
        return <div className="notification">
            <div className="notif_title">{this.props.title}</div>
            <div className="notif_for">{this.for}</div>
            {this.button}
            <div className="notif_content">{this.props.content}</div>
        </div>
    }
}

export default Notification;