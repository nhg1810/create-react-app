import styles from './banner.module.scss'
import classNames from 'classnames/bind'
import Button from '../../components/Button'
import { AiOutlineSearch } from 'react-icons/ai'
import InputSearch from '../InputSearch';
const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <section className={cx('wrapper')}>
            <span className={cx('title-banner')}>
                Welcome To My Landing Page!
            </span>
            <p className={cx('des-banner')}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, deserunt ipsum aut ab accusantium voluptatum molestiae in rerum. At, ipsum illo. A pariatur explicabo distinctio eligendi nam voluptas consectetur sequi.
            </p>
            <InputSearch/>
        </section>
    )
}
export default Banner;