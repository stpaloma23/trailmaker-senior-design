import { useNavigate } from "react-router-dom";
import MyTrailCard from "../components/my-trail-components/MyTrailCard";


function MyTrail({isLoggedIn, app, userInformation}){
    const navigate = useNavigate();
    if (!isLoggedIn) {
        navigate("/login")
    }
    return(
        <div className="container">
            <MyTrailCard
                displayTask={true}
                app={app}
                userInformation={userInformation}
                isLoggedIn={isLoggedIn}
             />
        </div>
    )
}
export default MyTrail;