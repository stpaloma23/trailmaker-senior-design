import { useState } from "react";
import TaskToComplete from "./TaskToComplete";

function ArticleNextSteps({nextSteps, section, app, userInformation, isLoggedIn}){
    const [inOpen, setIncompleteOpen] = useState(false);
    const incompleteToggle = () => {
        setIncompleteOpen(!inOpen);
    };
    return(
        <div className="next-step-section">
            <button type="button" className="collapse" onClick={incompleteToggle}>
            Next Steps
            </button>
            {inOpen && (
                <div className="content">
                    {nextSteps.map((step, i) => (
                        <TaskToComplete 
                            key={i} 
                            step={step} 
                            section={section}
                            app={app}
                            userInformation={userInformation}
                            isLoggedIn={isLoggedIn}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
export default ArticleNextSteps;