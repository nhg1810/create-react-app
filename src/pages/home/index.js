import Banner from "../../components/Banner"
import Button from "../../components/Button";
import CardProduct from "../../components/CardProduct";
import styles from './home.module.scss'
import classNames from 'classnames/bind'
import { GrLinkNext } from "react-icons/gr";


const cx = classNames.bind(styles);
const Home = () => {
    return (
        <>
            <Banner />
            <section className={cx('wrapper')}>
                <div className={cx('nav-item-option')}>

                    <span className={cx('item-option', 'dot-item')}>
                        <p>Lastest</p>
                    </span>
                    <span className={cx('item-option')}><p>Popular</p></span>
                    <p>|</p>
                    <span className={cx('item-option', 'premium')}><p>Premium</p></span>
                    <span className={cx('item-option', 'free')}><p>Free</p></span>


                </div>
                <div className={cx('container-card')}>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                   
                </div>
               <span className={cx('view-all')}>
                <p>Start Discovery Now</p>
                <GrLinkNext/>
               </span>
            </section>
        </>

    )
}
export default Home