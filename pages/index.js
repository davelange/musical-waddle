import ArticleListing from '../components/ArticleListing'
import {getPosts} from '../lib/api'

function Home({articles}) {
    
    return (
        <>
            <h1>Musical waddle</h1>

            <ArticleListing 
                articles={articles} />
        </>
    )
}

export function getStaticProps() {
    
    const articles = getPosts(6);

    return {
        props: {
            articles
        }
    } 
}

export default Home