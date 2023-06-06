import { Link } from 'react-router-dom';
import styles from './cardContent.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const CardContent = ({ setWidth }) => {
    return (<div className={cx('wrapper')} style={{
        width: setWidth
    }}>
        <div className={cx('contain-image')}>
            <img src='https://files.fullstack.edu.vn/f8-prod/courses/7.png' />
            <span className={cx('btn-access')}><Link to='/detail-construct-source'> Truy Cập</Link></span>
            <div className={cx('layout')}></div>
        </div>
        <div className={cx('contain-des')}>
            <span className={cx('title')}>PHP construct</span>
            <span className={cx('price')}>Miễn phí</span>
            <span className={cx('count')}>Lượt tải</span>
        </div>
    </div>)
}
export default CardContent;