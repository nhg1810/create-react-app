import styles from './login.module.scss'
import classNames from 'classnames/bind';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';


const cx = classNames.bind(styles);
const Login = () => {
    return (<div className={cx('wrapper')}>
        <span className={cx('title')}>START FOR FREE</span>
        <h1 className={cx('h1-title')}>Login</h1>
        <span className={cx('ask')}>Have you have a account ?</span><Link to="/sign-up" className={cx("nav-item")}>Sign Up</Link>
        <div className={cx('feild-login')}>
            <TextField className={cx('item')}
                required
                id="outlined-required"
                label="Username"
                InputLabelProps={{
                    style: {
                        fontSize: 16,
                    }
                }}
            />
        </div>
        <div className={cx('feild-login')}>
            <TextField className={cx('item')}
                size="medium"
                id="outlined-password-input"
                label="Password"
                type="password"
                rows={3}
                InputLabelProps={{
                    style: {
                        fontSize: 16,
                    }
                }}
                autoComplete="current-password"
            />
        </div>

        <span className={cx('title')}>Login with another?</span>
        <div className={cx('another-login')}>
            <AiOutlineGoogle className={cx('item-login')} />
            <AiFillFacebook className={cx('item-login')}/>
            <AiFillGithub className={cx('item-login')}/>
        </div>
        <Button variant="outlined">Log In</Button>


    </div>)
}
export default Login