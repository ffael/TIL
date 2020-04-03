const getGeoCoding = require('./utils/geocode')
const getForecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
  console.log('Please provide a valid address!')
}else{
  getGeoCoding(address, (place, lon, lat)=>{
    getForecast(lon, lat, 'us', 'en', (temperature, daily)=>{
      console.log(place)
      console.log(`${daily.summary} It's currently ${Math.round(temperature)} degrees.`)
    })
  })
}
