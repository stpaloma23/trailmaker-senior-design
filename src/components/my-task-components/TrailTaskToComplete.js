import { useRef, useCallback, useState } from "react";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore";
import check from "../../images/check.png"

function TrailTaskToComplete({ task, app, uid, section, displayDate}){
    console.log("in this bitch hoe");
    const [showTask, setShowTask] = useState(true)
    const trStepRef = useRef(null);
    const userTaskCompleted = useCallback(async () => {
        // when the button is pressed, it removes the  task from the sections and adds it to the completed section
            try{
                const userTask = trStepRef.current.textContent;
                const db = getFirestore(app);
                const docRef = doc(db,"user-tasks",String(uid));
                updateDoc(docRef, {[section]:arrayRemove(String(userTask)), all:arrayRemove(String(userTask)), completed:arrayUnion(String(userTask))});;
                const tasks = await getDoc(docRef);
                console.log(tasks);
                setShowTask(false)
            } catch (error) {
                console.warn("error in task to complete", error);
            }
    },[section, app, uid, showTask]);
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
    console.log("show task", showTask);

    return (
        showTask && (
            <div className="task-to-complete">
                <div className="next-step-text">
                    <p id="article-step" ref={trStepRef}>{task}</p>
                </div>
                <div className="next-step-other-info">
                    {displayDate && <p className="next-step-date">3/23/2023</p> }
                    {section && <div className={`next-step-section ${color}`}><p>{section}</p></div>}
                    <div className="add-next-step trail-task-button" onClick={userTaskCompleted}> <img src={check} alt="check icon"/> </div>
                </div>
            </div>
        )
    )
}
export default TrailTaskToComplete;