import Header from "../components/Header";
import TopHeader from "../components/TopHeader";

export default function HireMe () {

    return (
        <div>
            <div className="flex flex-col lg:gap-20 py-12 lg:px-20 md:px-10 sm:gap-12 sm:px-8 xs:gap-8 xs:px-4 xs:py-8 dark:bg-d-body bg-white" > 
                <TopHeader/>
                <Header/>

            </div>
            
        </div>
        
    )
}