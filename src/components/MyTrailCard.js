import MyTrailHeader from "./MyTrailHeader";
import { useState } from "react";
import MyGoalsCard from "./MyGoalsCard";
import MyTasksCard from "./MyTasksCard";
import MyThoughtsCard from "./MyThoughtsCard";
import MyCalendarCard from "./MyCalendarCard";
import MySettingCard from "./MySettingCard";
function MyTrailCard({displayTask}){

    const [selectedSection, setSelectedSection] = useState('tasks');
    let content;
    if (selectedSection === "tasks") {
        content = <MyTasksCard/>
    }
    if (selectedSection === "goals") {
        content = <MyGoalsCard/>
    }
    if (selectedSection === "thoughts") {
        content = <MyThoughtsCard/>
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