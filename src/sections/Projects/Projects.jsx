import styles from "./ProjectStyles.module.css";
import movieTicket from "../../assets/movie-ticket.avif";
import blogImg from "../../assets/blog.png";
import eCommerce from "../../assets/eCommerce.jpg";
import ProjectCard from "../../common/ProjectCard";
import { FaGithub } from "react-icons/fa";


const Projects = () => {
    return (
        <>
            <section id="projects" className={styles.container}>
                <h1 className="sectionTitle"><b>Projects</b></h1>
                <div className={styles.projectsContainer}>
                    <ProjectCard
                        src={movieTicket}
                        link={"https://movie-booking-app-767p.onrender.com/"}
                        h3="Movie"
                        p="Booking App"
                        link1={"https://github.com/jofimoljohnson/Mern-Movie-Booking"}
                        h5={<FaGithub/>}
                        
                       
                    />
                    <ProjectCard
                        src={blogImg}
                        link={"https://blogeat.onrender.com/"}
                        h3="bloGeAt"
                        p="Blog App"
                        link1={"https://github.com/jofimoljohnson/MERN-BLOG"}
                        h5={<FaGithub/>}
                    />
                    <ProjectCard
                        src={eCommerce}
                        link={"https://silver-cocada-d92d26.netlify.app/"}
                        h3="Interio"
                        p="E-commerce "
                        link1={"https://github.com/jofimoljohnson/React-Ecommerce"}
                        h5={<FaGithub/>}
                    />
                </div>
            </section>
        </>
    );
};

export default Projects;
