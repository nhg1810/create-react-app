import BannerIntro from '../../components/Banner-Intro';
import styles from './intro.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);

const Intro = () => {
    return (<div className={cx('wrapper')} >
        <BannerIntro />
       
    </div>)
}
export default Intro;