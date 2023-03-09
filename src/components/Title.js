import classes from '../app.module.css';
import { IMG_CDN_URL } from './config';

const Title = () => {
    return (
            <img src={IMG_CDN_URL} alt="title" className={classes.title} />

    )
}
export default Title;