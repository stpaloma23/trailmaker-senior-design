import LoginCreateCard from "../components/LoginCreateCard";


function LoginPage({setIsLoggedIn, setUserInformation, isLoggedIn, app}) {
    return (
        <div className="container">
            <LoginCreateCard
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setUserInformation={setUserInformation}
            />
        </div>
    )
}
export default LoginPage;