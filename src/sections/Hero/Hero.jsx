import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/MyImg.jpeg";
import sun from "../../assets/lightMode.png";

import moon from "../../assets/dark-mode.png";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

import CV from "../../assets/CV.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === "light" ? sun : moon;
    const twitterIcon = theme === "light" ? twitterLight : twitterDark;
    const githubIcon = theme === "light" ? githubLight : githubDark;

    const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;


    return (
        <>
            <section id="hero" className={styles.container}>
                <div className={styles.colorModeContainer}>
                    <img src={heroImg} alt="heroImg" className={styles.hero}/>

                    <img src={themeIcon} alt="sunIcon" className={styles.colorMode} onClick={toggleTheme} />
                </div>

                <div className={styles.info}>
                    <p className="heading"><b>Hi there,I'm</b></p>
                    <h1>
                      <b>  JOFIMOL</b>
                        <br />
                       <b> JOHNSON</b>
                    </h1>
                    <h2>MERN STACK DEVELOPER</h2>
                    <span>
                        <a href="https://x.com/jofimolj89465?t=_K553QUSALYDVrEw5ICEGQ&s=08" target="blank">
                            <img src={twitterIcon} alt="twitterIcon" />
                        </a>
                        <a href="https://github.com/jofimoljohnson" target="blank">
                        <img src={githubIcon} alt="githubIcon" />
                        </a>
                        <a href="https://www.linkedin.com/in/jofijo96/" target="blank">
                        <img src={linkedinIcon} alt="" />
                        </a>
                    </span>
                    <p className={styles.description}>With a passion for developing modern web apps for commercial business.</p>
                    <a href={CV} download>
                        <button className="hover">Resume</button>
                    </a>
                </div>
            </section>
        </>
    );
};

export default Hero;
