
import Data from "../../images/data.js";


import LargeArticleCard from "./LargeArticleCard";
import RightSmallArticleCard from "./RightSmallArticleCard";
import SmallArticleCard from "./SmallArticleCard";

function ArticleLayout(){

    return (
        <div className="article-layout">
            <div className="top-articles-section">
                <LargeArticleCard
                    blurb={Data[1].blurb}
                    date={Data[1].publishedDate}
                    title={Data[1].title}
                    imageAlt={Data[1].image.alt}
                    imageSrc={Data[1].image.url}
                    id={Data[1].id}
                />
                <div className="right-articles">
                    <RightSmallArticleCard
                        blurb={Data[2].blurb}
                        date={Data[2].publishedDate}
                        title={Data[2].title}
                        imageAlt={Data[2].image.alt}
                        imageSrc={Data[2].image.url}
                        id={Data[2].id}
                    />
                    <RightSmallArticleCard
                        blurb={Data[3].blurb}
                        date={Data[3].publishedDate}
                        title={Data[3].title}
                        imageAlt={Data[3].image.alt}
                        imageSrc={Data[3].image.url}
                        id={Data[3].id}
                    />
                </div>
            </div>
            <div className="bottom-article-section">
                <SmallArticleCard
                    blurb={Data[3].blurb}
                    date={Data[3].publishedDate}
                    title={Data[3].title}
                    imageAlt={Data[3].image.alt}
                    imageSrc={Data[3].image.url}
                    id={Data[3].id}
                />
                <SmallArticleCard
                    blurb={Data[3].blurb}
                    date={Data[3].publishedDate}
                    title={Data[3].title}
                    imageAlt={Data[3].image.alt}
                    imageSrc={Data[3].image.url}
                    id={Data[3].id}
                />
                <SmallArticleCard
                    blurb={Data[3].blurb}
                    date={Data[3].publishedDate}
                    title={Data[3].title}
                    imageAlt={Data[3].image.alt}
                    imageSrc={Data[3].image.url}
                    id={Data[3].id}
                />
            </div>
        </div>
    )
}
export default ArticleLayout;