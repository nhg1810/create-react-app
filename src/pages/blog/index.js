import BannerBlog from '../../components/Banner-blog';
import CardBlog from '../../components/CardBlog';
import styles from './blog.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Blog = () => {
    return (<div className={cx('wrapper')}>
        <BannerBlog />
        <div className={cx('contain-blog')}>
            <div className={cx('nav-blog')}>
                <span className={cx('nav-item', 'active')}>View all</span>
                <span className={cx('nav-item')}>Degign</span>
                <span className={cx('nav-item')}>Product</span>
                <span className={cx('nav-item')}>Interview</span>
                <span className={cx('nav-item')}>Lation Ship</span>
            </div>
            <div className={cx('contain-card')}>
                <CardBlog/>
                <CardBlog/>
                <CardBlog/>
                <CardBlog/>
            </div>
        </div>
    </div>)
}
export default Blog