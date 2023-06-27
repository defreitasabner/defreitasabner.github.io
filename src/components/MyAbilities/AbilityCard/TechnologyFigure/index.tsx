import styles from './TechnologyFigure.module.scss';

export default function TechnologyFigure({ name, img, alt }) {
    return (
        <figure className={styles.technologyFigure}>
            <img 
                src={img} 
                alt={alt}
                className={styles.technologyFigure__img}
            />
            <figcaption className={styles.technologyFigure__name}>{name}</figcaption>
        </figure>
    )
}