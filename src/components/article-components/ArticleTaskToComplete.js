import { useRef , useCallback, useState} from "react";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion} from "firebase/firestore";
function ArticleTaskToComplete({step,section, app, userInformation, isLoggedIn}){
    const arStepRef = useRef(null);
    const [disabled, setDisabled] = useState(false);


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
                console.log(tasks.data());
            } catch (error) {
                console.warn("error in task to complete", error);
            }
        }
    },[isLoggedIn,app,userInformation,section]);

    return(
        <div className="task-to-complete">
            <div className="next-step-text">
                <p id="article-step" ref={arStepRef}>{step}</p>
            </div>
            <div className="next-step-other-info">
                <p className="next-step-date">3/23/2023</p>
                <p className="type-of-task">{section}</p>
                <button className="add-next-step" disabled={disabled} onClick={addStepToUserTasks}> add</button>
            </div>
        </div>
    )
}
export default ArticleTaskToComplete