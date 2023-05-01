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
    const completedList = ["completed 1 ", "completed 2", "completed 3"];
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
                <button onClick={SecSelected("all")}>All</button>
                <button onClick={SecSelected("finance")}>Finance</button>
                <button onClick={SecSelected("academic")}>Academic</button>
                <button onClick={SecSelected("personal")}>Personal</button>
                <button onClick={SecSelected("professional")}>Professional</button>
            </div>
            <MyTrailNextSteps
                nextSteps={data?.[section]}
                app={app}
                uid={uid}
                sectionSelected={section}
            />
            <div className="completed-step-section">
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
        </div>
        </div>
    );
}

export default MyTasksCard;
