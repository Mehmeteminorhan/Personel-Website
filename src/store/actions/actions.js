//react redux reducer and actions 

import { API } from "../../api/api";

export const CHANGE_DARK = 'CHANGE_DARK';
export const CHANGE_LANG = 'CHANGE_LANG';
export const CHANGE_DATA = "CHANGE_DATA";


export const darkChange = () => {
    return {type: CHANGE_DARK}
};

export const langChange = () => {
    return {type: CHANGE_LANG}
};

export const changeData = (data) => {
    return {type: CHANGE_DATA, payload: data}
}


export const fetchData = (creds) => async (dispacth) => {
    return API
        .post("data", creds )
        .then((res)=>dispacth(changeData(res.data)))
        .catch((err)=>console.warn(err))
}

// 