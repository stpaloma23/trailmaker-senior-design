
import financeData from "../../images/data-finance.js";
import careerData from "../../images/data-professional.js";
import highschoolData from "../../images/data-highschool.js";
import academicData from "../../images/data-academic.js";


import LargeArticleCard from "./LargeArticleCard";
import RightSmallArticleCard from "./RightSmallArticleCard";
import SmallArticleCard from "./SmallArticleCard";

function ArticleLayout({section}){

    console.log("article layout",section);
    
    let data;
    if (section === "finance") {
        data = financeData;
    }
    if (section === "career") {
        data = careerData;
    }
    if (section === "academic") {
        data = academicData;
    }
    if (section === "highschool") {
        data = highschoolData;
    }
    console.log(data)

    return (
        <div className="article-layout">
            <div className="top-articles-section">
                <div className="article-layout-left-article">
                    <LargeArticleCard
                        blurb={data[1].blurb}
                        date={data[1].publishedDate}
                        title={data[1].title}
                        imageAlt={data[1].image.alt}
                        imageSrc={data[1].image.url}
                        id={data[1].id}
                        nextSteps={data[1].nextSteps}
                    />
                </div>
                <div className="right-articles">
                    <div className="article-layout-right-article-card">
                        <RightSmallArticleCard
                            blurb={data[2].blurb}
                            date={data[2].publishedDate}
                            title={data[2].title}
                            imageAlt={data[2].image.alt}
                            imageSrc={data[2].image.url}
                            id={data[2].id}
                            nextSteps={data[2].nextSteps}
                        />
                    </div>
                    <div className="article-layout-right-article-card">
                        <RightSmallArticleCard
                            blurb={data[3].blurb}
                            date={data[3].publishedDate}
                            title={data[3].title}
                            imageAlt={data[3].image.alt}
                            imageSrc={data[3].image.url}
                            id={data[3].id}
                            nextSteps={data[3].nextSteps}
                        />
                    </div>
                </div>
            </div>
            <div className="bottom-article-section">
                <div className="article-layout-bottom-small-article">
                    <SmallArticleCard
                        blurb={data[4].blurb}
                        date={data[4].publishedDate}
                        title={data[4].title}
                        imageAlt={data[4].image.alt}
                        imageSrc={data[4].image.url}
                        id={data[4].id}
                        nextSteps={data[4].nextSteps}
                    />
                </div>
                <div className="article-layout-bottom-small-article">
                    <SmallArticleCard
                        blurb={data[5].blurb}
                        date={data[5].publishedDate}
                        title={data[5].title}
                        imageAlt={data[5].image.alt}
                        imageSrc={data[5].image.url}
                        id={data[5].id}
                        nextSteps={data[5].nextSteps}
                    />
                </div>
                <div className="article-layout-bottom-small-article">
                    <SmallArticleCard
                        blurb={data[0].blurb}
                        date={data[0].publishedDate}
                        title={data[0].title}
                        imageAlt={data[0].image.alt}
                        imageSrc={data[0].image.url}
                        id={data[0].id}
                        nextSteps={data[0].nextSteps}
                    />
                </div>
            </div>
        </div>
    )
}
export default ArticleLayout;