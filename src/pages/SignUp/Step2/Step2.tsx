import React from 'react';
import './Step2.scss';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Step2 = ({ setClicked }: any) => {
  return (
    <div className="step2__root">
      <p className="step2__root__p1">
        Congrats on signing up, now fill in your business information 😁
      </p>
      <ArrowBackIcon
        onClick={() => {
          setClicked(false);
        }}
        className="step2__root__arrowBack"
      />
      <div>
        <label>Business Logo</label>
      </div>
      <div className="step2__labels">
        <label>Business Name</label>
        <TextField variant="outlined" className="label_step2" />
      </div>
      <div className="step2__labels">
        <label>Business Address</label>
        <TextField variant="outlined" className="label_step2" />
      </div>
      <button className="step2__submit">Done</button>
    </div>
  );
};

export default Step2;
