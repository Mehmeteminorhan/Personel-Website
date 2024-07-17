import { useSelector } from "react-redux";

export default function TopHeader () {
    
    const info = useSelector(myStore=>myStore.info)

    return (
       <div className="flex justify-between items-center">
    <div className="flex">
        <span className="md:w-16 md:h-16 rounded-full xs:w-8 xs:h-8 dark:bg-btn-purple bg-light-purple">
            <h1 className="font-Inter font-semibold md:text-2xl xs:text-base rotate-[30deg] md:py-4 xs:py-1 text-ş dark:text-purple3 ">MEO</h1></span>
    </div>
    <div className='flex justify-between md:gap-5 xs:gap-2'>
        <a href='#skills' data-cy = 'skills-button' className='md:text-lg font-Inter font-medium 
        text-gray2 cursor-pointer md:py-3 md:px-8 sm:py-1 sm:px-5 xs:text-base'>{info.header.ytkn}</a>
        <a href="#projects" data-cy = 'projects-button' className='md:text-lg font-Inter font-medium 
        text-gray2 cursor-pointer md:py-3 md:px-8 sm:py-1 sm:px-5 xs:text-base'>{info.header.proj}</a>
        <a href="#footer" className='border-solid border-[1px] border-borderC rounded-md md:text-lg font-Inter font-medium 
        text-purple2 cursor-pointer md:py-3 md:px-8 sm:py-1 sm:px-5 xs:text-base bg-white'>{info.header.beni}</a>
    </div>
    </div> 
    )
}