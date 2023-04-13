
function MyTrailHeader({selectedSection, setSelectedSection}){

    const handleNavClick = (section) => {
        setSelectedSection(section);
    }

    return(
        <div className="my-trail-header">
            <div className="pfp-circle"></div>
            <h3>Hey [Name]</h3>
            <ul>
                <li className="trail-sidebar-content" onClick={() => handleNavClick('tasks')}>My Tasks</li>
                <li className="trail-sidebar-content" onClick={() => handleNavClick('goals')}>My Goals</li>
                <li className="trail-sidebar-content" onClick={() => handleNavClick('thoughts')}>My Thoughts</li>
                <li className="trail-sidebar-content" onClick={() => handleNavClick('calendar')}>My Calendar</li>
                <li className="trail-sidebar-content" onClick={() => handleNavClick('settings')}>Settings</li>
            </ul>
        </div>
    )
}
export default MyTrailHeader;