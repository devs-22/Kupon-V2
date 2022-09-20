import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './FAQ.scss';
import Faq from "react-faq-component";

const FAQ = () => {
  const data = {
    rows: [
        {
            title: "What is Kupon?",
            content: `Kupon makes it easy for small business owners to create invoices for their customers`,
        },
        {
            title: "Is there a limit to the amount of Kupon I can create?",
            content:
                "Kupon makes it easy for small business owners to create invoices for their customers",
        },
        {
            title: "What should I do if I forget my password?",
            content: `Kupon makes it easy for small business owners to create invoices for their customers`,
        },
        {
            title: "How do I change my registered email on Kupon?",
            content: `Kupon makes it easy for small business owners to create invoices for their customers`,
        },
    ],
};

const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
};

const config = {
    animate: true,
    tabFocus: true
};

  return (
    <div className="FAQ__root">
      <header>
        <Header />
      </header>
      <div className="FAQ__topic">
        <img src={require('../../assets/Polypodium.svg').default} alt=""/>
        <p>FAQs</p>
        <img src={require('../../assets/Polypodium.svg').default}alt="" />
      </div>
      <section>
      <Faq
                data={data}
                styles={styles}
                config={config}
            />
      </section>
      <div className="questions">
        <p>Questions not answered?</p>
        <button className="contact__us__button">Contact Us</button>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default FAQ