import ArticleListing from '../../components/ArticleListing'
import {getPosts} from '../../lib/api'

function articles({articles}) {
    return (
        <div className="container">
            
            <h1>All the articles</h1>
            
            <ArticleListing
                articles={articles} />

        </div>
    )

}

export function getStaticProps() {
    const articles = getPosts(100);
    return {
        props: {
            articles
        }
    }
}

export default articles

