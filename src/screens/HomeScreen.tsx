import AboutMe from "../components/AboutMe";
import MyAbilities from "../components/MyAbilities";
import MyProjects from "../components/MyProjects";

export default function HomeScreen() {
    return (
        <main className="main__container">
            <AboutMe />
            <MyAbilities />
            <MyProjects />
        </main>
    )
}