import styles from './banner.module.scss'
import classNames from 'classnames/bind'
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";


const cx = classNames.bind(styles)
const BannerAbout = () => {
    return (<div className={cx('wrapper')}>
        <img className={cx('main-banner')} src={require('./image/banner-main.png')}/>
        <div className={cx('inner-left')}>
            <span className={cx('title-banner')}>I REALLY LOVE CODING, DO YOU LIKE THAT?</span>
        </div>
        <div className={cx('inner-right')}>
            <img className={cx('img-me')} src={require('./image/banner.jpg')} />
            <div className={cx('contain-skill')}>
                <h1>THÔNG TIN VỀ TÔI</h1>
                <div className={cx('skill')}>
                    <p>Tên: <b>Nguyễn Hải Dương</b></p>
                    <p>Sinh: <b>18/10/2002</b></p>
                    <p>Quốc tịch: <b>Việt Nam</b></p>
                    <p>Chuyên Ngành: <b>Kỹ sư phần mềm</b></p>
                    <p>Trình độ: <b>Đại học</b></p>
                    <p>Mô tả kĩ năng: <i>Đại học</i></p>
                    <p>Bản thân: <i>Trên con đường trưởng thành và chiêm nghiệm cuộc sống của mỗi người sẽ luôn có những xúc cảm đan xen lẫn nhau. Đó là những niềm vui, nỗi buồn; đó là những lúc thăng hoa, trầm lặng hay đôi khi, chỉ muốn về với gia đình sau những ngày làm việc vất vả.</i></p>
                </div>
                <div className={cx('contact')}>
                    <span>Theo dõi tôi tại: </span>
                    <div className={cx('contain-media')}>
                        <AiFillFacebook className={cx('item-icon')}/>
                        <AiOutlineInstagram className={cx('item-icon')}/>
                        <AiFillYoutube className={cx('item-icon')}/>
                        <p>SĐT: 0868617603</p>
                        <p>Email: nhduong.20it7@vku.udn.vn</p>
                    </div>
                </div>
            </div>

        </div>

    </div>)
}
export default BannerAbout;