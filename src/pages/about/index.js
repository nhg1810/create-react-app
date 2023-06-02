import BannerAbout from '../../components/Banner-about-me'
import styles from './about.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const About = () => {
    return (<div className={cx('wrapper')}>
        <BannerAbout />
    </div>)
}
export default About;