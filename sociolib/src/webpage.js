import Aboutus from './components/AboutUsSection';
import Header from './components/header';
import SectionOne from './components/SectionOne';
import ServicesSection from './components/ServicesSection';

import './styles.css';
function  Webpage(){
    return(
     <div className="webpage-container">
       <Header/>
        <div className='initial'>
            <SectionOne/>
            <Aboutus/>
            <ServicesSection/>
        </div>
    </div>
    )
}

export default Webpage