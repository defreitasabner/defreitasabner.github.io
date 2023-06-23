import styles from './NavigationMenu.module.scss';

export default function NavigationMenu() {
    return(
        <nav className={styles.navigation} data-navigation-menu>
            <a href="#about-me-section">Sobre mim</a>
            <a href="#my-abilities-section">Minhas Habilidades</a>
            <a href="#my-projects-section">Meus Projetos</a>
        </nav>
    )
}