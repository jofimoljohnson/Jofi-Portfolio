import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";


const Skills = () => {
    const {theme}=useTheme()
    const checkIcon=theme==='light'?checkMarkIconLight:checkMarkIconDark
    return (
        <>
            <section id="skills" className={styles.container}>
                <h1>
                    <b>Skills</b>
                </h1>
                <div className={styles.skillList}>
                 <SkillList src={checkIcon} skill='React Js'/>
                 <SkillList src={checkIcon} skill='Redux Toolkit'/>

                 <SkillList src={checkIcon} skill='Javascript'/>

                 <SkillList src={checkIcon} skill='Node Js'/>
                 <SkillList src={checkIcon} skill='Express Js'/>
                  </div>
                  <hr />
                  <div className={styles.skillList}>
                 <SkillList src={checkIcon} skill='Html'/>
                 <SkillList src={checkIcon} skill='Css'/>

                 <SkillList src={checkIcon} skill='Bootstrap'/>
                 <SkillList src={checkIcon} skill='Tailwind Css'/>
                 <SkillList src={checkIcon} skill='Material Ui'/>

                  </div>
                  <hr />
                  <div className={styles.skillList}>
                 <SkillList src={checkIcon} skill='Mongo Db'/>
                 <SkillList src={checkIcon} skill='Github'/>

                 

                  </div>
            </section>
        </>
    );
};

export default Skills;
