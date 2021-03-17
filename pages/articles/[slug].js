import {getAllArticlePaths, getPost} from '../../lib/api'
import ReactMarkdown from 'react-markdown'
import css from '../../styles/Article.module.css'

function article({data, content}) {    

    const creationDate = () => {
        let d = new Date(data.date);
        return d.toLocaleDateString();
    }

    return (
        <div className="container">
            <h1 className={css.title}>{data.title}</h1>
            <p className={css.date}>{creationDate()}</p>
            <ReactMarkdown source={content} />
        </div>
    )
}

export function getStaticProps(context) {
    const {slug} = context.params;    
    const content = getPost(slug);    
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

