import Brands from './components/Brands.jsx';
import Contact from './components/Contact.jsx';
import ConversionSections from './components/ConversionSections.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import MobileActions from './components/MobileActions.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import SeoSchema from './components/SeoSchema.jsx';
import Services from './components/Services.jsx';
import WhyUs from './components/WhyUs.jsx';

function App() {
  return (
    <>
      <SeoSchema />
      <Header />
      <main>
        <Hero />
        <Services />
        <Brands />
        <Contact />
        <WhyUs />
        <ConversionSections />
      </main>
      <Footer />
      <ScrollToTopButton />
      <MobileActions />
    </>
  );
}

export default App;
