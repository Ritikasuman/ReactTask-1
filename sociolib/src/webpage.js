import Aboutus from './components/AboutUsSection';
import Header from './components/header';
import SectionOne from './components/SectionOne';
import ServicesSection from './components/ServicesSection';
import Contact from './components/contact';
import ValueSection from './components/ValueSection';

import './styles.css';
function  Webpage(){
    return(
     <div className="webpage-container">
       <Header/>
        <div className='initial'>
            <SectionOne/>
            <Aboutus/>
            <ServicesSection/>
            <ValueSection/>
            <Contact/>
        </div>
    </div>
    )
}

export default Webpage