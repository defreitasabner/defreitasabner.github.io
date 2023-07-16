import HomeScreen from "../src/screens/HomeScreen";
import myAbilities from "../src/data/myAbilities.json";
import myProjects from "../src/data/myProjects.json";
import mySocialMedias from "../src/data/mySocialMedias.json";

export function getStaticProps() {
    const myAbilitiesData: IAbility[] = myAbilities;
    const myProjectsData: IProject[] = myProjects;
    const mySocialMediasData: ISocialMedia[] = mySocialMedias;
    return {
        props: {
            mySocialMediasData,
            myAbilitiesData,
            myProjectsData
        }
    }
}

export default HomeScreen;