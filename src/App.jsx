import Brands from './components/Brands.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingButtons from './components/FloatingButtons.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import MobileActions from './components/MobileActions.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import Services from './components/Services.jsx';
import WhyUs from './components/WhyUs.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Brands />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollToTopButton />
      <MobileActions />
    </>
  );
}

export default App;
