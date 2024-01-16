import React from "react";
import Notification from "./Notification";
import Patient from "./Patient";

class OpenedNotification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="parent_notifications">
            <div id="notification_container_parent">
                <div id="notifications_title">OBAVIJESTI</div>
                <div className="notification">
                    <div className="notif_title">Naslov obavijesti *notificationTitle*</div>
                    <br />
                    <div id="from">Od: LOM</div>
                </div>
                <div id="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius mi ut neque efficitur aliquam. Ut faucibus mollis tellus, ut finibus nulla tempor vel. Sed bibendum ullamcorper tellus at imperdiet. Nullam sit amet euismod magna. Aliquam non nisi ut purus gravida ullamcorper. Nunc eu semper neque. Etiam iaculis dui ut pulvinar facilisis. Pellentesque et consectetur ligula, ac efficitur lectus. Integer sit amet erat eget nibh lacinia ornare. Ut dapibus neque euismod, condimentum eros id, auctor risus. Praesent vel erat tellus. In lobortis posuere tincidunt. Donec eu tortor nisl.
                </div>
            </div>
            <button id="back_button">NATRAG</button>
        </div>
    }
}

export default OpenedNotification;