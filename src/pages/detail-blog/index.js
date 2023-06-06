import styles from './detail-blog.module.scss'
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram, AiFillMail, AiOutlineYoutube } from 'react-icons/ai'
import { FaParagraph } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerSource from '../../components/Banner-source';
import CardProduct from '../../components/CardProduct';

const cx = classNames.bind(styles)
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
const DetailBlog = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (<div className={cx('wrapper')}>
        <span className={cx('date-post')}>Blog --- <p>Đăng ngày 6/6/2023</p></span>
        <h1 className={cx('title-blog')}>Cuộc đời IT có khó khăn. Một m2 có 1000 react ?</h1>
        <div className={cx('contain-img')}>
            <img className={cx('img-banner')} src="https://plus.unsplash.com/premium_photo-1685053085344-c6171e7ddafa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80" />
        </div>
        <div className={cx('contain-content')}>
            <div className={cx('contain-contact')}>
                <span className={cx('item-link')}>
                    <a><AiFillFacebook /></a>
                </span>
                <span className={cx('item-link')}>
                    <a><AiFillInstagram /></a>
                </span>
                <span className={cx('item-link')}>
                    <a><AiFillMail /></a>
                </span>
                <span className={cx('item-link')}>
                    <a><AiOutlineYoutube /></a>
                </span>
                <span className={cx('item-link')}>
                    <a><FaTelegramPlane /></a>
                </span>
            </div>
            <span className={cx('name-blog')}><FaParagraph className={cx('icon-item')} />Cuộc đời IT có khó khăn. Một m2 có 1000 react ?</span>
            <div className={cx('para-start-blog')}>Tớ muốn trở thành bụi để có thể được hát, được ngân nga bay đi khắp thể gian, cảm nhận đươc hết mọi vẽ đẹp mà thế gian ban tặng rồi chạm tới những chân trời tới những vùng đất mà tớ mơ ước.</div>
            <p className={cx('para-body-blog')} >
                <p>
                    Cũng như bao vô vàn vật thể sống trên đời, tôi vẫn hạnh phúc khi được là Sen Da. LÀ CHÍNH MÌNH, LÀ ĐỘC NHẤT VÔ NHỊ.

                    <p>Sinh ra trong điều kiện hoàn cảnh khó khăn, thiếu thốn giúp tôi hoàn thiện bản thân, có những thói quen, đặc tính chỉ mình tôi có. Lớn lên trong vùng đất đá khô cằn giúp tôi luôn biết cách giữ trong mình những giọt nước quý giá, sống trong môi trường nắng gắt triền miên khiến da dẻ tôi ửng đỏ, gai góc. Bao nhiêu khó khăn phủ đầu nhưng tôi có bao giờ từ bỏ cuộc sống này đâu, thậm chí nhờ thế khiến tôi ĐẸP.
                    </p>
                    <p>Vẻ đẹp của sự kiên cường khao khát được sống, vẻ đẹp của sự gai góc, cái đẹp trong mắt tôi là tôi là chính tôi, chẳng có giới hạn khái niệm hay một định nghĩa đẹp là gì cả, chỉ đơn giản là TÔI THẤY ĐẸP BỞI VÌ TÔI THẤY TÔI ĐẸP. Tôi thấy thế nên bạn cũng vậy nhé, bạn cũng hãy đẹp trong mắt bạn, trước tiên là vậy. CẦN GÌ HỎI AI CÓ ĐẸP KHÔNG KHI BẠN THẤY NÓ ĐẸP. Vẻ đẹp ở đây đâu chỉ là dáng vóc. Nó còn là tri thức, tâm hồn, í chí được đúc kết qua hàng ngày. Vậy nên hãy tự tin đẹp như Sen Da nhé, ai cũng mang trong mình một sự đẹp chỉ có họ mới có và hãy luôn yêu cái đẹp của mình như anh bạn Xuong Rong luôn yêu cái gai trên thân vậy.
                    </p>
                    <p>Vẻ đẹp của sự kiên cường khao khát được sống, vẻ đẹp của sự gai góc, cái đẹp trong mắt tôi là tôi là chính tôi, chẳng có giới hạn khái niệm hay một định nghĩa đẹp là gì cả, chỉ đơn giản là TÔI THẤY ĐẸP BỞI VÌ TÔI THẤY TÔI ĐẸP. Tôi thấy thế nên bạn cũng vậy nhé, bạn cũng hãy đẹp trong mắt bạn, trước tiên là vậy. CẦN GÌ HỎI AI CÓ ĐẸP KHÔNG KHI BẠN THẤY NÓ ĐẸP. Vẻ đẹp ở đây đâu chỉ là dáng vóc. Nó còn là tri thức, tâm hồn, í chí được đúc kết qua hàng ngày. Vậy nên hãy tự tin đẹp như Sen Da nhé, ai cũng mang trong mình một sự đẹp chỉ có họ mới có và hãy luôn yêu cái đẹp của mình như anh bạn Xuong Rong luôn yêu cái gai trên thân vậy.
                    </p>
                </p>
            </p>
            <div className={cx('contain-banner')}>
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
export default DetailBlog;