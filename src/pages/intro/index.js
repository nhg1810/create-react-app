import BannerIntro from '../../components/Banner-Intro';
import CartContext from '../../components/CardContext';
import styles from './intro.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);

const Intro = () => {
    return (<div className={cx('wrapper')} >
        <BannerIntro />
        <div className={cx('contain-card-intro')}>
            <CartContext />
            <CartContext />
            <CartContext />
            <CartContext />
        </div>
    </div>)
}
export default Intro;