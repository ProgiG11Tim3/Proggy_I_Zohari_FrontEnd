import React from "react";
import "../index.css"

class Exam extends React.Component {
    constructor(props) {
        super(props);
    }

    onTrigger = (event) => {
        event = this.props;
        this.props.onTrigger(event);
    }

    render() {
        return <div className="notification" onClick={this.onTrigger}>
            <div className="date_of_exam">{this.props.date.slice(0, 10)}</div>
            <div className="notif_title">{this.props.title}</div>
            <div className="exam_content">{this.props.content}</div>
        </div>
    }
}

export default Exam;