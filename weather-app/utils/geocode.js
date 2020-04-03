const axios = require('axios')

async function getGeoCoding (location, callBack) {
  const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${process.env.MAPBOXKEY}`

  try{
    const response = await axios.get(geoURL)
    if(response.data.features.length === 0){
      return console.log('Could not find location! Try another search!')
    }

    const place = response.data.features[0].place_name
    const lat = response.data.features[0].center[0];
    const lon = response.data.features[0].center[1];

    callBack(place, lon, lat)

  }catch(err){
    console.log('Unable to connect to weather service!')
  }
}


module.exports = getGeoCoding