//react redux reducer and actions 

export const CHANGE_DARK = 'CHANGE_DARK';
export const CHANGE_LANG = 'CHANGE_LANG';


export const darkChange = () => {
    return {type: CHANGE_DARK}
};

export const langChange = () => {
    return {type: CHANGE_LANG}
};
