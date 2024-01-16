import React from "react";
import Template from "../components/Template";
import Profil from "../components/components/components/Profile";
import Patient from "../components/Patient";
import Notification from "../components/Notification";

import "../index.css";

class HomePage extends React.Component {
    render() {
        return <Template profil={<Profil />}>
            <div id="notification_container">
                <div id="notifications_title">OBAVIJESTI</div>
                <div id="notifications">
                    <Notification title={"NASLOV"} from={"DR SC"} for={"JOE MAMA"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius mi ut neque efficitur aliquam. Ut faucibus mollis tellus, ut finibus nulla tempor vel. Sed bibendum ullamcorper tellus at imperdiet. Nullam sit amet euismod magna. Aliquam non nisi ut purus gravida ullamcorper. Nunc eu semper neque. Etiam iaculis dui ut pulvinar facilisis. Pellentesque et consectetur ligula, ac efficitur lectus. Integer sit amet erat eget nibh lacinia ornare. Ut dapibus neque euismod, condimentum eros id, auctor risus. Praesent vel erat tellus. In lobortis posuere tincidunt. Donec eu tortor nisl."}/>
                    <Notification title={"NASLOV"} from={"DR SC"} for={"JOE MAMA"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius mi ut neque efficitur aliquam. Ut faucibus mollis tellus, ut finibus nulla tempor vel. Sed bibendum ullamcorper tellus at imperdiet. Nullam sit amet euismod magna. Aliquam non nisi ut purus gravida ullamcorper. Nunc eu semper neque. Etiam iaculis dui ut pulvinar facilisis. Pellentesque et consectetur ligula, ac efficitur lectus. Integer sit amet erat eget nibh lacinia ornare. Ut dapibus neque euismod, condimentum eros id, auctor risus. Praesent vel erat tellus. In lobortis posuere tincidunt. Donec eu tortor nisl."}/>
                    <Notification title={"NASLOV"} from={"DR SC"} for={"JOE MAMA"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius mi ut neque efficitur aliquam. Ut faucibus mollis tellus, ut finibus nulla tempor vel. Sed bibendum ullamcorper tellus at imperdiet. Nullam sit amet euismod magna. Aliquam non nisi ut purus gravida ullamcorper. Nunc eu semper neque. Etiam iaculis dui ut pulvinar facilisis. Pellentesque et consectetur ligula, ac efficitur lectus. Integer sit amet erat eget nibh lacinia ornare. Ut dapibus neque euismod, condimentum eros id, auctor risus. Praesent vel erat tellus. In lobortis posuere tincidunt. Donec eu tortor nisl."}/>
                    <Notification title={"NASLOV"} from={"DR SC"} for={"JOE MAMA"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius mi ut neque efficitur aliquam. Ut faucibus mollis tellus, ut finibus nulla tempor vel. Sed bibendum ullamcorper tellus at imperdiet. Nullam sit amet euismod magna. Aliquam non nisi ut purus gravida ullamcorper. Nunc eu semper neque. Etiam iaculis dui ut pulvinar facilisis. Pellentesque et consectetur ligula, ac efficitur lectus. Integer sit amet erat eget nibh lacinia ornare. Ut dapibus neque euismod, condimentum eros id, auctor risus. Praesent vel erat tellus. In lobortis posuere tincidunt. Donec eu tortor nisl."}/>
                </div>
            </div>
            <div id="patients">
                <Patient type="roditelj" name="Ime" lastname="Prezime" oib="123456789"/>
                <Patient type="dijete" name="Ime" lastname="Prezime" oib="123456789"/>
                <Patient type="dijete" name="Ime" lastname="Prezime" oib="123456789"/>
                <Patient type="dijete" name="Ime" lastname="Prezime" oib="123456789"/>
            </div>
        </Template>
    }
}

export default HomePage