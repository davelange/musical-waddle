import Link from 'next/link'
import css from '../styles/Nav.module.css'

function Nav() {
    return (
        <nav className="container">
            <ul className={css.navlist}>
                <li><Link href="/">it's a blog</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/articles">Articles</Link></li>
            </ul>
        </nav>
    )
}

export default Nav