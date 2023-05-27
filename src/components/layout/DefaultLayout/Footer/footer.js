import styles from './footer.module.scss'
import classNames from 'classnames/bind';
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram, AiFillMail, AiOutlineYoutube } from 'react-icons/ai'
const cx = classNames.bind(styles);


const Footer = () => {
    return (<footer className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('default-row')}>
                <img className={cx('footer-logo')} />
                <h2>About company</h2>
                <p>Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
                <div className={cx('item-contact')}>
                    <span className={cx('item-link')}>
                        <a><AiFillFacebook /></a>
                    </span>
                    <span className={cx('item-link')}>
                        <a><AiFillInstagram /></a>
                    </span>
                    <span className={cx('item-link')}>
                        <a><AiFillMail /></a>
                    </span>
                    <span className={cx('item-link')}>
                        <a><AiOutlineYoutube /></a>
                    </span>
                    <span className={cx('item-link')}>
                        <a><FaTelegramPlane /></a>
                    </span>
                </div>
            </div>
            <div className={cx('footer-option')}>
                <div className={cx('item-option')}>
                    <b className={cx('title-option')}>
                        For designers
                    </b>
                    <div className={cx('contain-option')} >
                        <a>Go Pro!</a>
                        <a>Explore design work</a>
                        <a>Design blog</a>
                        <a>Overtime podcast</a>
                        <a>Playoffs</a>
                        <a>Code of conduct</a>
                    </div>
                </div>
                <div className={cx('item-option')}>
                    <b className={cx('title-option')}>
                        For designers
                    </b>
                    <div className={cx('contain-option')} >
                        <a>Go Pro!</a>
                        <a>Explore design work</a>
                        <a>Design blog</a>
                        <a>Overtime podcast</a>
                        <a>Playoffs</a>
                        <a>Code of conduct</a>
                    </div>
                </div>
                <div className={cx('item-option')}>
                    <b className={cx('title-option')}>
                        For designers
                    </b>
                    <div className={cx('contain-option')} >
                        <a>Go Pro!</a>
                        <a>Explore design work</a>
                        <a>Design blog</a>
                        <a>Overtime podcast</a>
                        <a>Playoffs</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>)
}
export default Footer;