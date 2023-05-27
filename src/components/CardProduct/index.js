import styles from './card.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);

const CardProduct = () => {
    return (<div className={cx('wrapper')}>
        <div className={cx('contain-image')}>
            <img />
            <span className={cx('tag-category')}>Prenium</span>
        </div>
        <span className={cx('name-product')}>Php Construct Code</span>
        <span className={cx('link-descript')}>View Detail Source</span>
    </div>)
}
export default CardProduct