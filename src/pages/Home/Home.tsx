import Header from '../../components/Header/Header';
import './Home.scss';

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="section-header">
        <p className="section-header__p1">
          Create detailed invoice in a{' '}
          <span style={{ color: '#025CE4' }}>jiffy</span>.
        </p>
        <p className="section-header__p2">
          Send invoices to your customers globally, Get to provide details of
          your goods in seconds.
        </p>
      </section>
      <section className="section-buttons">
        <button className="section-buttons__createAccount">
          Create Account
        </button>
        <button className="section-buttons__learnMore">Learn More</button>
      </section>
    </>
  );
};

export default Home;
