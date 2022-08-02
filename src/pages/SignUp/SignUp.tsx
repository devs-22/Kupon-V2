import React, { useState } from 'react';
import './SignUp.scss';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';

const SignUp = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="signUp-root">
      <section className="signUp-root__1">
        <img
          src={require('../../assets/Polypodium 2.svg').default}
          alt="logo"
          className="or-l"
        />
        <p className="signUp-root__1__p1">Kupon</p>
        <p className="signUp-root__1__p2">Create Account</p>
        <form>{clicked ? <Step2 /> : <Step1 setClicked={setClicked} />}</form>
      </section>
      <section className="signUp-root__2">images</section>
    </div>
  );
};

export default SignUp;
