import { useRef , useCallback, useState} from "react";
import { getFirestore, getDocs,query, collection, where, doc, getDoc, updateDoc, arrayUnion} from "firebase/firestore";
function TaskToComplete({key, step,section, app, userInformation, isLoggedIn}){
    const arStepRef = useRef(null);

    const addStepToUserTasks = useCallback(async () => {
        if (isLoggedIn) {
            try{
                const uid = userInformation.uid;
                const stepText = arStepRef.current.textContent;
                const db = getFirestore(app);
                const docRef = doc(db,"user-tasks",String(uid));
                updateDoc(docRef, {[section]:arrayUnion(String(stepText)), all:arrayUnion(String(stepText))});;
                const tasks = await getDoc(docRef);
                console.log(tasks.data());
            } catch (error) {
                console.warn("error in task to complete", error);
            }
        }
    },[isLoggedIn,app,userInformation]);

    return(
        <div className="task-to-complete">
            <div className="next-step-text">
                <p id="article-step" ref={arStepRef}>{step}</p>
            </div>
            <div className="next-step-other-info">
                <p className="next-step-date">3/23/2023</p>
                <p className="type-of-task">{section}</p>
                <button className="add-next-step" onClick={addStepToUserTasks}> add</button>
            </div>
        </div>
    )
}
export default TaskToComplete