import React, { useCallback, useState, useEffect} from "react";
import { useNavigate }  from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { addDoc, collection, getFirestore, setDoc, doc } from "firebase/firestore";

import CreateUserForm from "../components/CreateUserForm";

function CreateUser({setIsLoggedIn, setUserInformation, isLoggedIn, app}){
    const [errors, setErrors] = useState();
    const navigate = useNavigate();
    var userTasks = {
        finance:[],
        professional:[],
        highschool:[],
        academic:[]
    };
    // const navigateToLoginPage = () => {
    //     navigate('/');
    // };
    // useEffect(()=>{
    //     if (isLoggedIn) navigate("/my-trail");
    // })
    const createUser = useCallback (
        (e) => {
            e.preventDefault();

            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;
            const displayName = e.currentTarget.displayName.value;

            const auth = getAuth();

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setIsLoggedIn(true)

                    setErrors()

                    updateProfile (user, { displayName: displayName })
                        .then(() => {
                            setUserInformation({
                                email: user.email,
                                displayName: displayName,
                                uid: user.uid,
                                accessToken: user.accessToken,
                            })
                            // create a method that calls firestore database and creates a plae to store all the tasks
                            const db = getFirestore(app);
                            try {
                                const docRef = doc(db,"user-tasks",user.uid);
                                setDoc(docRef,userTasks);
                            } catch(e) {
                                    console.error("Error adding document: ", e)
                            }
                        })
                        .catch((error) => {
                            const errorCode = errors.code;
                            const errorMessage = errors.message;
                            console.warn({ errors, errorCode, errorMessage})
                            setErrors(errorMessage);
                        })
                })
                .catch((errors) => {
                    const errorCode = errors.code;
                    const errorMessage = errors.message;
                    console.warn({ errors, errorCode, errorMessage})
                    setErrors(errorMessage);
                });
        },
        [setErrors, setIsLoggedIn, setUserInformation, errors,app]
    );
    

    return(
        <div className="container">
            <div className="create-account-wrapper">
                <h1>Create an Account</h1>
                <div className="create-account-form">
                    <CreateUserForm 
                        createUser={createUser}
                    />
                </div>
            </div>
        </div>
    )
}
export default CreateUser;