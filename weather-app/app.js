const getGeoCoding = require('./utils/geocode')
const getForecast = require('./utils/forecast')

getGeoCoding('Boston', (place, lon, lat)=>{
  getForecast(lon, lat, 'us', 'en', (temperature, precipProb, daily)=>{
    console.log(place)
    console.log(`${daily.summary} It's currently ${Math.round(temperature)} degrees.`)
  })
})