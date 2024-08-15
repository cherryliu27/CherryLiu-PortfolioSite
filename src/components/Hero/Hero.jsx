import './Hero.css'

export default function Hero(){
    return(
        <div className="hero-container">
        <div className="hero container-70">
            <div className="hero-text">
                <h1><div className="intro-greet">Hello  👋</div>
                <div className="intro-name">I'm Cherry</div></h1>
                <div className="intro-role">
                <p className="role">Web Developer</p>
                <img className="line-deco" src="/img/line-deco.png" alt="decorative-line" />
                </div>

                <div className="hero-desc">
                    <p>Based in Toronto, Canada</p>
                    <p>I am an incoming graduate student at Humber  College, specializing in Web Development. I am driven by a passion for creating impactful digital! </p>
                </div>
                <div className="hero-connect">
                    <div className="btn-hire"><a href="#contact"><strong>Hire Me</strong></a></div>
                    <div className="btn-cv"><a href=""><strong>My CV</strong></a></div>
                </div>
            </div>
            <div className="hero-image">
                <div className="hero-img-container">
                <img className="hero-img" src="/img/hero-image.png" alt="me" />
                </div>
            </div>
        </div>
        </div>
    )
};