import styles from './PageFooter.module.scss';

export default function PageFooter() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer__copyright}>&copy; 2022 Abner Silveira de Freitas - Todos os direitos reservados</p>
        </footer>
    )
}