import Header from "../components/Header";
import Intro from "../components/Intro";
import Yetenekler from "../components/Yetenekler";
import TopHeader from "../components/TopHeader";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function HireMe () {

    return (
        <div>
            <div className="flex flex-col lg:gap-20 py-12 lg:px-20 md:px-10 sm:gap-12 sm:px-8 xs:gap-8 xs:px-4 xs:py-8 dark:bg-d-body bg-white" >
                <Header/> 
                <TopHeader/>
                <Intro/>
                <Yetenekler/>
                <Profile/>
                <Projects/>
            </div>
            <Footer/>
            
        </div>
        
    )
}