import BannerSource from '../../components/Banner-source';
import styles from './construct.module.scss'
import classNames from 'classnames/bind'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardContent from '../../components/CardContent';

const cx = classNames.bind(styles);

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: cx('my-dot'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
const ConstructSource = () => {
    return (<div className={cx('wrapper')}>
        <Slider {...settings}>
            <BannerSource
                linearColor={'linear-gradient(to right, rgb(122, 115, 19), rgb(255, 186, 164))'}
                title={'Cấu trúc code PHP cơ bản'}
                content={'Bài viết này nhằm tổng hợp lại các dự án mà học viên F8 đã hoàn thành và chia sẻ trên nhóm Học lập trình web F8. Các dự án dưới đây được mình ngẫu nhiên lựa chọn để đăng chứ không mang tính xếp hạng các bạn nhé.'}
                urlImage={'https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png'} />
            <BannerSource
                linearColor={'linear-gradient(to right, rgb(104, 40, 250), rgb(255, 186, 164))'}
                title={'Build source nodejs express- template engin handlebar'}
                content={'Bài viết này nhằm tổng hợp lại các dự án mà học viên F8 đã hoàn thành và chia sẻ trên nhóm Học lập trình web F8. Các dự án dưới đây được mình ngẫu nhiên lựa chọn để đăng chứ không mang tính xếp hạng các bạn nhé.'}
                urlImage={'https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png'} />
            <BannerSource
                linearColor={'linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254))'}
                title={'Spring mvc'}
                content={'Bài viết này nhằm tổng hợp lại các dự án mà học viên F8 đã hoàn thành và chia sẻ trên nhóm Học lập trình web F8. Các dự án dưới đây được mình ngẫu nhiên lựa chọn để đăng chứ không mang tính xếp hạng các bạn nhé.'}
                urlImage={'https://files.fullstack.edu.vn/f8-prod/banners/Banner_03_youtube.png'} />
        </Slider>
        <div className={cx('main-inner')}>
            <div className={cx('new-section')}>
                <div className={cx('contain-card')}>
                    <CardContent/>
                    <CardContent/>
                    <CardContent/>
                    <CardContent/>
                    <CardContent/>
                    <CardContent/>
                    <CardContent/>
                    <CardContent/>
                    <CardContent/>

                </div>
            </div>
        </div>


    </div>)
}
export default ConstructSource;