class Weather{
  static getWeather = async (q='')=>{
    const APPID = 'f33a484cf794d08d0148764789aaba32';
    const url = `https://api.openweathermap.org/data/2.5/weather?APPID=${APPID}&q=${q}&units=metric`;
    return fetch(url,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
  }
}

export default Weather;
