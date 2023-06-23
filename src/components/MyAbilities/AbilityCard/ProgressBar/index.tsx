import styles from './ProgressBar.module.scss';

export default function ProgressBar({ level }) {
    
    const levels = {
        'iniciante': 1,
        'iniciante-intermediário': 2,
        'intermediário': 3,
        'intermediário-avançado': 4,
        'avançado': 5
    }

    const progressBar = new Array(Object.keys(levels).length)

    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressBar}>
                {
                    progressBar.map(
                        (_, index) => {
                            if(index <= levels[level]) {
                                return <div className={styles.progressBar__enable}></div>
                            } else {
                                return <div className={styles.progressBar__disable}></div>
                            }
                        }
                    )
                }
            </div>
            <p className={styles.progressBar__label}>{level}</p>
        </div>
    )
}