import githubLight from "../assets/github.svg";
import LinkedInLight from "../assets/LinkedIn.svg";
import githubDark from "../assets/githubDark.svg";
import LinkedInDark from "../assets/LinkedInDark.svg";
import { useDispatch, useSelector } from "react-redux";
import MEO from '../assets/MEO.jpg'

export default function Intro() {
    

    const dispatch = useDispatch();
    const theme = useSelector(myStore => myStore.mode);
    const lang = useSelector(myStore => myStore.lang);
    const info = useSelector(myStore => myStore.info)

    return (
        <div className="flex justify-between sm:flex-row h-2/5 md:gap-20 items-center md:mb-20 xs:gap-8 xs:flex-col">
            <div className="flex flex-col lg:w-7/12 h-6/12 md:gap-10 md:w-9/12 xs:gap-2"> 
                <div className="flex items-center md:gap-4 xs:gap-2">
                    <hr className="border-solid border-[1px]  w-24 dark:text-t-lilac dark:border-lilac text-purple border-borderC"/>
                    <p className="font-Inter font-medium font md:text-xl xs:text-base dark:text-t-lilac text-purple">Mehmet Emin ORHAN</p>
                </div>
                <h1 className="font-Inter font-bold lg:text-7xl text-left md:text-3xl sm:text-2xl xs:text-lg dark:text-h1 text-black">{info.hero.head}</h1>
                <p className="font-normal font-Inter lg:text-lg text-left md:text-sm xs:text-xs dark:text-white text-gray2">{info.hero.desc}</p>
                <div className="flex lg:gap-6 items-start xs:gap-4">
                    <button onClick={()=>history.push("/contact")} data-cy="contact-button" className="border-solid border-[1px] bg-borderC dark:bg-btn-lilac rounded-md lg:text-lg font-Inter lg:font-medium dark:text-r-black text-white cursor-pointer lg:py-3 lg:px-8 md:text-base md:py-[9px] md:px-2 xs:text-sm xs:px-2 xs:py-2">{info.hero.button}</button>
                    <a href="https://github.com/sevvalaksoy" className="border-solid border-[1px] dark:border-btn-lilac border-borderC  dark:bg-btn-bcg dark:text-btn-lilac flex items-center lg:gap-2 rounded-md lg:text-lg font-Inter font-medium text-purple2 cursor-pointer lg:py-3 lg:px-4 md:py-2 md:px-2 md:gap-1 xs:text-sm xs:px-2 xs:py-[3.5px] xs:gap-1">
                    {theme?<img src={githubLight}/>:<img src={githubDark}/>} Github</a>
                    <a href="https://www.linkedin.com/in/şevval-aksoy-8a54811b9/" className="border-solid border-[1px] border-borderC dark:text-btn-lilac flex items-center lg:gap-2 rounded-md lg:text-lg font-Inter font-medium text-purple2 cursor-pointer lg:py-3 lg:px-4 md:py-2 md:px-2 md:gap-1 xs:text-sm xs:px-2 xs:py-[4px] xs:gap-1 dark:border-btn-lilac dark:bg-btn-bcg "> 
                    {theme?<img src={LinkedInLight}/>:<img src={LinkedInDark}/>}Linkedin</a>
                </div>
            </div>
            <div className="lg:w-5/12 lg:h-6/12 md:w-6/12 md:h-4/6 sm:w-full sm:h-full"> 
                <img className="object-cover rounded-2xl" src={MEO}/>
            </div>
        </div>
    )

}