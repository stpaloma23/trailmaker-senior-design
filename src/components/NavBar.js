import logo from "../images/logo.png"
function NavBar(){
    return(
        <header>
            <div className="nav-bar-container">
                <div className="top-nav">
                    <img src={logo} alt="trailmaker logo"/>
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