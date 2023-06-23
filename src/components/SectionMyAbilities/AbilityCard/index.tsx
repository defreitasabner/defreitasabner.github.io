import styles from './AbilityCard.module.scss';
import ProgressBar from './ProgressBar';

export default function AbilityCard({ title, description, technologies, level }: IAbility) {
    return (
        <div className={styles.abilityCard}>
            <h3 className={styles.abilityCard__title}>{title}</h3>
            <p className={styles.abilityCard__description}>{description}</p>
            <div className={styles.list}>
                <p className={styles.list__title}>Tecnologias utilizadas:</p>
                <ul>
                    {technologies.map(
                        (technology, index) => <li key={index}>{technology}</li>
                    )}
                </ul>
            </div>
            <ProgressBar level={level} />
        </div>
    );
}