
import {useNavigate} from 'react-router-dom';
import React, { useEffect, useCallback } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import LoginForm from "./LoginForm";

function LoginCreateCard({ isLoggedIn, setIsLoggedIn, setUserInformation }){
    const navigate = useNavigate();

    const navigateToCreatePage = () => {
        navigate('/create-user');
    };

    useEffect(()=>{
        if (isLoggedIn) navigate("/my-trail");
    });
    const loginUser = useCallback((e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setIsLoggedIn(true)
                setUserInformation({
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid,
                    accessToken: user.accessToken,
                });
            })
            .catch((errors) => {
                const errorCode = errors.code;
                const errorMessage = errors.message;
                console.warn({ errors, errorCode, errorMessage})
            }); 
    }, [setIsLoggedIn, setUserInformation])

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
                <button className="goto-create-count-btn" onClick={navigateToCreatePage} >
                    Create An Account!
                </button>
            </div>
        </div>
    )
}
export default LoginCreateCard;