import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';

const SignUp = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="signUp-root">
      <section className="signUp-root__1">
        <img
          src={require('../../../assets/Polypodium 2.svg').default}
          alt="logo"
          className="or-l"
        />
        <p
          className="signUp-root__1__p1"
          onClick={() => {
            navigate('/');
          }}
        >
          Kupon
        </p>
        <p className="signUp-root__1__p2">Create Account</p>
        <form>
          {clicked ? (
            <Step2 setClicked={setClicked} />
          ) : (
            <Step1 setClicked={setClicked} />
          )}
        </form>
      </section>
      <section className="signUp-root__2">
        <img
          src={require('../../../assets/Polypodium__login.svg').default}
          alt=""
          className="polysign"
        />
        <img
          src={require('../../../assets/Polypodium__login2.svg').default}
          alt=""
          className="polysign2"
        />
        <img
          src={require('../../../assets/Saly-2.svg').default}
          alt=""
          className="sally2"
        />
        <img
          src={require('../../../assets/Layer 27.svg').default}
          alt=""
          className="layer270"
        />
        <img
          src={require('../../../assets/Layer 28.svg').default}
          alt=""
          className="layer280"
        />
      </section>
    </div>
  );
};

export default SignUp;
