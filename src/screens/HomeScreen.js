import SectionAboutMe from "../components/SectionAboutMe";
import SectionMyAbilities from "../components/SectionMyAbilities";

export default function HomeScreen() {
    return (
        <main className="main__container">
            <SectionAboutMe />
            <SectionMyAbilities />
            <section className="my-projects__container" id="my-projects-section">
                <h2 className="my-projects__title">Meus Projetos</h2>
                <div className="my-projects__cards">
                    <div className="project-card__container">
                        <div className="project-card__infos">
                            <h3 className="project-card__title">MolEasy</h3>
                            <p className="project-card__text">Software para converter e manejar arquivos para análises de DNA.</p>
                        </div>
                        <div className="project-card__repo-infos">
                            <div className="status__container">
                                <p className="status__label">Status:</p>
                                <p className="status__text status__text--construcao">Construção</p>
                            </div>
                            <a
                                href="https://github.com/defreitasabner/my_molecular_stuffs" 
                                className="project-card__link"
                                target="_blank"
                            >Saiba mais...</a>
                        </div>
                    </div>
                    <div className="project-card__container">
                        <div className="project-card__infos">
                            <h3 className="project-card__title">My Game</h3>
                            <p className="project-card__text">Jogo simples que estou desenvolvendo para praticar programação.</p>
                        </div>
                        <div className="project-card__repo-infos">
                            <div className="status__container">
                                <p className="status__label">Status:</p>
                                <p className="status__text status__text--construcao">Construção</p>
                            </div>
                            <a
                                href="https://github.com/defreitasabner/my-game" 
                                className="project-card__link"
                                target="_blank"
                            >Saiba mais...</a>
                        </div>
                    </div>
                    <div className="project-card__container">
                        <div className="project-card__infos">
                            <h3 className="project-card__title">Detector de faces</h3>
                            <p className="project-card__text">Software detector de face desenvolvido de maneira bem simples.</p>
                        </div>
                        <div className="project-card__repo-infos">
                            <div className="status__container">
                                <p className="status__label">Status:</p>
                                <p className="status__text status__text--concluido">Concluído</p>
                            </div>
                            <a
                                href="https://github.com/defreitasabner/simple_RT_face_detector" 
                                className="project-card__link"
                                target="_blank"
                            >Saiba mais...</a>
                        </div>
                    </div>
                    <div className="project-card__container">
                        <div className="project-card__infos">
                            <h3 className="project-card__title">Relógios para FITD</h3>
                            <p className="project-card__text">Administrador de relógios para jogos de Forged In The Dark (RPG).</p>
                        </div>
                        <div className="project-card__repo-infos">
                            <div className="status__container">
                                <p className="status__label">Status:</p>
                                <p className="status__text status__text--construcao">Construção</p>
                            </div>
                            <a
                                href="https://github.com/defreitasabner/fitd_progress_clock_manager" 
                                className="project-card__link"
                                target="_blank"
                            >Saiba mais...</a>
                        </div>
                    </div>
                    <div className="project-card__container">
                        <div className="project-card__infos">
                            <h3 className="project-card__title">Karaokê Online</h3>
                            <p className="project-card__text">Desenvolvimento em conjunto de um app de karaokê.</p>
                        </div>
                        <div className="project-card__repo-infos">
                            <div className="status__container">
                                <p className="status__label">Status:</p>
                                <p className="status__text status__text--construcao">Construção</p>
                            </div>
                            <a
                                href="https://github.com/artursennass/karaoque-role-de-migos" 
                                className="project-card__link"
                                target="_blank"
                            >Saiba mais...</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}