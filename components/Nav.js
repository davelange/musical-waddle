import Link from 'next/link'

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/about">Blog</Link></li>
            </ul>
        </nav>
    )
}

export default Nav