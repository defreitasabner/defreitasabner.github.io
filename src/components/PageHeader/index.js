export default function PageHeader() {
    return (
        <header className="header__container">
            <div className="header__title-button-container--mobile">
                <h1 className="header__title">Abner Freitas - Portfolio</h1>
                <div className="navigation__menu-button--mobile" data-menu-button>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
            <nav className="navigation__container" data-navigation-menu>
                <a href="#about-me-section" className="navigation__items">Sobre mim</a>
                <a href="#my-abilities-section" className="navigation__items">Minhas Habilidades</a>
                <a href="#my-projects-section" className="navigation__items">Meus Projetos</a>
            </nav>
        </header>
    )
}