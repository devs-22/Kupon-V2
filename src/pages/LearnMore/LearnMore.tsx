import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './LearnMore.scss';
const LearnMore = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="learnMore__root">
        <div className="learnMore__getToKnowUs">
          <img
            src={require('../../assets/Point_right.svg').default}
            alt=""
            className="hand"
          />
          <img
            src={require('../../assets/Polypodium.svg').default}
            alt=""
            className="podium"
          />
          <p>Get to know us</p>
          <img
            src={require('../../assets/Polypodium.svg').default}
            alt=""
            className="podium"
          />
        </div>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            deserunt explicabo earum magnam sed, delectus dolores possimus
            doloremque voluptatibus sunt ut obcaecati corporis praesentium
            ullam? Cupiditate rerum, tenetur obcaecati ducimus laudantium odit
            exercitationem nihil eius dignissimos eligendi? Error, voluptatibus
            mollitia?
          </p>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default LearnMore;
