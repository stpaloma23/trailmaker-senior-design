import logo from "../images/logo.png"
import { getAuth, signOut } from 'firebase/auth';


function NavBar({isLoggedIn, setIsLoggedIn, setUserInformation}){
    function logout() {
        const auth = getAuth()
        signOut(auth)
            .then(()=>{
                setUserInformation({})
                setIsLoggedIn(false)
            })
            .catch((error)=>{
                console.warn(error)
            })
    }
    return(
        <header>
            <div className="nav-bar-container">
                <div className="top-nav">
                    <img src={logo} alt="trailmaker logo"/>
                    {(isLoggedIn &&<p onClick={()=>logout()}>Logout</p>) || (!isLoggedIn &&<a href="/login">Login</a>)}

                </div>
                <nav>
                    <a href="/high-school">Pre-College</a>
                    <a href="/finances-page">Finances</a>
                    <a href="/academics">Academic</a>
                    <a href="/professional-development">Professional</a>
                    <a href="/my-trail">My Trail</a>
                    <a href="/">New Post</a>
                </nav>
            </div>
        </header>
    )
}
export default NavBar;


