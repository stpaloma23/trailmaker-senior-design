import MyTrailHeader from "../my-trail-components/MyTrailHeader";
import { useState } from "react";
import MyGoalsCard from "../my-trail-components/MyGoalsCard";
import MyTasksCard from "../my-trail-components/MyTasksCard";
import MyThoughtsCard from "../my-trail-components/MyThoughtsCard";
import MyCalendarCard from "../my-trail-components/MyCalendarCard";
import MySettingCard from "../my-trail-components/MySettingCard";


function MyTrailCard({displayTask, app, userInformation, isLoggedIn}){

    const [selectedSection, setSelectedSection] = useState('tasks');
    let content;
    if (selectedSection === "tasks") {
        content = <MyTasksCard
                    app={app}
                    userInformation={userInformation}
                />
    }
    if (selectedSection === "goals") {
        content = <MyGoalsCard/>
    }
    if (selectedSection === "thoughts") {
        content = <MyThoughtsCard
                    app={app}
                    userInformation={userInformation}
                    isLoggedIn={isLoggedIn}
                />
    }
    if (selectedSection === "calendar") {
        content = <MyCalendarCard/>
    }
    if (selectedSection === "settings") {
        content = <MySettingCard/>
    }

    return(
        <div className="container">
            <div className="my-trail-card-container">
                <div className="my-trail-contents">
                    <MyTrailHeader
                        selectedSection={selectedSection}
                        setSelectedSection={setSelectedSection}
                        userInformation={userInformation}
                    />
                    <div className="my-trail-contents-container">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyTrailCard;