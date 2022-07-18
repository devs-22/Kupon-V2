import './MobileGetStarted.scss';

const MobileGetStarted = () => {
  return (
    <section>
      <div className="getStarted_hold">
        <img src={require('../../assets/Frame 1562.svg').default} alt="" />
        <p className="getStarted_hold__p1">Create account</p>
        <p className="getStarted_hold__p2">
          Create an account on the web app then sign in
        </p>
      </div>
      <div className="getStarted_hold__line">
        <img src={require('../../assets/Line 9.svg').default} alt="" />
      </div>
      <div className="getStarted_hold">
        <img src={require('../../assets/Frame 1563.svg').default} alt="" />
        <p className="getStarted_hold__p1">Create Invoice</p>
        <p className="getStarted_hold__p2">
          Draft up an invoice for your customer in just few minutes.
        </p>
      </div>
      <div className="getStarted_hold__line">
        <img src={require('../../assets/Line 9.svg').default} alt="" />
      </div>
      <div className="getStarted_hold">
        <img src={require('../../assets/Frame 1564.svg').default} alt="" />
        <p className="getStarted_hold__p1">Send Invoice</p>
        <p className="getStarted_hold__p2">
          Immediately send invoice to your customer after drafting through the
          mail.
        </p>
      </div>
      <div className="getStarted_hold__line">
        <img src={require('../../assets/Line 9.svg').default} alt="" />
      </div>
      <div className="getStarted_hold">
        <img src={require('../../assets/Frame 1565.svg').default} alt="" />
        <p className="getStarted_hold__p1">Done in a jiffy</p>
        <p className="getStarted_hold__p2">
          Continue with your business, now that invoice is sent.
        </p>
      </div>
    </section>
  );
};

export default MobileGetStarted;
