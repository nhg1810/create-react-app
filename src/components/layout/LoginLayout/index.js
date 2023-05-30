import Header from "../DefaultLayout/Header/header"
import styles from './styles.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const LoginLayout = ({ children }) => {
    return (<div className={cx('wrapper')}
    >


        <div className={cx('header')}>
            <Header />
        </div>
        <div className={cx('image-banner')}>
            <img src={require('./image/banner.jpg')} />
        </div>
        {children}
    </div>)
}
export default LoginLayout;