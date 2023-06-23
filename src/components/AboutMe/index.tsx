import PresentationCard from './PresentationCard';
import styles from './SectionAboutMe.module.scss';

export default function AboutMe() {
    return (
        <section className={styles.sectionAboutMe} id="about-me-section">
            <PresentationCard />
        </section>
    )
}