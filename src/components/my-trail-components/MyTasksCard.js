import { useState } from "react";

function MyTasksCard() {
    const [inOpen, setIncompleteOpen] = useState(false);
    const [comOpen, setCompleteOpen] = useState(false);
    const incompleteToggle = () => {
        setIncompleteOpen(!inOpen);
    };
    const completeToggle = () => {
        setCompleteOpen(!comOpen);
    };
    return (
        <div className="my-trail-card">
            <h1>My Tasks</h1>
            <div className="task-filers">
                <h4>All</h4>
                <h4>Finance</h4>
                <h4>Academic</h4>
                <h4>Personal</h4>
                <h4>Professional</h4>
            </div>
            <div className="next-step-section">
                <button type="button" className="collapse" onClick={incompleteToggle}>
                Next Steps
                </button>
                {inOpen && (
                <div className="content">
                    <div className="task-to-complete">

                        <p>get game dev done</p>
                        <p>3/23/2023</p>
                        <p className="type-of-task">Finance</p>
                    </div>
                    <div className="task-to-complete">
                        <p>get this layout completed</p>
                    </div>
                </div>
                )}
            </div>
            <div className="completed-step-section">
                <button type="button" className="collapse" onClick={completeToggle}>
                Completed Steps
                </button>
                {comOpen && (
                <div className="content">
                    <div className="task-to-complete">
                        <p>get game dev done</p>
                    </div>
                    <div className="task-to-complete">
                        <p>get this layout completed</p>
                    </div>
                </div>
                )}
        </div>
        </div>
    );
}

export default MyTasksCard;
