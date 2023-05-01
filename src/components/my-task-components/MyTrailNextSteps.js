import { useState } from "react";
import TrailTaskToComplete from "./TrailTaskToComplete";

function MyTrailNextSteps({nextSteps, app,uid,section}){
    const [inOpen, setIncompleteOpen] = useState(true);
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
                    {nextSteps?.map((step, i) => (
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