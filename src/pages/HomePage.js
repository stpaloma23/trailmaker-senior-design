import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import LargeArticleCard from "../components/article-components/LargeArticleCard";
import SmallArticleCard from "../components/article-components/SmallArticleCard";
import TrailTaskToComplete from "../components/my-task-components/TrailTaskToComplete";

function HomePage({app, userInformation, isLoggedIn}){
    const uid = userInformation.uid;
    const [data, setData] = useState([]);
    console.log("data",data);
    useEffect( () => {
        if (isLoggedIn) {
            const fetchDoc = async () => {
                try{
                    console.log("in the try block");
                    const db = getFirestore(app);
                    const docRef = doc(db,"user-tasks",String(uid));
                    const tasks = await getDoc(docRef);
                    console.log("firebase tasks", tasks.data());
                    setData(tasks.data());
                } catch (error) {
                    console.warn("error in task card ", error);
                }
            }
            fetchDoc();
            }
        }, [app, isLoggedIn,uid,setData]); 

    console.log("home page, logging data", data.all);
    return(
        <div className="container">
            <div className="welcome-to-trailmaker">
                <div className="home-page-articles">
                    <div className="home-page-top-article">
                        <LargeArticleCard />
                    </div>
                    <div className="home-page-bottom-article">
                        <SmallArticleCard/>
                        <SmallArticleCard/>
                        <SmallArticleCard/>
                    </div>
                </div>
                <div className="home-page-next-steps">
                    <h1> Next Steps</h1>
                    <div className="home-page-next-steps-display">
                        {isLoggedIn  && data.all && data.all.length &&
                            data.all.map((task, i) => (
                                <TrailTaskToComplete 
                                    key={i} 
                                    task={task} 
                                    app={app}
                                    uid={uid}
                                    displayDate={false}
                                />
                            ))
                        }
                        {
                            !isLoggedIn && <h3>Log In and create your trail to success! </h3>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;