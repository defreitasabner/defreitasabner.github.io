import styles from './SectionMyAbilities.module.scss';

import myAbilitiesData from '../../data/myAbilities.json';
import AbilityCard from './AbilityCard';


export default function SectionMyAbilities() {

    const myAbilities = myAbilitiesData;

    return (
        <section className={styles.myAbilities}>
            <h2 className={styles.myAbilities__title} id="my-abilities-section">Minhas Habilidades Técnicas</h2>
            <div className={styles.myAbilities__cards}>
                {
                    myAbilities.map(
                        (abilities, index) => <AbilityCard  key={index} {...abilities} />
                    )
                }
            </div>
        </section>
    )
}