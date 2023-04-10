import NavBar from "../components/NavBar";
import LoginCreateCard from "../components/LoginCreateCard";
import MyTrailCard from "../components/MyTrailCard";

function MyTrail({isLoggedIn}){
    return(
        <div className="container">
            <NavBar/>
            <MyTrailCard
             displayTask={true}
             />


        </div>
    )
}
export default MyTrail;