import styles from './header.module.scss'
import classNames from 'classnames/bind'
import { AiFillCaretDown, AiOutlineAlignLeft, AiOutlineLogin, AiOutlineContacts } from 'react-icons/ai'
import Button from '../../../Button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles);
const Header = () => {
    const [hideTabMobile, setHideTabMobile] = useState(false)
    const [resize, setResize] = useState(window.innerWidth);
    const [hideNavMoble, setHideNavMoble] = useState(false)
    useEffect(() => {

        //useEffect ko co dept thif chayj lien tuc
        const handleResize = () => {
            setResize(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return function cleanup() {
            window.removeEventListener('click', clickToNavMobile);
        }
    })
    useEffect(() => {
        if (resize < 800) {
            setHideTabMobile(true)
        } else {
            setHideTabMobile(false)
        }
    }, [resize])



    const clickToNavMobile = () => {
        setHideNavMoble(!hideNavMoble)
    }
    useEffect(() => {
        const navMobile = document.getElementById("option-tab");
        hideNavMoble ? navMobile.style.left = '0px' : navMobile.style.left = '-100%'
    }, [hideNavMoble])

    return (<header className={cx('wrapper')}>

        {hideNavMoble ? <div className={cx('layout')} onClick={clickToNavMobile}></div> : <></>}
        <div className={cx('inner-wrapper')}>
            <div className={cx('inner-left')}>
                {/* logo image */}
                {hideTabMobile ? <AiOutlineAlignLeft className={cx('btn-open-tab-mobile')} onClick={clickToNavMobile} /> : <></>}

                <img className={cx('logo')}></img>
                {/* any item in the first show */}
                <div className={cx('contain-option')} id='option-tab'>
                    <span className={cx('item-option')}>
                        <Link to="/" className={cx("nav-item")}>Giới thiệu</Link>
                    </span>
                    <span className={cx('item-option')}>
                        <Link to="/all-sources" className={cx("nav-item")}>Tất cả sources</Link>
                    </span>
                    <span className={cx('item-option')}>
                        <a className={cx("nav-item")}>Dựng sources </a>
                    </span>
                    {/* more item in tag more */}
                    <span className={cx('item-more')}>
                        <a className={cx("nav-item")}>Thêm</a>
                        <AiFillCaretDown />
                        <div className={cx('list-item-more')}>
                            <span className='nav-item-more'>
                                <a>Cuộc đời It-er</a>
                            </span>
                            <span className='nav-item-more'>
                                <a>Về tôi</a>
                            </span>
                            <span className='nav-item-more'>
                                <a>Liên hệ</a>
                            </span>
                        </div>
                    </span>
                </div>

            </div>
            <div className={cx('inner-right')}>
                <Link to="/login" className={cx("nav-item")}> <Button
                    content="Đăng nhập"
                    type="button"
                    border='rgb(221, 221, 221)'
                    width='100px'
                    height='40px'
                    borderRadius='5px'
                    background='rgb(246, 246, 246)'
                >
                    <AiOutlineLogin />

                </Button></Link>


                <Button
                    marginLeft='10px'
                    content="Đăng kí"
                    type="button"
                    border='rgb(221, 221, 221)'
                    width='100px'
                    height='40px'
                    borderRadius='5px'
                    background='black'
                    color='white'
                >
                    <AiOutlineContacts />

                </Button>
            </div>
        </div>
    </header>)
}
export default Header;