import { useState, useCallback, useEffect, useMemo } from "react";
import TrailTaskToComplete from "../my-task-components/TrailTaskToComplete";
import MyTrailNextSteps from "../my-task-components/MyTrailNextSteps";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion} from "firebase/firestore";
import CompletedTask from "../my-task-components/CompletedTask";

function MyTasksCard({app, userInformation}) {
    const [comOpen, setCompleteOpen] = useState(false);
    const  [dRef, setDRef] = useState();
    const [data, setData] = useState();
    const completeToggle = () => {
        setCompleteOpen(!comOpen);
    };
    const uid = userInformation.uid;
    const [section, setSection] = useState("all");
    useEffect( () => {
        const fetchDoc = async () => {
            try{
                console.log("in the try block")
                const db = getFirestore(app);
                const docRef = doc(db,"user-tasks",String(uid));
                const tasks = await getDoc(docRef);
                setDRef(docRef);
                setData(tasks.data());
            } catch (error) {
                console.warn("error in task card ", error);
            }
        }
        fetchDoc()
    }, [ app, uid]);

    function SecSelected(sec){
        return () => {
            setSection(sec);
        }
    } ;

    console.log(section);
    console.log("data",data);
    console.log("completed",data?.completed);
    return (
        <div className="my-trail-card">
            <h1>My Tasks</h1>
            <div className="task-filers">
                <button className="my-task-menus-buttons" onClick={SecSelected("all")}>All</button>
                <button className="my-task-menus-buttons" onClick={SecSelected("finance")}>Finance</button>
                <button className="my-task-menus-buttons" onClick={SecSelected("academic")}>Academic</button>
                {/* <button className="my-task-menus-buttons" onClick={SecSelected("personal")}>Personal</button> */}
                <button className="my-task-menus-buttons" onClick={SecSelected("career")}>Career</button>
                <button className="my-task-menus-buttons" onClick={SecSelected("completed")}>Completed</button>
            </div>
            <MyTrailNextSteps
                nextSteps={data?.[section]}
                app={app}
                uid={uid}
                section={section}
            />
            {/* <div className="completed-step-section">
                <button type="button" className="collapse" onClick={completeToggle}>
                Completed Steps
                </button>
                {comOpen && (
                <div className="content">
                    {data?.completed.map((task,i) => (
                        <CompletedTask
                            key={i}
                            id={i}
                            task={task}
                        />
                    )

                    )}
                </div>
                )}
        </div> */}
        </div>
    );
}

export default MyTasksCard;
