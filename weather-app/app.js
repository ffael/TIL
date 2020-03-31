const axios = require('axios')

const url = `https://api.darksky.net/forecast/${process.env.APIKEY}/40.7487727,-73.9849336`

async function getData(){
  try{
    const res = await axios.get(url, { params: { units: 'us', exclude:'flags, minutely, hourly'} })
    const { temperature, precipProbability } = res.data.currently
    const { daily } = res.data
    
    console.log(`${daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
  }catch(err){
    console.log(err)
  }
}

getData()