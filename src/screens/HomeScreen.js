import SectionAboutMe from "../components/SectionAboutMe";

export default function HomeScreen() {
    return (
        <main className="main__container">
            <SectionAboutMe />
            <section className="my-abilities__container">
                <h2 className="my-abilities__title" id="my-abilities-section">Minhas Habilidades Técnicas</h2>
                <div className="my-abilities__cards">
                    <div className="ability-card__container">
                        <h3 className="ability-card__title">Front-End</h3>
                        <p className="ability-card__text">Criação de interfaces de usuários para sistemas web, utilizando HTMl, CSS e JavaScript. Tenho experiência com bibliotecas e frameworks como React, NextJS e SASS.</p>
                        <div className="ability-card__list-container">
                            <p className="ability-card__title-list">Tecnologias utilizadas:</p>
                            <ul className="ability-card__list">
                                <li>HTML, CSS e JavaScript (Web básico)</li>
                                <li>React e NextJS (Web)</li>
                                <li>React Native (Mobile)</li>
                                <li>SASS (Estilização)</li>
                            </ul>
                        </div>
                        <div className="progress-bar__container">
                            <div className="progress-bar">
                                <div className="progress-bar__level progress-bar__level--active"></div>
                                <div className="progress-bar__level progress-bar__level--active"></div>
                                <div className="progress-bar__level progress-bar__level--active"></div>
                                <div className="progress-bar__level"></div>
                                <div className="progress-bar__level"></div>
                                <div className="progress-bar__level"></div>
                            </div>
                            <p className="progress-bar__label">Intermediário</p>
                        </div>
                    </div>
                    <div className="ability-card__container">
                        <h3 className="ability-card__title">Back-End</h3>
                        <p className="ability-card__text">Experiência com desenvolvimento de API REST. Principalmente com as linguagens JavaScript e Python. Também tenho alguma experiência com ORMs para comunicação fácil e segura com o banco de dados.</p>
                        <div className="ability-card__list-container">
                            <p className="ability-card__title-list">Tecnologias utilizadas:</p>
                            <ul className="ability-card__list">
                                <li>NodeJS e Python</li>
                                <li>Express e Sequelize (JS)</li>
                                <li>FastAPI (Python)</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div className="progress-bar__container">
                            <div className="progress-bar">
                                <div className="progress-bar__level progress-bar__level--active"></div>
                                <div className="progress-bar__level progress-bar__level--active"></div>
                                <div className="progress-bar__level progress-bar__level--active"></div>
                                <div className="progress-bar__level"></div>
                                <div className="progress-bar__level"></div>
                                <div className="progress-bar__level"></div>
                            </div>
                            <p className="progress-bar__label">Intermediário</p>
                        </div>
                    </div>
                    <div className="ability-card__container">
                        <h3 className="ability-card__title">Data Science</h3>
                        <p className="ability-card__text">Foco em análises exploratórias de dados (EDA). Experiência básica com treinamento e aplicação de modelos de Machine Learning para predições estatísticas. Experiência superficial com redes neurais.</p>
                        <div className="ability-card__list-container">
                            <p className="ability-card__title-list">Tecnologias utilizadas:</p>
                            <ul className="ability-card__list">
                                <li>Excel, Google Sheet e Jupyter (EDA)</li>
                                <li>Pandas, MatplotLib e Seaborn (EDA)</li>
                                <li>SciKitLearn (Machine Learning)</li>
                                <li>Pytorch (Deep Learning)</li>
                            </ul>
                        </div>
                        <div className="progress-bar__container">
                            <div className="progress-bar">
                                <div className="progress-bar__level progress-bar__level--active"></div>
                                <div className="progress-bar__level progress-bar__level--active"></div>
                                <div className="progress-bar__level"></div>
                                <div className="progress-bar__level"></div>
                                <div className="progress-bar__level"></div>
                                <div className="progress-bar__level"></div>
                            </div>
                            <p className="progress-bar__label">Iniciante-Intermediário</p>
                        </div>
                    </div>
                    <div className="ability-card__container">
                        <h3 className="ability-card__title">Sistemas Embarcados</h3>
                        <p className="ability-card__text">Desenvolvimento de projetos com sistemas embarcados usando microcontroladores para execução de tarefas automatizadas. Pequenos projetos de automação residencial e robótica.</p>
                        <div className="ability-card__list-container">
                            <p className="ability-card__title-list">Tecnologias utilizadas:</p>
                            <ul className="ability-card__list">
                                <li>C++ e Python</li>
                                <li>Arduinos e ESP's (Microcontroladores)</li>
                                <li>PlatformIO (Framework)</li>
                                <li>ROS (Sistema Operacional de Robôs)</li>
                            </ul>
                        </div>
                        <div className="progress-bar__container">
                            <div className="progress-bar">
                                <div className="progress-bar__level progress-bar__level--active"></div>
                                <div className="progress-bar__level progress-bar__level--active"></div>
                                <div className="progress-bar__level"></div>
                                <div className="progress-bar__level"></div>
                                <div className="progress-bar__level"></div>
                                <div className="progress-bar__level"></div>
                            </div>
                            <p className="progress-bar__label">Iniciante-Intermediário</p>
                        </div>
                    </div>
                </div>
            </section>
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