import NavigationMenu from './NavigationMenu';
import styles from './PageHeader.module.scss';

export default function PageHeader() {
    return (
        <header className={styles.header}>
            <h1>Abner Freitas - Portfolio</h1>
            <NavigationMenu />
        </header>
    )
}