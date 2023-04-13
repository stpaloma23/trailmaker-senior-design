import LoginCreateCard from "../components/LoginCreateCard";


function LoginPage({setIsLoggedIn, setUserInformation, isLoggedIn, app}) {
    return (
        <div className="container">
            <LoginCreateCard/>
        </div>
    )
}
export default LoginPage;