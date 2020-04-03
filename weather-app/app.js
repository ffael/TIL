const axios = require('axios')

async function getGeoCoding (location, callBack) {
  const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${process.env.MAPBOXKEY}`

  try{
    const response = await axios.get(geoURL)
    if(response.data.features.length === 0){
      return console.log('Could not find location! Try another search!')
    }

    const place = response.data.features[0].place_name
    const lat = response.data.features[0].center[0];
    const lon = response.data.features[0].center[1];

    callBack(place, lat, lon)

  }catch(err){
    console.log('Unable to connect to weather service!')
  }
}

async function getData(location, units='us', lang="en"){
  const weatherURL = `https://api.darksky.net/forecast/${process.env.APIKEY}/`
  getGeoCoding(location , async (place, lat, lon)=>{
    try{
      const res = await axios.get(`${weatherURL}${lon},${lat}`, { params: { units, exclude:'flags, minutely, hourly', lang } })
  
      const { temperature, precipProbability } = res.data.currently
      const { daily } = res.data
      
      console.log(place)
      console.log(`${daily.data[0].summary} It is currently ${Math.round(temperature)}degrees out. There is a ${precipProbability}% chance of rain.`)
    }catch(err){
      console.log('Error with weather service!')
    }
  })
  
}

getData('Boston', 'us', 'en')