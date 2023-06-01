import styles from './cardContent.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const CardContent = ()=>{
    return(<div className={cx('wrapper')}>
        <div className={cx('contain-image')}>
            <img src='https://files.fullstack.edu.vn/f8-prod/courses/7.png'/>
            <span className={cx('btn-access')}>Truy Cập</span>
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