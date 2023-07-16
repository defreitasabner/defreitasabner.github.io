import styles from './PresentationCard.module.scss';
import SocialMedias from './SocialMedias';

export default function PresentationCard({ socialMedias }) {
    return (
        <div className={styles.presentationCard}>
            <SocialMedias socialMedias={socialMedias}/>
            <img
                className={styles.presentationCard__picture}
                src="https://github.com/defreitasabner.png" 
                alt="Abner Freitas"
            />
            <div className={styles.info}>
                <p>Olá, eu sou</p>
                <h3 className={styles.info__name}>Abner Freitas</h3>
                <span className={styles.info__role}>Desenvolvedor FullStack</span>
                <p className={styles.info__description}>Experiência em desenvolvimento de software <span>desktop</span>, <span>web</span> e <span>mobile</span></p>
            </div>
        </div>
    )
}