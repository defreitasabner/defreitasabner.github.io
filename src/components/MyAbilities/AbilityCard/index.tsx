import styles from './AbilityCard.module.scss';
import SkillBox from './SkillBox';
import TechnologyFigure from './TechnologyFigure';

export default function AbilityCard({ title, description, technologies, skills, level }: IAbility) {
    return (
        <div className={styles.abilityCard}>
            <h3 className={styles.abilityCard__title}>{title}</h3>
            <p className={styles.abilityCard__description}>{description}</p>
            <div className={styles.skills}>
                <div className={styles.skills__list}>
                    {skills.map(
                        (skill, index) => <SkillBox key={index} skill={skill} />
                    )}
                </div>
            </div>
            <div className={styles.technologies}>
                <div className={styles.technologies__list}>
                    {technologies.map(
                        (technology, index) => <TechnologyFigure key={index} {...technology} />
                    )}
                </div>
            </div>
        </div>
    );
}