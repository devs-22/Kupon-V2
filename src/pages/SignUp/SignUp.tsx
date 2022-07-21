import React from 'react';
import './SignUp.scss';
import Step1 from './Step1/Step1';

const SignUp = () => {
  return (
    <div className="signUp-root">
      <section className="signUp-root__1">
        <p>Kupon</p>
        <p>Create Account</p>
        <p>Welcome, please create your account in 2 easy steps 🤩</p>
        <form>
          <Step1 />
        </form>
      </section>
      <section className="signUp-root__2">images</section>
    </div>
  );
};

export default SignUp;
