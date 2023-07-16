import styles from './SectionMyProjects.module.scss';
import ProjectCard from './ProjectCard';
import SectionTitle from '../SectionTitle';

export default function MyProjects({ projects }) {
    return (
        <section className={styles.myProjects} id="my-projects-section">
            <SectionTitle title="Meus Projetos" />
            <div className={styles.myProjects__cards}>
                {
                    projects.map(
                        (project, index) => <ProjectCard {...project} key={index} />
                    )
                }
            </div>
        </section>
    )
}