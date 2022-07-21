import { useState } from 'react';
import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Step1 = () => {
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
    <div>
      <div>
        <label>Full Name</label>
        <TextField id="outlined-basic" variant="outlined" />
      </div>
      <div>
        <label>Email</label>
        <TextField
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
      <div>
        <label>Phone</label>
        <PhoneInput country={'ng'} preferredCountries={['us', 'uk', 'gh']} />
      </div>
      <div>
        <label>Password</label>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
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
    </div>
  );
};

export default Step1;
