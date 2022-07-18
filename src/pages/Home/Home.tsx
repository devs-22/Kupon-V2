import DesktopGetStarted from '../../components/DesktopGetStarted/DesktopGetStarted';
import Header from '../../components/Header/Header';
import MobileGetStarted from '../../components/MobileGetStarted/MobileGetStarted';
import MediaQuery from 'react-responsive';
import './Home.scss';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="flex-head">
        <div className="flex-head__1">
          <section className="section-header">
            <p className="section-header__p1">
              Create detailed invoice in a{' '}
              <span style={{ color: '#025CE4' }}>jiffy</span>.
            </p>
            <p className="section-header__p2">
              Send invoices to your customers globally, Get to provide details
              of your goods in seconds.
            </p>
          </section>
          <section className="section-buttons">
            <button className="section-buttons__createAccount">
              Create Account
            </button>
            <button className="section-buttons__learnMore">Learn More</button>
          </section>
        </div>
        <div className="flex-head__2">
          <img src={require('../../assets/Frame 1510.svg').default} alt="" />
        </div>
      </div>
      <section className="summary">
        <h1 className="summary__h1">GET STARTED</h1>
        <div className="summary-header">
          <img src={require('../../assets/Polypodium.svg').default} alt="" />
          <p> Nigeria's First Invoicing App. </p>
          <img src={require('../../assets/Polypodium.svg').default} alt="" />
        </div>
        <div>
          <MediaQuery minWidth={992}>
            <DesktopGetStarted />
          </MediaQuery>
          <MediaQuery maxWidth={992}>
            <MobileGetStarted />
          </MediaQuery>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
