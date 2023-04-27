import ThoughtsCard from "../ThoughtsCard";
import plus from "../../images/plus-icon.png"

function MyThoughtsCard() {
    return (
        <div className="my-trail-card">
            <h1>My Thoughts</h1>
            <div className="thoughts-container">
                <div className="make-a-new-thought">
                    <img src={plus} alt="plus sign"/>
                </div>
                <ThoughtsCard/>
                <ThoughtsCard/>
                <ThoughtsCard/>
            </div>
        </div>
    )
}
export default MyThoughtsCard;