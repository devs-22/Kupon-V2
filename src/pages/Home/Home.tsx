import DesktopGetStarted from '../../components/DesktopGetStarted/DesktopGetStarted';
import Header from '../../components/Header/Header';
import MobileGetStarted from '../../components/MobileGetStarted/MobileGetStarted';
import MediaQuery from 'react-responsive';
import './Home.scss';
import Footer from '../../components/Footer/Footer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="flex-head">
        <div className="flex-head__1">
          <section className="section-header">
            <motion.div
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ type: 'spring', delay: 0.5, bounce: 0.5 }}
            >
              <p className="section-header__p1">
                Create detailed invoice in a{' '}
                <span style={{ color: '#025CE4' }}>jiffy</span>.
              </p>
            </motion.div>
            <p className="section-header__p2">
              Send invoices to your customers globally, Get to provide details
              of your goods in seconds.
            </p>
          </section>
          <section className="section-buttons">
            <motion.div whileHover={{ scale: 1.07 }}>
              <button
                className="section-buttons__createAccount"
                onClick={() => {
                  navigate('/SignUp');
                }}
              >
                Create Account
              </button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.07 }}
              onClick={() => {
                navigate('/LearnMore');
              }}
            >
              <button className="section-buttons__learnMore">Learn More</button>
            </motion.div>
          </section>
        </div>
        <div className="flex-head__2">
          <img src={require('../../assets/Frame 1510.svg').default} alt="" />
        </div>
      </div>
      <section className="summary">
        <motion.div>
          <h1 className="summary__h1">GET STARTED</h1>
        </motion.div>
        <div className="summary-header">
          <motion.div
            initial={{ scale: 0, x: -100 }}
            whileInView={{ scale: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <img src={require('../../assets/Polypodium.svg').default} alt="" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1, x: 0 }}
            transition={{ type: 'spring', delay: 0.5, bounce: 0.5 }}
          >
            <p> Nigeria's First Invoicing App. </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0, x: 100 }}
            whileInView={{ scale: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <img src={require('../../assets/Polypodium.svg').default} alt="" />
          </motion.div>
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
