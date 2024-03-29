import styles from './SocialMedias.module.scss';
import SocialMediaBadge from './SocialMediaBadge';

import socialMediaData from '../../../../data/mySocialMedias.json';


export default function SocialMedias({ socialMedias }) {

    return (
        <div className={styles.socialMedias}>
            {socialMedias.map(
                (socialMedia, index) => <SocialMediaBadge key={index} {...socialMedia}/>
            )}
        </div>
    )
}