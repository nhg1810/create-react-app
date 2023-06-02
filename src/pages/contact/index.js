import styles from './contact.module.scss'
import classNames from 'classnames/bind';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import TextareaAutosize from '@mui/base/TextareaAutosize';


const cx = classNames.bind(styles)
const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};
const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    margin-top: 20px;
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);
const Contact = () => {
    return (<div className={cx('wrapper')}>
        <img className={cx('img-banner')} src={require('./image/banner.png')} />
        <div className={cx('container-contact')}>
            <div className={cx('inner-left')}>
                <img className={cx('logo-des')} src={require('./image/logo.png')} />
            </div>
            <div className={cx('inner-right')}>
                <h1>LIÊN HỆ</h1>
                <p>24/7 Chúng tôi sẽ phản hồi câu hỏi hoặc vấn đề của bạn !</p>
                <div className={cx('form-contact')}>
                    <div className={cx('base-inf')}>
                        <TextField className={cx('base-item')}
                            required
                            id="outlined-required"
                            label="Tên của bạn"
                            InputLabelProps={{
                                style: {
                                    fontSize: 16,
                                }
                            }}
                        />
                        <TextField className={cx('base-item')}
                            required
                            id="outlined-required"
                            label="Ngành nghề"
                            InputLabelProps={{
                                style: {
                                    fontSize: 16,
                                }
                            }}
                        />
                    </div>
                    <TextField className={cx('item')}
                        required
                        id="outlined-required"
                        label="Email"
                        InputLabelProps={{
                            style: {
                                fontSize: 16,
                            }
                        }}
                    />
                    <TextField className={cx('item')}
                        required
                        id="outlined-required"
                        label="Số điện thoại"
                        InputLabelProps={{
                            style: {
                                fontSize: 16,
                            }
                        }}
                    />
                    <StyledTextarea
                        aria-label="minimum height"
                        minRows={7}
                        placeholder="Mô tả vấn đề của bạn..."
                    />
                    <san className={cx('btn-send')}>Gửi</san>
                </div>
            </div>
        </div>
    </div>)
}
export default Contact;