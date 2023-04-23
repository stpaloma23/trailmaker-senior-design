import { useNavigate } from "react-router-dom";

function SmallArticleCard({blurb, date, title, imageAlt, imageSrc, id}) {
    const navigate = useNavigate();
    // var firstHalf = "/article/";
    // var secondHalf = toString(id);
    // let address = firstHalf.concat(secondHalf);

    const navigateToArticle = () => {
        navigate(`/article/${id}`);
    };
    return (
        <div className="bottom-section-article" onClick={navigateToArticle}>
            <div className="small-article-image">

            </div>
            <h1>Lorem Ipsum Dolorum</h1>
        </div>
    )
}
export default SmallArticleCard;