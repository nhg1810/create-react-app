import styles from './banner-intro.module.scss'
import classNames from 'classnames/bind'
import { GrLinkNext } from "react-icons/gr";
import { Link } from 'react-router-dom'
import BannerSource from '../Banner-source'


const cx = classNames.bind(styles);

const BannerIntro = () => {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('all-function')}>

                <BannerSource
                    linearColor={'linear-gradient(to right, rgb(122, 115, 19), rgb(255, 186, 164))'}
                    title={'Cấu trúc code PHP cơ bản'}
                    content={'Bài viết này nhằm tổng hợp lại các dự án mà học viên F8 đã hoàn thành và chia sẻ trên nhóm Học lập trình web F8. Các dự án dưới đây được mình ngẫu nhiên lựa chọn để đăng chứ không mang tính xếp hạng các bạn nhé.'}
                    urlImage={'https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png'} />
            </div>

            <div className={cx('inner')}>
                <img src={require('./images/banner.png')} />
                <div className={cx('spotilne-linked')}>
                    <p>Are you want to build this source in 1 min ?</p>
                    <GrLinkNext className={cx('icon-linked')} />
                </div>
                <div className={cx('sologan')}>
                    <h1>Get my source to improve your talent</h1>
                    <p>What is my source?</p>
                </div>
                <span className={cx('descript')} >Bắt ngay cơ hội này để không bỏ lỡ mức lương lên đến 14 triệu, các khoản trợ cấp, thưởng hấp dẫn, các chuyến du lịch, nghỉ mát, team building, loạt phúc lợi đỉnh,...</span>
                <Link to='/all-sources' className={cx('btn-start')}>Xem ngay</Link>

            </div>
        </div>
    )
}
export default BannerIntro