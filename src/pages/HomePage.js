import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import LargeArticleCard from "../components/article-components/LargeArticleCard";
import TrailTaskToComplete from "../components/my-task-components/TrailTaskToComplete";
import welcomeData from "../images/data";
import welcomePic from "../images/welcome.png";
import palomaPic from "../images/paloma.png";
import RightSmallArticleCard from "../components/article-components/RightSmallArticleCard";

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
                        <LargeArticleCard 
                            blurb={welcomeData[0].blurb} 
                            date={welcomeData[0].publishedDate} 
                            title={welcomeData[0].title} 
                            imageAlt={welcomeData[0].image.alt}
                            imageSrc={welcomePic}
                            id={welcomeData[0].id}
                            nextSteps={welcomeData[0].nextSteps}
                        />
                    </div>
                    <div className="home-page-bottom-article">
                        <div className="home-page-bottom-article-cards">
                            <RightSmallArticleCard
                                blurb={welcomeData[1].blurb} 
                                date={welcomeData[1].publishedDate} 
                                title={welcomeData[1].title} 
                                imageAlt={welcomeData[1].image.alt}
                                imageSrc={palomaPic}
                                id={welcomeData[1].id}
                                nextSteps={welcomeData[1].nextSteps}
                            />
                        </div>
                        <div className="home-page-bottom-article-cards">
                            <RightSmallArticleCard
                                blurb={welcomeData[2].blurb} 
                                date={welcomeData[2].publishedDate} 
                                title={welcomeData[2].title} 
                                imageAlt={welcomeData[2].image.alt}
                                imageSrc={welcomeData[2].image.url}
                                id={welcomeData[2].id}
                                nextSteps={welcomeData[2].nextSteps}
                            />
                        </div>
                        
                        
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