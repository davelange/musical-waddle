import ReactMarkdown from 'react-markdown'
import {getPage} from '../lib/api'

export default function about({data, content}) {       
    return (
        <div className="container">
            <h1>{data.title}</h1>
            <ReactMarkdown source={content} />
        </div>
    )
}

export function getStaticProps() {           
    const content = getPage('about');
    return {
        props: content
    }
}  