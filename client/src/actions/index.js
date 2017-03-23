

export const CURRENT_TIME = 'CURRENT_TIME';
export const currentTime = (hour, minutes, date) => ({
    type: CURRENT_TIME,
    date,
    hour,
    minutes,
});



export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = (payload) => ({
    type: FETCH_DATA_SUCCESS,
    payload

});

export const FETCH_DATA_ERROR= 'FETCH_DATA_ERROR';
export const fetchDataError = ( error) => ({
    type: FETCH_DATA_ERROR,
    error
});

export const FETCH_SKY_SUCCESS = 'FETCH_SKY_SUCCESS';
export const fetchSkySuccess = ( results ) => ({
    type: FETCH_SKY_SUCCESS,
    results

});

export const FETCH_SKY_ERROR= 'FETCH_SKY_ERROR';
export const fetchSkyError = ( error) => ({
    type: FETCH_SKY_ERROR,
    error
});

export const PAINT_SKY = 'PAINT_SKY';
export const paintSky = (hour, background ) => ({
    type: FETCH_SKY_SUCCESS,
    hour,
    background
});



export const fetchData = () => dispatch => {
    const url = `http://api.wunderground.com/api/fbb8fb3eb8e05269/astronomy/forecast/q/IL/Chicago.json`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response.json();
        console.log(response.json);
    })
    .then(data => dispatch(fetchDataSuccess(data)))
};

export const fetchSky = () => dispatch => {
    const url = `http://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response.json();
        console.log(response.json);
    })
    .then(data => dispatch(fetchSkySuccess(data)))
};
