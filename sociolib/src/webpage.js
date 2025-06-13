import Aboutus from './components/AboutUsSection';
import Header from './components/header';
import SectionOne from './components/SectionOne';
import ServicesSection from './components/ServicesSection';
import Contact from './components/contact';
import ValueSection from './components/ValueSection';
import Footer from './components/footer';
import ReviewSection from './components/ReviewSection';
import MSSection from './components/MSSection';

function  Webpage(){
    return(
     <div className="webpage-container">
            <Header/>
        <div className='initial'>
            <SectionOne/>
            <Aboutus/>
            <ServicesSection/>
            <ReviewSection/>
              <MSSection/>
            <ValueSection/>
            <Contact/>
            <Footer/>
        </div>
    </div>
    )
}

export default Webpage;