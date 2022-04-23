import React from 'react';
import '../App.css';
import './StylePages/weatherstyle.css';
import Info from './StylePages/components/info';
import Form from './StylePages/components/form';
import Weather from './StylePages/components/weather';

const API_KEY = "993c45c3a766beaf0255e02626c0afb6"

class Weatherpage extends React.Component {

  state={
    temp: undefined,
    city: undefined,
    humidity: undefined,
    country: undefined,
    console: undefined, 
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);

    if(city) {
    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      error: undefined
    });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        humidity: undefined,
        country: undefined,
        console: undefined,
        error: "Enter the name of the city"
      });
    }
  }
    render() {
      return (
        <div className='App-header'>
          <div className='search-boxx'> 
         <Info />
         <Form  weatherMethod={this.gettingWeather}/>
         <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          humidity= {this.state.humidity}
          error={this.state.error}
         />
         </div>
        </div>
    );
  }
}

export {Weatherpage}