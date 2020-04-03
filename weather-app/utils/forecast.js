const axios = require('axios')
const getGeoCoding = require('./geocode')

async function getForecast(location, units='us', lang="en"){
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

module.exports = getForecast