import SocialMedias from '../SocialMedias';
import styles from './PresentationCard.module.scss';

export default function PresentationCard() {
    return (
        <div className={styles.presentationCard}>
            <img
                className={styles.presentationCard__picture}
                src="https://github.com/defreitasabner.png" 
                alt="Abner Freitas"
            />
            <div className={styles.info}>
                <p>Olá, eu sou</p>
                <h3 className={styles.info__name}>Abner Freitas</h3>
                <span className={styles.info__role}>Desenvolvedor FullStack</span>
            </div>
        </div>
    )
}