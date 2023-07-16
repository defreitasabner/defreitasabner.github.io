import styles from './SectionMyAbilities.module.scss';

import myAbilitiesData from '../../data/myAbilities.json';
import AbilityCard from './AbilityCard';
import SectionTitle from '../SectionTitle';


export default function MyAbilities({ abilities }) {

    return (
        <section className={styles.myAbilities} id="my-abilities-section">
            <SectionTitle title="Minhas Habilidades" />
            <div className={styles.myAbilities__cards}>
                {
                    abilities.map(
                        (abilities, index) => <AbilityCard  key={index} {...abilities} />
                    )
                }
            </div>
        </section>
    )
}