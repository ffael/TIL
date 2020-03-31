const axios = require('axios')

const url = `https://api.darksky.net/forecast/${process.env.APIKEY}/37.8267,-122.4233`

async function getData(){
  try{
    const res = await axios.get(url)
    const { temperature, precipProbability } = res.data.currently
    console.log(`It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
  }catch(err){
    console.log(err)
  }
}

getData()