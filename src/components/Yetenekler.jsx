import { useSelector } from "react-redux";


/* eslint-disable react/prop-types */
export default function Yetenekler() {
  
  const info = useSelector(myStore=>myStore.info)

  return (
    <div id = 'skills' className="flex flex-col items-start w-full xs:gap-10 ">
    <h2 className="başlık">{info.skills.head}</h2>
    <div className="flex sm:flex-row xs:flex-col justify-between sm:gap-20 xs:gap-8">
        <div className="sm:w-1/3 flex flex-col sm:gap-8 xs:gap-4">
            <h3 className="altbaşlık">Java Script</h3>
            <p className="prdes lg:text-base">{info.skills.desc1}</p>
        </div>
        <div className="sm:w-1/3 flex flex-col sm:gap-8 xs:gap-4">
            <h3 className="altbaşlık">React.Js</h3>
            <p className="prdes lg:text-base">{info.skills.desc2}</p>
        </div>
        <div className="sm:w-1/3 flex flex-col sm:gap-8 xs:gap-4">
            <h3 className="altbaşlık">Node.Js</h3>
            <p className="prdes lg:text-base">{info.skills.desc3}</p>
        </div>
    </div>
    </div>
  )
}
