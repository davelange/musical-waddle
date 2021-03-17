import Link from 'next/link'
import css from '../styles/Card.module.css'

function ArticleCard({article}) {
    return (
        <Link href={`/articles/${article.data.slug}`}>
            <a className={css.link}>
                <span className={css.deco}>‟</span>
                <h2>{article.data.title}</h2>                
                <p>{article.data.excerpt}</p>
            </a>
        </Link>
    )
}

export default ArticleCard