import { useSelector } from "react-redux"


export default function Profile () {

    const info = useSelector(myStore=>myStore.info)

    return (
        <div className="flex flex-col items-start w-full gap-10">
            <hr className="hrline"/>
            <h2 className="başlık">{info.profile.head}</h2> 
            <div className="w-full flex xs:gap-2 sm:flex-row xs:flex-col">
                <div className="sm:w-1/2 flex flex-col gap-6 xs:pb-4">
                    <h3 className="altbaşlık">{info.profile.h21}</h3>
                    <div className="flex xs:gap-4 lg:gap-10">
                        <div className="flex flex-col gap-6">
                            <h4 className="font-Inter font-semibold lg:text-lg md:text-sm sm:text-xs text-left text-nowrap dark:text-white text-black">{info.profile.b1}</h4>
                            <h4 className="font-Inter font-semibold lg:text-lg md:text-sm sm:text-xs text-left text-nowrap  dark:text-white text-black">{info.profile.b2}</h4>
                            <h4 className="font-Inter font-semibold lg:text-lg md:text-sm sm:text-xs text-left text-nowrap  dark:text-white text-black">{info.profile.b3}</h4>
                            <h4 className="font-Inter font-semibold lg:text-lg md:text-sm sm:text-xs text-left text-nowrap lg:pt-0 md:pt-5 sm:pt-4 xs:pt-6  dark:text-white text-black">{info.profile.b4}</h4> 
                        </div>
                        <div className="flex flex-col gap-6 ">
                            <p className="font-Inter font-normal lg:text-lg md:text-sm sm:text-xs text-left  dark:text-white text-black">{info.profile.c1}</p>
                            <p className="font-Inter font-normal lg:text-lg md:text-sm sm:text-xs text-left  dark:text-white text-black">{info.profile.c2}</p>
                            <p className="font-Inter font-normal lg:text-lg md:text-sm sm:text-xs text-left  dark:text-white text-black">{info.profile.c3}</p>
                            <p className="font-Inter font-normal lg:text-lg md:text-sm sm:text-xs text-left  dark:text-white text-black">{info.profile.c4}</p> 
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 flex flex-col gap-6">
                    <h3 className="altbaşlık">{info.profile.h22}</h3>
                    <p className="font-Inter font-normal lg:text-lg md:text-base text-left sm:text-xs dark:text-white text-gray2">{info.profile.des1}</p>
                    <p className="font-Inter font-normal lg:text-lg md:text-base text-left sm:text-xs dark:text-white text-gray2">{info.profile.des2}</p>
                </div>
            </div>
        </div>
    )
}