const axios = require('axios')

async function getForecast(lon, lat, units='us', lang="en", callBack){
  const weatherURL = `https://api.darksky.net/forecast/${process.env.APIKEY}/`
  try{
    const res = await axios.get(`${weatherURL}${lon},${lat}`, { params: { units, exclude:'flags, minutely, hourly', lang } })
    const { temperature, precipProb } = res.data.currently
    const { daily } = res.data

    callBack(temperature, precipProb, daily)
  }catch(err){
    console.log('Error with weather service!')
  }
}

module.exports = getForecast