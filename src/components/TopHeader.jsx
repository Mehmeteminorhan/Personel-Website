import { useDispatch, useSelector } from "react-redux";
import { darkChange, langChange } from "../store/actions/actions";

export default function TopHeader (){

    const dispatch = useDispatch();
    const theme = useSelector(myStore => myStore.mode);
    const lang = useSelector(myStore => myStore.lang);

    const changeMode = () => {
        dispatch(darkChange());
        if (localStorage.getItem('mode') === 'false'){
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }        
    }
    
    const changeLang = () =>{
        dispatch(langChange());
    }

    return (
        <div className="flex justify-end">
            <div className= "flex sm:gap-5 xs:gap-2 items-center"> {/*küçük ekranlar için değer* değer 5birim xsler için 2 birim */ }
                <div className="flex items-center">
                    <label data-cy = 'dark-button' className="relative inline-flex items-center cursor-pointer sm:gap-2 xs:gap-1">
                        <input type="checkbox" className="sr-only peer" checked = {theme} onChange={changeMode}/>
                        <div className="sm:w-12 sm:h-5 xs:w-6 xs:h-3 bg-black1 rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
                         sm:peer-checked:after:translate-x-7 xs:peer-checked:after:translate-x-3 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-pink after:content-[''] 
                        after:absolute sm:after:top-1 xs:after:top-[2px] sm:after:start-[1px] xs:after:start-0 after:bg-yellow after:border-black after:border after:rounded-full sm:after:h-4 sm:after:w-4 xs:after:h-3 xs:after:w-3 after:transition-all
                        dark:border-gray-600 peer-checked:bg-btn-purple"></div>
                        <span className="font-Inter sm:text-base xs:text-xs font-bold dark:text-t-white text-gray">
                            {lang==='eng' ? (theme ? 'DARK MODE' : 'LIGHT MODE') : theme ? 'KARANLIK MOD' : 'AYDINLIK MOD'}
                        </span>
                    </label>
                </div>
                <div className="font-Inter sm:text-base xs:text-xs font-bold text-gray">
                    |
                </div>
                <div>
                    <div onClick={changeLang} data-cy= 'lang-button' className="font-Inter sm:text-base xs:text-xs font-bold dark:text-t-lilac text-purple">
                        {lang === 'eng' ? (<span className="cursor-pointer">TÜRKÇE</span>) :
                        (<span className="text-gray">SWITCH TO</span>)}
                        {lang === 'eng' ? <span className="text-gray>">'YE GEÇ</span> : <span className="cursor-pointer">ENGLISH</span> }
                    </div>
                </div>
            </div>
        </div>
    )
}

