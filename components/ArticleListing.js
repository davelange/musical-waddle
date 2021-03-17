import ArticleCard from "./ArticleCard"

function ArticleListing({articles}) {

    return (
        <div>            
            { articles.map( (article, i) => 
                <ArticleCard 
                    article={article} 
                    key={i} /> )}
        </div>
    )
}

export default ArticleListing