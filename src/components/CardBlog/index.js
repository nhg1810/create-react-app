import styles from './card-blog.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const CardBlog = () => {
    return (<div className={cx('wrapper')}>
        <div className={cx('container-img')}>
            <img src="https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png" />
            <div className={cx('inf-author')}>
                <div className={cx('author')}>
                    <span>Nguyễn Hải Dương</span>
                    <p>6/2/2023</p>
                </div>
                <div className={cx('cate-blog')}>
                    <span>IT blog</span>
                </div>

            </div>
            <span className={cx('btn-access')}>Đọc thêm</span>
        </div>
        <div className={cx('container-content')}>
            <span>UI review presentation</span>
            <p> The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value.</p>
            <u>Đọc thêm</u>
        </div>
    </div>)
}
export default CardBlog;