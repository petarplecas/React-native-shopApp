export const Type = {
    ADD_MOBILE: 'ADD_MOBILE',
    DELETE_MOBILE: 'DELETE_MOBILE',
    SELECT_MOBILE:'SELECT_MOBILE',
    DESELECT_MOBILE: 'DESELECT_MOBILE',
    SET_MOBILE_PROPERTY: 'SET_MOBILE_PROPERTY'
}

export const addMobile = (mobile) => {
    return {
        type: Type.ADD_MOBILE,
        mobile: mobile
    };
};

export const deleteMobile = () => {
    return {
        type: Type.DELETE_MOBILE
    };
};

export const selectMobile = (key) => {
    return {
        type: Type.SELECT_MOBILE,
        mobileKey: key
    };
};

export const deselectMobile = () => {
    return {
        type: Type.DESELECT_MOBILE
    };
};

export const setMobilePropertyInReducer = (name, value) => {
    return (dispatch) => {
        dispatch({
            type: Type.SET_MOBILE_PROPERTY,
            name: name,
            value: value
        })
    }
}