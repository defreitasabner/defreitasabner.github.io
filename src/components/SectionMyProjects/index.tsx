import styles from './SectionMyProjects.module.scss';
import ProjectCard from './ProjectCard';

import myProjectsData from '../../data/myProjects.json';

export default function SectionMyProjects() {
    return (
        <section className={styles.myProjects} id="my-projects-section">
            <h2 className={styles.myProjects__title}>Meus Projetos</h2>
            <div className={styles.myProjects__cards}>
                {
                    myProjectsData.map(
                        (project, index) => <ProjectCard {...project} key={index} />
                    )
                }
            </div>
        </section>
    )
}