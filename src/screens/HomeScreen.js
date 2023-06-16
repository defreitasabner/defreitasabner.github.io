export default function HomeScreen() {
    return (
        <main className="main__container">
            <section className="about-me__container" id="about-me-section">
                <div className="personal-info__container">
                    <img 
                        className="personal-info__picture"
                        src="https://github.com/defreitasabner.png" 
                        alt="Abner Freitas"
                    />
                    <h3 className="personal-info__name">Abner Freitas</h3>
                    <span className="personal-info__role">Desenvolvedor FullStack</span>
                    <div className="social-media__container">
                        <a href="https://github.com/defreitasabner" target="_blank">
                            <img 
                                src="/images/github_icon.svg" 
                                alt="GitHub - defreitasabner"
                                className="social-media__icon"
                            />
                        </a>
                        <a href="https://gitlab.com/defreitasabner" target="_blank">
                            <img 
                                src="/images/gitlab_icon.svg" 
                                alt="GitLab - @defreitasabner"
                                className="social-media__icon"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/abner-silveira-de-freitas/" target="_blank">
                            <img 
                                src="/images/linkedin_icon.svg" 
                                alt="LinkedIn - Abner Silveira de Freitas"
                                className="social-media__icon"
                            />
                        </a>
                        <a href="https://www.kaggle.com/abnerfreitas" target="_blank">
                            <img 
                                src="/images/kaggle_icon.svg" 
                                alt="Kaggle - abnerfreitas"
                                className="social-media__icon"
                            />
                        </a>
                        <a href="https://medium.com/@abnerdefreitas" target="_blank">
                            <img 
                                src="/images/medium_icon.svg" 
                                alt="Medium - @abnerdefreitas"
                                className="social-media__icon"
                            />
                        </a>
                    </div>
                    <p className="personal-info__resume">Programador e biólogo. Fiz minha primeira graduação em Biologia (2013-2017) na Universidade Federal do Rio de Janeiro (UFRJ), onde também fiz mestrado na mesma área (2017-2019). Atualmente, estou em transição de carreira para área de tecnologia. Comecei a estudar programação através de cursos online (Alura) durante a pandemia de 2020, a princípio para automatizar processos repetitivos e para analisar dados, mas acabei descobrindo minha paixão pela área de tecnologia. Em Agosto de 2022, ingressei no Bacharelado em Tecnologia da Informação na Universidade Virtual do Estado de São Paulo (UNIVESP), sigo fazendo cursos online e executando pequenos projetos pessoais. Das diversas áreas da teconologia, a que mais estudo e que tenho mais experiência desenvolvendo projetos pessoais, é desenvolvimento web fullstack (Front-End e Back-End), incluindo um pouco de desenvolvimento mobile. Também tenho grande interesse em Data Science, Machine Learning e Deep Learning, e tento sempre me manter estudando o assunto e executando pequenos projetos na área. Por último, gosto muito de cultura maker e robótica, por conta disso, ingressei na equipe de robótica da UFRJ  (MinervaBots) no início de 2022, além de executar pequenos projetos pessoais com sistemas embarcados como hobbie.</p>
                </div>
            </section>
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