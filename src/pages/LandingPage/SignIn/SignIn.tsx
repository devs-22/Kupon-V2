import React, { useState } from 'react';
import './SignIn.scss';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const today = new Date();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="signIn__root">
      <section className="signIn__root__section1">
        <img
          src={require('../../assets/Polypodium 2.svg').default}
          alt=""
          className="poly10"
          onClick={() => {
            navigate('/');
          }}
        />
        <img
          src={require('../../assets/Polypodium__login2.svg').default}
          alt=""
          className="poly20"
        />
        <h1
          onClick={() => {
            navigate('/');
          }}
        >
          Kupon
        </h1>
        <p className="section1__login">Log in to your Account </p>
        <p className="section1__welcome">
          Welcome back, Please enter your details.
        </p>
        <form className="section1__form">
          <div className="form__logs">
            <label>Email</label>
            <TextField />
          </div>
          <div className="form__logs">
            <label>Password</label>
            <OutlinedInput
              className="labels__textField"
              type={values.showPassword ? 'text' : 'password'}
              // value={values.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            <p className="form__logs__forgotPassword">Forgot password?</p>
          </div>
          <div className="section1__form__buttons">
            <button className="section1__form__buttons__login">Log In</button>
            <p
              className="login__create"
              onClick={() => {
                navigate('/SignUp');
              }}
            >
              Don't have an account? <span>Create one</span>{' '}
            </p>
          </div>
        </form>
        <p className="section1__date">
          @ {today.getFullYear()} Kupon Technology
        </p>
      </section>
      <section className="signIn__root__section2">
        <img
          src={require('../../assets/Polypodium__login.svg').default}
          alt=""
          className="poly1"
        />
        <img
          src={require('../../assets/Polypodium__login2.svg').default}
          alt=""
          className="poly2"
        />
        <img
          src={require('../../assets/Saly-2.svg').default}
          alt=""
          className="sally"
        />
        <img
          src={require('../../assets/Layer 27.svg').default}
          alt=""
          className="layer27"
        />
        <img
          src={require('../../assets/Layer 28.svg').default}
          alt=""
          className="layer28"
        />
      </section>
    </div>
  );
};

export default SignIn;
