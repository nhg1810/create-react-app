import styles from './banner.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const BannerSource = ({linearColor, title, urlImage, content}) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}
                style={{
                    background: linearColor
                }}>
                <img className={cx('img-banner')} src={urlImage} />
                <h2>{title}</h2>
                <p>{content}</p>
                <span className={cx('btn-access')}>Truy cập kênh</span>
            </div>
        </div>
    )
}
export default BannerSource;