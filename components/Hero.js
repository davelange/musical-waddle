import css from '../styles/Home.module.css'

function Hero() {
    return (
        <div className={css.hero}>
            <div className={css.hero_half}>
                <h1>it's a<br /> blog</h1>
            </div>
            <figure className={css.hero_half}>
                <img src="/media/square.png" alt="A picture in a blog" />
            </figure>                
        </div>   
    )
}

export default Hero