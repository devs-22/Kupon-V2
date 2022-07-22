import './DesktopGetStarted.scss';

const DesktopGetStarted = () => {
  return (
    <section>
      <div className="DGS-root">
        <div>
          <img src={require('../../assets/Frame 1562.svg').default} alt="" />
        </div>
        <div className="DGS-root__line">
          <img src={require('../../assets/Line 6.svg').default} alt="" />
        </div>
        <div>
          <img src={require('../../assets/Frame 1563.svg').default} alt="" />
        </div>
        <div className="DGS-root__line">
          <img src={require('../../assets/Line 6.svg').default} alt="" />
        </div>
        <div>
          <img src={require('../../assets/Frame 1564.svg').default} alt="" />
        </div>
        <div className="DGS-root__line">
          <img src={require('../../assets/Line 6.svg').default} alt="" />
        </div>
        <div>
          <img src={require('../../assets/Frame 1565.svg').default} alt="" />
        </div>
      </div>
      <div className="DGS__head">
        <div className="DGS__heading">
          <p className="DGS_hold__p1">Create account</p>
          <p className="DGS_hold__p2">
            Create an account on the web app then sign in
          </p>
        </div>
        <div className="DGS__heading">
          <p className="DGS_hold__p1">Create Invoice</p>
          <p className="DGS_hold__p2">
            Draft up an invoice for your customer in just few minutes.
          </p>
        </div>
        <div className="DGS__heading">
          <p className="DGS_hold__p1">Send Invoice</p>
          <p className="DGS_hold__p2">
            Immediately send invoice to your customer after drafting through the
            mail.
          </p>
        </div>
        <div className="DGS__heading">
          <p className="DGS_hold__p1">Done in a jiffy</p>
          <p className="DGS_hold__p2">
            Continue with your business, now that invoice is sent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesktopGetStarted;
