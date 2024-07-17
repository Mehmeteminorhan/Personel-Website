/* eslint-disable no-case-declarations */
import { data } from "../../data";
import { CHANGE_DARK,CHANGE_LANG} from "../actions/actions";



const localStorageWrite = (key,data) => {
    localStorage.setItem(key,JSON.stringify(data));
}

const localStorageRead = (key,defaultValue) => {
    const localValue = JSON.parse(localStorage.getItem(key));
    if(localValue === null){
        localStorageWrite(key,defaultValue);
        return defaultValue;
    }
    return localValue;
}


const inititalState = {
    info: data['tr'],
    mode: localStorageRead('mode',true),
    lang: localStorageRead('lang','eng')
}

export const reducer = (state = inititalState, action) => {

    switch(action.type){
        case CHANGE_DARK:
            const newMode = !state.mode;
            localStorageWrite('mode',newMode);
            return  {
                ...state,
                mode:newMode,
            }
        case CHANGE_LANG:
            const newLang = state.lang === 'tr' ? 'eng' : 'tr';
            localStorageWrite('lang',newLang);
            const newInfo = data[newLang]
            return {
                ...state,
                lang:newLang,
                info:newInfo
            }
        default:
            return state;
    }
}