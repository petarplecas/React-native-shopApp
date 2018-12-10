export const Type = {
    SET_MOBILES: "SET_MOBILES",
    REMOVE_MOBILE: "REMOVE_MOBILE"
}

export const addMobile = (name, description, model) => {
    return dispatch => {
        const mobileData = {
            name: name,
            description: description,
            model: model
        }
        fetch("https://shopapp-7fcf0.firebaseio.com/mobiles.json", {
            method: "POST",
            body: JSON.stringify(mobileData)
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes)
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