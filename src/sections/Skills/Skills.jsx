import styles from "./SkillsStyles.module.css";
import Html from '../../assets/Html.webp'
import Css from '../../assets/css.webp'
import Bootstrap from '../../assets/Bootstrap.png'
import Tailwind from '../../assets/tailwind.png'
import MaterialUi from '../../assets/materialui.png'
import React from '../../assets/react.png'
import Redux from '../../assets/redux.svg'
import Javascript from '../../assets/javascriptlogo.webp'
import NodeJs from '../../assets/nodejs.webp'
import Express from '../../assets/express js.png'
import Mongodb from '../../assets/mongodb.svg' 
import Github from '../../assets/github.png'
import SkillList from "../../common/SkillList";


const Skills = () => {
    return (
        <>
            <section id="skills" className={styles.container}>
                <h1>
                    <b>Skills</b>
                </h1>
                <div className={styles.skillList}>
                 <SkillList src={React} skill='React Js'/>
                 <SkillList src={Redux} skill='Redux Toolkit'/>

                 <SkillList src={Javascript} skill='Javascript'/>

                 <SkillList src={NodeJs} skill='Node Js'/>
                 <SkillList src={Express} skill='Express Js'/>
                  </div>
                  <hr />
                  <div className={styles.skillList}>
                 <SkillList src={Html} skill='Html'/>
                 <SkillList src={Css} skill='Css'/>

                 <SkillList src={Bootstrap} skill='Bootstrap'/>
                 <SkillList src={Tailwind} skill='Tailwind Css'/>
                 <SkillList src={MaterialUi} skill='Material Ui'/>

                  </div>
                  <hr />
                  <div className={styles.skillList}>
                 <SkillList src={Mongodb} skill='Mongo Db'/>
                 <SkillList src={Github} skill='Github'/>

                 

                  </div>
            </section>
        </>
    );
};

export default Skills;
