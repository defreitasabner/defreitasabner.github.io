interface IAbility {
    title: string,
    description: string,
    technologies: ITechnologies[],
    skills: string[],
    level: string
}

interface ITechnologies {
    name: string,
    img: string,
    alt: string,
}