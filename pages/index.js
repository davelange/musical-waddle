import {getPosts} from '../lib/api'
import ArticleListing from '../components/ArticleListing'   
import Hero from '../components/Hero';

function Home({articles}) {
    
    return (
        <div className="container">                                 

            <Hero />

            <ArticleListing 
                articles={articles} />
        </div>
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