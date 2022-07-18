import './Footer.scss';

const Footer = () => {
  const today = new Date();
  return (
    <div>
      <div className="footer-root">
        <div className="footer-root__item">
          <p>FAQs</p>
        </div>
        <div className="footer-root__item">
          <p>Terms</p>
        </div>
        <div className="footer-root__item">
          <p>Privacy</p>
        </div>
        <div className="footer-root__item">
          <p>Contact us</p>
        </div>
      </div>
      <hr />
      <p className="footer-year">@ {today.getFullYear()} Kupon Technology</p>
      <p className="footer-bns">Kupon</p>
      <div className="footer-socials">
        <img src={require('../../assets/Vector.svg').default} alt="" />
        <img src={require('../../assets/Vector (1).svg').default} alt="" />
      </div>
    </div>
  );
};

export default Footer;
