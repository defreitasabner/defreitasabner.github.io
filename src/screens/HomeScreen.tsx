import SectionAboutMe from "../components/SectionAboutMe";
import SectionMyAbilities from "../components/SectionMyAbilities";
import SectionMyProjects from "../components/SectionMyProjects";

export default function HomeScreen() {
    return (
        <main className="main__container">
            <SectionAboutMe />
            <SectionMyAbilities />
            <SectionMyProjects />
        </main>
    )
}