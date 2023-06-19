import styles from './SocialMediaBadge.module.scss';

export default function SocialMediaBadge({ url, img, alt }) {

    return (
        <a href={url} target="_blank">
            <img 
                src={img} 
                alt={alt}
                className={styles.badge}
            />
        </a>
    )
}