import React from "react";
class OpenedNotification extends React.Component {
    constructor(props) {
        super(props);
    }

    onTrigger = (event) => {
        this.props.onTrigger(event);
    }

    render() {
        return <div id="parent_notifications">
            <div id="notification_container_parent">
                <div id="notifications_title">{this.props.type}</div>
                <div className="notification">
                    <div className="notif_title">{this.props.title}</div>
                    <br />
                </div>
                <div id="content">
                {this.props.content}
                </div>
            </div>
            <button id="back_button" onClick={this.onTrigger}>NATRAG</button>
        </div>
    }
}

export default OpenedNotification;