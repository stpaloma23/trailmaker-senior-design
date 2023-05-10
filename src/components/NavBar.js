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
                <div className="top-nav" >
                    <a href="/">
                        <img  src={logo} alt="trailmaker logo"/>
                    </a>
                    
                </div>
                <nav>
                    <a href="/highschool">High School</a>
                    <a href="/finances">Finances</a>
                    <a href="/academics">Personal</a>
                    <a href="/career">Career</a>
                    <a href="/my-trail">My Trail</a>
                    {/* <a href="/">New Post</a> */}
                    {(isLoggedIn &&<a href="/" onClick={()=>logout()}>Logout</a>) || (!isLoggedIn &&<a href="/login">Login</a>)}
                </nav>
            </div>
        </header>
    )
}
export default NavBar;


