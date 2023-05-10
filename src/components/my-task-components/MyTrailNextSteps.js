import { useState, useEffect } from "react";
import TrailTaskToComplete from "./TrailTaskToComplete";

function MyTrailNextSteps({nextSteps, app,uid,section}){
    const [inOpen, setIncompleteOpen] = useState(true);
    const [steps, setSteps] = useState(nextSteps);
    useEffect(() => {
        // Update the steps state variable whenever there is a change in the nextSteps array
        setSteps(nextSteps);
    }, [nextSteps]);
    const incompleteToggle = () => {
        setIncompleteOpen(!inOpen);
    };
    console.log("next steps", nextSteps)
    return(
        <div className="next-step-section">
            <button type="button" className="collapse" onClick={incompleteToggle}>
            Next Steps
            </button>
            {inOpen && (
                <div className="content">
                    {steps?.map((step, i) => (
                        <TrailTaskToComplete 
                            key={i} 
                            task={step}
                            app={app}
                            uid={uid}
                            section={section}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
export default MyTrailNextSteps