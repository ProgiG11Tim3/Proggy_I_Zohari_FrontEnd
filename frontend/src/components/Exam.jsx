import React from "react";
import "../index.css"

class Exam extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="notification">
            <div className="notif_from">{this.props.date}</div>
            <div className="notif_title">{this.props.title}</div>
            <div className="notif_content">{this.props.content}</div>
        </div>
    }
}

export default Exam;