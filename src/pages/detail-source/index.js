import styles from './detail-source.module.scss';
import classNames from 'classnames/bind';
import { MdOutlineDone } from 'react-icons/md';
import CardProduct from "../../components/CardProduct";
import { AiFillDashboard } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { useEffect } from 'react';


const cx = classNames.bind(styles)
const DetailSource = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (<div className={cx('wrapper')}>
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
                <CardProduct setWidth='95%' />
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
    </div>)
}
export default DetailSource;