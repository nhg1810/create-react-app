
import styles from './cardcontext.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);

const CartContext = () => {
    return (<div className={cx("card")}>
        <div className={cx('imgBx')}>
            <img src="./img/data.png" alt="" />
        </div>
        <div className={cx('content')}>
            <div>
                <h3>Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ratione natus incidunt qui! Totam
                    nulla dignissimos, accusantium aliquid tempore eum beatae quam ratione ullam nam pariatur, eos
                    esse saepe iusto!</p>
                <a href="">Read More</a>
            </div>
        </div>
    </div>)
}
export default CartContext