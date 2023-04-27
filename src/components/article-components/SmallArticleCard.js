import { useNavigate } from "react-router-dom";

function SmallArticleCard({blurb, date, title, imageAlt, imageSrc, id, nextSteps}) {
    const navigate = useNavigate();
    // var firstHalf = "/article/";
    // var secondHalf = toString(id);
    // let address = firstHalf.concat(secondHalf);

    const navigateToArticle = () => {
        navigate(`/article/${id}`);
    };
    return (
        <div className="bottom-section-article article-card" onClick={navigateToArticle}>
            <div className="small-article-image">
                <img src={imageSrc} alt={imageAlt} />
            </div>
            <h1 className="article-title">{title}</h1>
            <p>{blurb}</p>
        </div>
    )
}
export default SmallArticleCard;