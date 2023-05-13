import { useRef , useCallback, useState} from "react";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion} from "firebase/firestore";
function ArticleTaskToComplete({step,section, app, userInformation, isLoggedIn}){
    const arStepRef = useRef(null);
    const [disabled, setDisabled] = useState(false);

    const [buttonText, setButtonText] = useState("add"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

    const changeText = () => setButtonText("✔️");


    const addStepToUserTasks = useCallback(async () => {
        if (isLoggedIn) {
            try{
                const uid = userInformation.uid;
                const stepText = arStepRef.current.textContent;
                const db = getFirestore(app);
                const docRef = doc(db,"user-tasks",String(uid));
                updateDoc(docRef, {[section]:arrayUnion(String(stepText)), all:arrayUnion(String(stepText))});;
                const tasks = await getDoc(docRef);
                setDisabled(true);
                changeText();
                console.log(tasks.data());
            } catch (error) {
                console.warn("error in task to complete", error);
            }
        }
    },[isLoggedIn,app,userInformation,section]);

    let color;
    if (section === "all") {
        color = "purple";
    }
    if (section === "career") {
        color = "blue";
    }
    if (section === "academic") {
        color = "yellow";
    }
    if (section === "highschool") {
        color = "pink";
    }
    if (section === "finance") {
        color = "green";
    }
    if (section === "completed") {
        color = "black";
    }

    return(
        <div className="task-to-complete">
            <div className="next-step-text">
                <p id="article-step" ref={arStepRef}>{step}</p>
            </div>
            <div className="next-step-other-info">
                <p className={`type-of-task ${color}`}>{section}</p>
                <button className="add-next-step" disabled={disabled} onClick={addStepToUserTasks}> {buttonText}</button>
            </div>
        </div>
    )
}
export default ArticleTaskToComplete