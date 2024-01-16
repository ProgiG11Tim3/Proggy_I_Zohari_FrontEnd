import React from "react";
import Notification from "./Notification";

class SpecialistExams extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="parent_notifications">
            <div id="notification_container_parent">
                <div id="notifications_title">Specijalistički pregledi</div>
                <div id="notifications">
                    <Notification title={"NASLOV"} from={"DR SC"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius mi ut neque efficitur aliquam. Ut faucibus mollis tellus, ut finibus nulla tempor vel. Sed bibendum ullamcorper tellus at imperdiet. Nullam sit amet euismod magna. Aliquam non nisi ut purus gravida ullamcorper. Nunc eu semper neque. Etiam iaculis dui ut pulvinar facilisis. Pellentesque et consectetur ligula, ac efficitur lectus. Integer sit amet erat eget nibh lacinia ornare. Ut dapibus neque euismod, condimentum eros id, auctor risus. Praesent vel erat tellus. In lobortis posuere tincidunt. Donec eu tortor nisl."}/>
                    <Notification title={"NASLOV"} from={"DR SC"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius mi ut neque efficitur aliquam. Ut faucibus mollis tellus, ut finibus nulla tempor vel. Sed bibendum ullamcorper tellus at imperdiet. Nullam sit amet euismod magna. Aliquam non nisi ut purus gravida ullamcorper. Nunc eu semper neque. Etiam iaculis dui ut pulvinar facilisis. Pellentesque et consectetur ligula, ac efficitur lectus. Integer sit amet erat eget nibh lacinia ornare. Ut dapibus neque euismod, condimentum eros id, auctor risus. Praesent vel erat tellus. In lobortis posuere tincidunt. Donec eu tortor nisl."}/>
                    <Notification title={"NASLOV"} from={"DR SC"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius mi ut neque efficitur aliquam. Ut faucibus mollis tellus, ut finibus nulla tempor vel. Sed bibendum ullamcorper tellus at imperdiet. Nullam sit amet euismod magna. Aliquam non nisi ut purus gravida ullamcorper. Nunc eu semper neque. Etiam iaculis dui ut pulvinar facilisis. Pellentesque et consectetur ligula, ac efficitur lectus. Integer sit amet erat eget nibh lacinia ornare. Ut dapibus neque euismod, condimentum eros id, auctor risus. Praesent vel erat tellus. In lobortis posuere tincidunt. Donec eu tortor nisl."}/>
                    <Notification title={"NASLOV"} from={"DR SC"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius mi ut neque efficitur aliquam. Ut faucibus mollis tellus, ut finibus nulla tempor vel. Sed bibendum ullamcorper tellus at imperdiet. Nullam sit amet euismod magna. Aliquam non nisi ut purus gravida ullamcorper. Nunc eu semper neque. Etiam iaculis dui ut pulvinar facilisis. Pellentesque et consectetur ligula, ac efficitur lectus. Integer sit amet erat eget nibh lacinia ornare. Ut dapibus neque euismod, condimentum eros id, auctor risus. Praesent vel erat tellus. In lobortis posuere tincidunt. Donec eu tortor nisl."}/>
                </div>
            </div>
        </div>
    }
}

export default SpecialistExams;