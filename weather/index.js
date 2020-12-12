const axios = require('axios');
const apiKey = process.env.WEATHERAPIKEY;

async function getWeather(townName) {
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${townName}&units=metric&appid=${apiKey}`;

    try {
      const result = await axios(endpoint);
      const data = result.data;
      // console.log(data);
      return data;
    }
    catch (error) {
      return "{Error in getting weather data}";
    }
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function Weather processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    let response = "";

    if (name) {
        response = await getWeather(name);
    }
    else {
        response = "Please enter an argument like ?name=Munich to retrieve the weather from this town";
    }
    
    context.res = {
        body: response
    };
}