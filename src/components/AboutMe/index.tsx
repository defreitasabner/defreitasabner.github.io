import PresentationCard from './PresentationCard';
import styles from './SectionAboutMe.module.scss';

export default function AboutMe({ socialMedias }) {
    return (
        <section className={styles.sectionAboutMe} id="about-me-section">
            <PresentationCard socialMedias={socialMedias}/>
        </section>
    )
}