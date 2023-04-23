import { useNavigate } from "react-router-dom";

function LargeArticleCard({blurb, date, title, imageAlt, imageSrc, id}) {
    const navigate = useNavigate();
    // var firstHalf = "/article/";
    // var secondHalf = toString(id);
    // let address = firstHalf.concat(secondHalf);

    const navigateToArticle = () => {
        navigate(`/article/${id}`);
    };
    return (
        <div className="left-article" onClick={navigateToArticle}>
            <div className="large-image-article">

            </div>
            <h1 className="article-title">Lorem Ipsum Dolorum</h1>
        </div>
    )
}
export default LargeArticleCard;