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
        hideNavMoble ? navMobile.style.left = '0px' : navMobile.style.left = '-200%'
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
                        <Link to="/" className={cx("nav-item")}>Introduction</Link>
                    </span>
                    <span className={cx('item-option')}>
                        <Link to="/all-sources" className={cx("nav-item")}>All sources</Link>
                    </span>
                    <span className={cx('item-option')}>
                        <Link to="/construct-source" className={cx("nav-item")}>Construct sources </Link>
                    </span>
                    {/* more item in tag more */}
                    <span className={cx('item-more')}>
                        <a className={cx("nav-item")}>More</a>
                        <AiFillCaretDown />
                        <div className={cx('list-item-more')}>
                            <span className='nav-item-more'>
                                <Link to="/blog" className={cx("nav-item")}>Blog IT</Link>
                            </span>
                            <span className='nav-item-more'>
                                <a>About me</a>
                            </span>
                            <span className='nav-item-more'>
                                <a>Contact</a>
                            </span>
                        </div>
                    </span>
                </div>

            </div>
            <div className={cx('inner-right')}>
                <Link to="/login" className={cx("nav-item")}> <Button
                    content="Login"
                    type="button"
                    border='rgb(221, 221, 221)'
                    width='100px'
                    height='40px'
                    borderRadius='5px'
                    background='rgb(246, 246, 246)'
                >
                    <AiOutlineLogin />

                </Button></Link>

                <Link to="/sign-up" className={cx("nav-item")}>
                    <Button
                        marginLeft='10px'
                        content="Sign Up"
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
                </Link>

            </div>
        </div>
    </header>)
}
export default Header;