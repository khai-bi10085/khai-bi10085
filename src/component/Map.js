import React from 'react'

import { GoogleMap, LoadScript } from '@react-google-maps/api'

const containerStyle = {
    width: '744.6px',
    height: '468.28px'
};

const center = {
    lat: 21.00889011727943,
    lng: 105.85715523969797
};
function Map() {
    return (
        <LoadScript googleMapsApiKey='AIzaSyD9g_2JsZ8pgpLwXSnbMu6Cd9cj_lxsAbU'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}>

                </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map);