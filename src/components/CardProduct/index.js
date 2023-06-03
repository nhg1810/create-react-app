import { Link } from 'react-router-dom';
import styles from './card.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);

const CardProduct = ({ setWidth }) => {
    return (<div className={cx('wrapper')} style={{
        width: setWidth
    }}>
        <div className={cx('contain-image')}>
            <img src="https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png" />
            <span className={cx('tag-category')}>Prenium</span>
        </div>
        <span className={cx('name-product')}>
            Php Construct Code
        </span>
        <span className={cx('link-descript')}>
            <Link to="/detail-source" className={cx("detail-source")}>View Detail Source</Link></span>
    </div>)
}
export default CardProduct