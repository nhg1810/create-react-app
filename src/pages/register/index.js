import { Link } from 'react-router-dom';
import styles from './register.module.scss'
import classNames from 'classnames/bind';
import { Button, TextField } from '@mui/material';

const cx = classNames.bind(styles);
const Register = () => {
    return (<div className={cx('wrapper')}>
        <span>START FOR FREE</span>
        <h1>Create new account</h1>
        <span>Already a Member? <Link to="/login">Login</Link></span>
        <div className={cx('contain-base')}>
            <div className={cx('item')}>
                <span>Your name: </span>
                <TextField
                    required
                    id="outlined-required"
                    label="Full name"
                    InputLabelProps={{
                        style: {
                            fontSize: 16,
                        }
                    }}
                />
            </div>
            <div className={cx('item')}>
                <span>Your major: </span>
                <TextField
                    required
                    id="outlined-required"
                    label="Major"
                    InputLabelProps={{
                        style: {
                            fontSize: 16,
                        }
                    }}
                />
            </div>
        </div>
        <div className={cx('contain-else')}>
            <div className={cx('item')}>
                <span>Your email</span>
                <TextField
                    className={cx('item-input')}
                    required
                    id="outlined-required"
                    label="Email"
                    InputLabelProps={{
                        style: {
                            fontSize: 16,
                        }
                    }}
                />
            </div>
        </div>
        <div className={cx('contain-else')}>
            <div className={cx('item')}>
                <span>Your password</span>
                <TextField
                    className={cx('item-input')}
                    required
                    id="outlined-required"
                    label="password"
                    type="password"
                    InputLabelProps={{
                        style: {
                            fontSize: 16,
                        }
                    }}
                />
            </div>
        </div>
        <Button className={cx('btn-sign-up')} variant="outlined">Sign Up</Button>


    </div>)
}
export default Register;