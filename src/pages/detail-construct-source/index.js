import styles from './construct-source.module.scss'
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerSource from '../../components/Banner-source';
import { useEffect } from 'react';
import CardProduct from '../../components/CardProduct';
import CardContent from '../../components/CardContent';

import { AiFillDashboard } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlineDone } from 'react-icons/md';
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
const DetailConstructSource = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
            <div className={cx('inner-left')}>
                <h1>Kiến Thức Nhập Môn IT</h1>
                <p>Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.</p>
                <h3>Bạn sẽ học được gì?</h3>
                <div className={cx('contain-subject')}>
                    <p><MdOutlineDone className={cx('item-icon')} />Các kiến thức cơ bản, nền móng của ngành IT
                    </p>
                    <p><MdOutlineDone className={cx('item-icon')} />Các mô hình, kiến trúc cơ bản khi triển khai ứng dụng
                    </p>
                    <p><MdOutlineDone className={cx('item-icon')} />Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng dụng
                    </p>
                    <p><MdOutlineDone className={cx('item-icon')} />Hiểu hơn về cách internet và máy vi tính hoạt động
                    </p>
                </div>
                <div className={cx('des-project')}>
                    <h3>Mô tả dự án (Source Code)</h3>
                </div>
            </div>
            <div className={cx('inner-right')}>
                <div className={cx('contain-inf-source')}>
                    <CardContent setWidth='95%' />
                    <span className={cx('price-source')}>Miễn Phí</span>
                    <div className={cx('des-source')}>
                        <p><AiFillDashboard /> Trình độ cơ bản</p>
                        <p><BiTimeFive />Thời gian code: 24h </p>
                    </div>
                </div>
            </div>
            <div className={cx('relative-source')}>
                <h3>Source Code liên quan</h3>
                <div className={cx('contain-relative-code')}>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </div>
        </div>
    </div>)
}
export default DetailConstructSource;