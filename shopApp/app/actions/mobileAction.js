import { uiStartLoading, uiStopLoading } from './uiActions'

export const Type = {
    SET_MOBILES: "SET_MOBILES",
    REMOVE_MOBILE: "REMOVE_MOBILE",
}

export const addMobile = (name, description, model, image) => {
    return dispatch => {
        dispatch(uiStartLoading());
        fetch("https://us-central1-shopapp-7fcf0.cloudfunctions.net/storeImage", {
            method: "POST",
            body: JSON.stringify({
                image: image.base64
            })
        })
        .catch(err => {
            console.log(err);
            alert("Something went wrong, please try again!");
            dispatch(uiStopLoading());
        })
        .then(res => res.json())
        .then(parsedRes => {
        
            const mobileData = {
                name: name,
                description: description,
                model: model,
                image: parsedRes.imageUrl
            };
            
            return fetch("https://shopapp-7fcf0.firebaseio.com/mobiles.json", {
                method: "POST",
                body: JSON.stringify(mobileData)
            })
        })
        .catch(err => {
            console.log(err)
            dispatch(uiStopLoading());
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
            alert("Something went wrong, please try again!");
            dispatch(uiStopLoading());
        })
    };
};

export const getMobiles = () => {
    return dispatch => {
        fetch("https://shopapp-7fcf0.firebaseio.com/mobiles.json")
        .catch(err => {
            alert("Something went wrong :/");
        })
        .then(res => res.json())
        .then(parsedRes => {
            const mobiles = [];
            for(let key in parsedRes) {
                mobiles.push({
                    ...parsedRes[key],
                    image: {
                        uri: parsedRes[key].image
                    },
                    id: key
                })
            }
            dispatch(setMobiles(mobiles))
        })
    }
}

export const setMobiles = mobiles => {
    return {
        type: Type.SET_MOBILES,
        mobiles: mobiles
    }
}

export const deleteMobile = (key) => {
    return dispatch => {
        dispatch(removeMobile(key))
        fetch("https://shopapp-7fcf0.firebaseio.com/mobiles/" + key + ".json", {
            method: "DELETE",
        })
        .catch(err => {
            alert("Something went wrong :/");
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log("Done!");
        })
    }
}

export const removeMobile = key => {
    return {
        type: Type.REMOVE_MOBILE,
        key: key
    }
}