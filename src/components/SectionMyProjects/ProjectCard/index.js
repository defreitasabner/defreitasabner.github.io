import styles from './ProjectCard.module.scss';

export default function ProjectCard({ title, description, url, status }) {
    return (
        <div className={styles.projectCard}>
            <div className={styles.header}>
                <h3 className={styles.header__title}>{title}</h3>
                <p className={styles.header__description}>{description}</p>
            </div>
            <div className={styles.repoInfo}>
                <div className={styles.repoInfo__status}>
                    <p className={styles.repoInfo__status__label}>Status:</p>
                    <p className={styles.repoInfo__status__text}>{status}</p>
                </div>
                <a
                    className={styles.repoInfo__link}
                    href={url} 
                    target="_blank"
                >Saiba mais...</a>
            </div>
        </div>
    )
}