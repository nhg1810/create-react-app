import styles from './banner-intro.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const BannerIntro = () => {
    return (
        <section className={cx("home")}>

            <div className={cx("image-banner")}>
                <img src={require('./images/about-img.png')} alt="" />
            </div>

            <div className={cx("content")}>
                <h3>your course to success</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa cumque neque quam amet perferendis sed rem ut tenetur porro praesentium.</p>
                <a href="#" className={cx("btn")}>get started</a>
            </div>

        </section>
    )
}
export default BannerIntro