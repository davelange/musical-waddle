import data from '../_data/footer.json'
import css from '../styles/Footer.module.css'

function Footer() {
    return (
        <footer className={`container ${css.footer}`}>
            {data.text}
        </footer>
    )
}

export default Footer