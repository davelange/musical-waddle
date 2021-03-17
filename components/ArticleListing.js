import ArticleCard from "./ArticleCard"

function ArticleListing({articles}) {

    return (
        <div>
            <h3>Our latest articles</h3>
            { articles.map( (article, i) => 
                <ArticleCard 
                    article={article} 
                    key={i} /> )}
        </div>
    )
}

export default ArticleListing