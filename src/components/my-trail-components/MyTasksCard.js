import { useState,  useEffect } from "react";
import MyTrailNextSteps from "../my-task-components/MyTrailNextSteps";
import { getFirestore, doc, getDoc} from "firebase/firestore";

function MyTasksCard({app, userInformation}) {
    const [data, setData] = useState();
    const uid = userInformation.uid;
    const [section, setSection] = useState("all");
    useEffect( () => {
        const fetchDoc = async () => {
            try{
                const db = getFirestore(app);
                const docRef = doc(db,"user-tasks",String(uid));
                const tasks = await getDoc(docRef);
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
                <button className="my-task-menus-buttons purple" onClick={SecSelected("all")}>All</button>
                <button className="my-task-menus-buttons green" onClick={SecSelected("finance")}>Finance</button>
                <button className="my-task-menus-buttons yellow" onClick={SecSelected("academic")}>Academic</button>
                {/* <button className="my-task-menus-buttons" onClick={SecSelected("personal")}>Personal</button> */}
                <button className="my-task-menus-buttons blue" onClick={SecSelected("career")}>Career</button>
                <button className="my-task-menus-buttons pink" onClick={SecSelected("highschool")}>High School</button>
                <button className="my-task-menus-buttons black" onClick={SecSelected("completed")}>Completed</button>
            </div>
            <MyTrailNextSteps
                nextSteps={data?.[section]}
                app={app}
                uid={uid}
                section={section}
            />
        </div>
    );
}

export default MyTasksCard;
