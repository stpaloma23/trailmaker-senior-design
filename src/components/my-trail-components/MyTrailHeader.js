import profilePic from "../../images/pfp.png"; 

function MyTrailHeader({selectedSection, setSelectedSection, userInformation}){

    const handleNavClick = (section) => {
        setSelectedSection(section);
    }
    console.log(userInformation)

    return(
        <div className="my-trail-header">
            <div className="pfp-circle" style={{  backgroundImage: "url(" + profilePic + ")", backgroundPosition: "center",
                    backgroundSize: "cover"}} ></div>
            <h3>Hey {userInformation.displayName} </h3>
            <ul>
                <li className="trail-sidebar-content" onClick={() => handleNavClick('tasks')}>My Tasks</li>
                {/* <li className="trail-sidebar-content" onClick={() => handleNavClick('goals')}>My Goals</li> */}
                <li className="trail-sidebar-content" onClick={() => handleNavClick('thoughts')}>My Thoughts</li>
                <li className="trail-sidebar-content" onClick={() => handleNavClick('calendar')}>My Calendar</li>
                <li className="trail-sidebar-content" onClick={() => handleNavClick('settings')}>Settings</li>
            </ul>
        </div>
    )
}
export default MyTrailHeader;