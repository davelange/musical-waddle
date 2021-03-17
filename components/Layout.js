import Header from './Header'
import Nav from './Nav'

function Layout({children}) {
    return (
        <div>            
            <Header />
            <Nav />
            {children}
        </div>
    )
}

export default Layout