import React from "react";
import './App.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './components/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_key = "7e035e66fe28abe89b42fa0d60f2d894"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description:"",
      error: false
    };

    this.weatherIcon={
      Clear:"wi-day-sunny",
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clouds:"wi-day-fog"
    };
  }

  calCelsius(temp){
    let cell=Math.floor(temp - 273.15)
    return cell;
  }

get_WeatherIcon(icons,rangeId){
  switch(true){
    case rangeId>=200 && rangeId<=232:
      this.setState({icon:this.weatherIcon.Thunderstorm});
      break;
    case rangeId>=300 && rangeId<=321:
      this.setState({icon:this.weatherIcon.Drizzle});
      break;
    case rangeId>=500 && rangeId<=531:
      this.setState({icon:this.weatherIcon.Rain});
      break;
    case rangeId>=600 && rangeId<=622:
      this.setState({icon:this.weatherIcon.Snow});
      break;
    case rangeId>=700 && rangeId<=622:
      this.setState({icon:this.weatherIcon.Atmosphere});
      break;
    case rangeId>=800 && rangeId<=800:
      this.setState({icon:this.weatherIcon.Clear});
      break;
    case rangeId>=801 && rangeId<=804:
      this.setState({icon:this.weatherIcon.Atmosphere});
      break;
    default:
      this.setState({icon:this.weatherIcon.Atmosphere});
  }
}


  getWeather = async (e) =>{
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;


    if(city && country){
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
  
    const response = await api_call.json();

  console.log(response);

  this.setState({
    city:`${response.name},${response.sys.country}`,
    celsius: this.calCelsius(response.main.temp),
    temp_max:this.calCelsius(response.main.temp_max),
    temp_min:this.calCelsius(response.main.temp_min),
    description:response.weather[0].description,
  });


  this.get_WeatherIcon(this.weatherIcon, response.weather[0].Id);
  }else{
    this.setState({error:true});
  }
  };

  render() {
    return(
      <div className="App">
        <Weather city={this.state.city} 
        loadweather={this.getWeather} 
        error={this.state.error}
        country={this.state.country} 
        temp_celsius={this.state.celsius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}
        />
        
      </div>
    ); 
  }
}


export default App;
