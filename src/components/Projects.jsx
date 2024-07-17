import { useSelector } from "react-redux"


export default function Projects () {

    const info = useSelector(myStore=>myStore.info)

    return (
        <div id = 'projects' className="flex flex-col items-start w-full gap-10 py-12">
            <hr className="hrline"/>
            <h2 className="başlık">{info.projects.head}</h2> 
            <div className="w-full flex sm:flex-row xs:flex-col justify-between sm:gap-4 xs:gap-20"> 
                <div className="flex flex-col items-start sm:w-[30%] gap-4">
                    <img src={"/proje2.png"} className="md:w-full md:h-80 sm:h-40 "/>
                    <h3 className="altbaşlık">{info.projects.p1}</h3> 
                    <p className="prdes">{info.projects.c1}</p>
                    <div className="flex lg:gap-4 md:gap-2 xs:gap-1">
                        <button className="prbutton">react</button>
                        <button className="prbutton">redux</button>
                        <button className="prbutton">axios</button>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className="prsite" href="https://github.com/sevvalaksoy/fsweb-s10g2-redux-filmler-solution">Github</a>
                        <a className="prsite" href="https://fsweb-s10g2-redux-filmler-solution-kohl.vercel.app/movies">{info.projects.site}</a>
                    </div>
                </div>
                <div className="flex flex-col items-start sm:w-[30%] gap-4 ">
                    <img src={"/pizza.png"} className="md:w-full md:h-80 sm:h-40" />
                    <h3 className="altbaşlık">{info.projects.p2}</h3> 
                    <p className="prdes">{info.projects.c2}</p>
                    <div className="flex lg:gap-4 md:gap-2 xs:gap-1">
                        <button className="prbutton">react</button>
                        <button className="prbutton">redux</button>
                        <button className="prbutton">axios</button>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className="prsite" href="https://github.com/sevvalaksoy/S7PizzaChallenge">Github</a>
                        <a className="prsite" href="https://s7-pizza-challenge.vercel.app/">{info.projects.site}</a>
                    </div>
                </div>
                <div className="flex flex-col items-start sm:w-[30%] gap-4">
                    <img src={"/proje3.png"} className="md:w-full md:h-80 sm:h-40"/>
                    <h3 className="altbaşlık">{info.projects.p3}</h3>
                    <p className="prdes">{info.projects.c3}</p>
                    <div className="flex lg:gap-4 md:gap-2 xs:gap-1">
                        <button className="prbutton">react</button>
                        <button className="prbutton">redux</button>
                        <button className="prbutton">axios</button>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className="prsite" href="https://github.com/sevvalaksoy/FSWeb-S9-Sprint-Challenge-solution">Github</a>
                        <a className="prsite" href="https://fsweb-s9-sprint-challenge-solution-1-p9nc.onrender.com/">{info.projects.site}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}