
import LargeArticleCard from "./LargeArticleCard";
import RightSmallArticleCard from "./RightSmallArticleCard";
import SmallArticleCard from "./SmallArticleCard";
function ArticleLayout(){

    return (
        <div className="article-layout">
            <div className="top-articles-section">
                <LargeArticleCard/>
                <div className="right-articles">
                    <RightSmallArticleCard/>
                    <RightSmallArticleCard/>
                </div>
            </div>
            <div className="bottom-article-section">
                <SmallArticleCard/>
                <SmallArticleCard/>
                <SmallArticleCard/>
            </div>
        </div>
    )
}
export default ArticleLayout;