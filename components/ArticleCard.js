import Link from 'next/link'

function ArticleCard({article}) {
    return (
        <Link href={`/articles/${article.data.slug}`}>
            <a>
                <h2>{article.data.title}</h2>
            </a>
        </Link>
    )
}

export default ArticleCard