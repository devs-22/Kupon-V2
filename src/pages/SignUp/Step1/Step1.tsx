import { useState } from 'react';
import './Step1.scss';
import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Step1 = ({ setClicked }: any) => {
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
    <>
      <p className="step1__root_p1">
        Welcome, please create your account in 2 easy steps 🤩
      </p>
      <div className="step1__root">
        <div className="step1__root__labels">
          <div className="step1__labels">
            <label>Full Name</label>
            <TextField className="labels__textField" variant="outlined" />
          </div>
          <div className="step1__labels">
            <label>Email</label>
            <TextField
              className="labels__textField"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={require('../../../assets/Tick Square.svg').default}
                      alt="tick"
                    />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="step1__labels">
            <label>Phone</label>
            <PhoneInput
              country={'ng'}
              preferredCountries={['us', 'uk', 'gh']}
              inputClass={'number-class'}
            />
          </div>
          <div className="step1__labels">
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
          </div>
          <div className="step1__labels">
            <label>Confirm Password</label>
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
          </div>
          <button
            className="step-1__button"
            onClick={() => {
              setClicked(true);
            }}
          >
            Step 1/2
          </button>
        </div>
      </div>
    </>
  );
};

export default Step1;
