import styles from './SectionAboutMe.module.scss';
import SocialMedias from './SocialMedias';

export default function SectionAboutMe() {
    return (
        <section className={styles.sectionAboutMe} id="about-me-section">
            <div className={styles.sectionAboutMe__container}>
                <img
                    className={styles.sectionAboutMe__container__picture}
                    src="https://github.com/defreitasabner.png" 
                    alt="Abner Freitas"
                />
                <h3 className={styles.sectionAboutMe__container__name}>Abner Freitas</h3>
                <span className={styles.sectionAboutMe__container__role} >Desenvolvedor FullStack</span>
                <SocialMedias />
                <p className={styles.sectionAboutMe__container__text}>Programador e biólogo. Fiz minha primeira graduação em Biologia (2013-2017) na Universidade Federal do Rio de Janeiro (UFRJ), onde também fiz mestrado na mesma área (2017-2019). Atualmente, estou em transição de carreira para área de tecnologia. Comecei a estudar programação através de cursos online (Alura) durante a pandemia de 2020, a princípio para automatizar processos repetitivos e para analisar dados, mas acabei descobrindo minha paixão pela área de tecnologia. Em Agosto de 2022, ingressei no Bacharelado em Tecnologia da Informação na Universidade Virtual do Estado de São Paulo (UNIVESP), sigo fazendo cursos online e executando pequenos projetos pessoais. Das diversas áreas da teconologia, a que mais estudo e que tenho mais experiência desenvolvendo projetos pessoais, é desenvolvimento web fullstack (Front-End e Back-End), incluindo um pouco de desenvolvimento mobile. Também tenho grande interesse em Data Science, Machine Learning e Deep Learning, e tento sempre me manter estudando o assunto e executando pequenos projetos na área. Por último, gosto muito de cultura maker e robótica, por conta disso, ingressei na equipe de robótica da UFRJ  (MinervaBots) no início de 2022, além de executar pequenos projetos pessoais com sistemas embarcados como hobbie.</p>
            </div>
        </section>
    )
}