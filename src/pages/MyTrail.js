import { useNavigate } from "react-router-dom";
import MyTrailCard from "../components/my-trail-components/MyTrailCard";


function MyTrail({isLoggedIn}){
    const navigate = useNavigate();
    if (!isLoggedIn) {
        navigate("/login")
    }
    return(
        <div className="container">
            <MyTrailCard
                displayTask={true}
             />
        </div>
    )
}
export default MyTrail;