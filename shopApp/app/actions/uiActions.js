export const Type = {
    UI_START_LOADING: "UI_START_LOADING",
    UI_STOP_LOADING: "UI_STOP_LOADING"
}

export const uiStartLoading = () => {
    return {
        type: Type.UI_START_LOADING
    };
};

export const uiStopLoading = () => {
    return {
        type: Type.UI_STOP_LOADING
    };
};