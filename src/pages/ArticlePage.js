import React, {useMemo} from "react";
import { useParams } from "react-router";
import ArticleNextSteps from "../components/article-components/ArticleNextSteps";
import Data from "../images/data";
import financeData from "../images/data-finance.js";
import careerData from "../images/data-professional.js";
import academicData from "../images/data-academic";
import highschoolData from "../images/data-highschool";
import welcomePic from "../images/welcome.png";
import palomaPic from "../images/paloma.png";

function ArticlePage({app, userInformation, isLoggedIn}){
    const { id } = useParams(); // hook 
    console.log(id);
    const sectionSplit = id.split("-");
    let data; 
    if (sectionSplit[0] === "finance") {
        data = financeData
    }
    if (sectionSplit[0] === "career") {
        data = careerData
    }
    if (sectionSplit[0] === "highschool") {
        data = highschoolData
    }
    if (sectionSplit[0] === "academic") {
        data = academicData
    }
    if (sectionSplit[0] === "article") {
        data = Data;
    }
    
    // console.log("article page",isLoggedIn);
    console.log("article page section split value",sectionSplit[0]);

    const articleData = data.find((article) => (
        article.id === id // finding where the article id in the list is equal to the article id of the specific article
    ))
    // console.log(articleData)

    // using usememo from react library 
    const date = useMemo(() => {
        if(!articleData) return " ";
        const parsedDate = new Date(articleData.publishedDate);
        return parsedDate.toDateString();
    }, [articleData]);

    let headerPhoto;
    if (id === "article-one") {
        headerPhoto = welcomePic;
    } else if  (id === "article-one") {
        headerPhoto = palomaPic;
    } else {
        headerPhoto = articleData.image.url;
    }
    // <p className="article-blurb">{articleData.blurb}</p>

    return (
        <main className="article-page-wrapper">
            <header 
                className="article-header" 
                style={{
                    backgroundImage: `url(${headerPhoto})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
            >
            </header>
            <div className="article-page-header-text">
                    <h1>{articleData.title}</h1>
                    <h2 className="article-date">{date}</h2>
            </div>
            <section className="article-contents">
                <div className="article-contents-wrapper">
                    {
                        articleData.articleText.map((text, i) => {
                            const type = text.type;
                            switch (type) {
                                case "h1":
                                    return <h1 key={i}>{text.data}</h1>;
                                case "h2":
                                    return <h2 key={i}>{text.data}</h2>; 
                                case "h3":
                                    return <h3 key={i}>{text.data}</h3>;     
                                case "h4":
                                    return <h4 key={i}>{text.data}</h4>;   
                                case "ul":
                                    return <li key={i}>{text.data}</li>;  
                                default:
                                    return <p key={i}>{text.data}</p>;
                            };
                        })
                    }
                </div>
                <ArticleNextSteps 
                    nextSteps={articleData.nextSteps}
                    section={articleData.section}
                    app={app}
                    userInformation={userInformation}
                    isLoggedIn={isLoggedIn}
                />
            </section>
        </main>
    );
}
export default ArticlePage;