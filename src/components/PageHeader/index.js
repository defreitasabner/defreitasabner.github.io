import NavigationMenu from './NavigationMenu';
import styles from './PageHeader.module.scss';

export default function PageHeader() {
    return (
        <header className={styles.header}>
            <div>
                <h1>Abner Freitas - Portfolio</h1>
                <div data-menu-button>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
            <NavigationMenu />
        </header>
    )
}