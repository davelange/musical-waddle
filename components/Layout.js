import Footer from './Footer'
import Nav from './Nav'

function Layout({children}) {
    return (
        <div className="app">         
            <div className="main">
                <Nav />            
                {children}
            </div>   
            <Footer />
        </div>
    )
}

export default Layout