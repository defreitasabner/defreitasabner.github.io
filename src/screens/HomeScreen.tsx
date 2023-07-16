import AboutMe from "../components/AboutMe";
import MyAbilities from "../components/MyAbilities";
import MyProjects from "../components/MyProjects";

export default function HomeScreen({ mySocialMediasData, myAbilitiesData, myProjectsData }) {
    return (
        <main className="main__container">
            <AboutMe socialMedias={ mySocialMediasData } />
            <MyAbilities abilities={myAbilitiesData} />
            <MyProjects projects={myProjectsData} />
        </main>
    )
}