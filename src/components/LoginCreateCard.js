import LoginForm from "./LoginForm";

function LoginCreateCard(){
    const loginUser = true
    return(
        <div className="login-create-card-container">
            <div className="login-create-card-login-side">
                <h2>Already have an account? </h2>
                <h2>Log in!</h2>
                <LoginForm
                    loginUser={loginUser}
                />
            </div>
            <div className="login-create-card-create-side">
                <h2>New Here?</h2>
                <h2>Start making your own trail!</h2>
                <button className="goto-create-count-btn" href="/create-user">
                    Create An Account!
                </button>
            </div>
        </div>
    )
}
export default LoginCreateCard;