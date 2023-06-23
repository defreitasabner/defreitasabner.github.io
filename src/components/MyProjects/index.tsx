import styles from './SectionMyProjects.module.scss';
import ProjectCard from './ProjectCard';

import myProjectsData from '../../data/myProjects.json';
import SectionTitle from '../SectionTitle';

export default function MyProjects() {
    return (
        <section className={styles.myProjects} id="my-projects-section">
            <SectionTitle title="Meus Projetos" />
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