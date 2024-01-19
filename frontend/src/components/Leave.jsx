import React from "react";
import "../index.css"

class Leave extends React.Component {
    constructor(props) {
        super(props);
        this.for = null;
        if(this.props.for != undefined) {
            this.for = "Za: "+this.props.for;
        }
    }

    onTrigger = (event) => {
        event = this.props;
        this.props.onTrigger(event);
    }

    render() {
        return <div className="notification" onClick={this.onTrigger}>
            <div className="notif_from">Od: {this.props.from}</div>
            <div className="notif_title">{this.props.title}</div>
            <div className="notif_content">{this.props.content}</div>
        </div>
    }
}

export default Leave;