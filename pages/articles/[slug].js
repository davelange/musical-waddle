import {getAllArticlePaths, getPost} from '../../lib/api'
import ReactMarkdown from 'react-markdown'

function article({data, content}) {
    
    return (
        <div className="container">
            <h1>{data.title}</h1>
            <ReactMarkdown source={content} />
        </div>
    )
}

export async function getStaticProps(context) {

    const {slug} = context.params;
    
    const content = await getPost(slug);    

    return {
        props: content
    }

}

export function getStaticPaths() {
    
    const paths = getAllArticlePaths();
    
    return {
        paths,
        fallback: false
    }
}

export default article

