import Aboutus from './components/AboutUsSection';
import Header from './components/header';
import SectionOne from './components/SectionOne';
import Sponsor from './components/SponsorSection';

import './styles.css';
function  Webpage(){
    return(
     <div className="webpage-container">
       <Header/>
        <div className='initial'>
            <SectionOne/>
            <Sponsor/>
            <Aboutus/>
        </div>
    </div>
    )
}

export default Webpage