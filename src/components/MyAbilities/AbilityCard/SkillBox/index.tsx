import styles from './SkillBox.module.scss';

export default function SkillBox({ skill }) {
    return (
        <div className={styles.skillBox}>
            <span>{skill}</span>
        </div>
    )
}