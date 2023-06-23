import styles from './PageFooter.module.scss';

export default function PageFooter() {
    return (
        <footer class={styles.footer}>
            <p class={styles.footer__copyright}>&copy; 2022 Abner Silveira de Freitas - Todos os direitos reservados</p>
        </footer>
    )
}