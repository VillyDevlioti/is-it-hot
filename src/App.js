import React, { Component } from 'react';
import Header from "./Components/Header/Header";
import WeatherCard from "./Components/WeatherCard/WeatherCard";
import Wrapper from "./Components/Wrapper/Wrapper";
import Footer from "./Components/Footer/Footer";
import './App.css';
//import ReactWeather from 'react-open-weather';
//Optional include of the default css styles
import 'react-open-weather/lib/css/ReactWeather.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        temperature: "",
        city:"", 
        animation: "",
        isHot: false,
        isOK: false,
        isCold: false
    };
  }

  async componentDidMount() {
    //Initializing stuff
    await this.findIP();
  }

  //this function autodetects IP and location
  findIP = () => {
    let IP_URL='http://api.ipstack.com/check?access_key='+process.env.REACT_APP_IPSTACK_ACCESS_KEY
    axios.get(IP_URL)
      .then(res => {
        this.setState({city: res.data.city})
        this.callWeatherAPI(this.state.city); 
      })
      .catch(error => {
        this.setState({error})
      })
  }

  //this function finds weather information based on your location
  callWeatherAPI = city =>
  {
    let weather_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid='+process.env.REACT_APP_OPENWEATHER_APPID+'&lang=en&units=metric&q='+city
    axios.get(weather_URL)  
      .then(res => {
        this.contextualMessaging(res.data.list[0].main.temp)
      })
      .catch(error => {
        this.setState({error})
      });
  }

  //this function defines weather if f*cking hot, cold or okay outside
  contextualMessaging = temp => {
    if (temp>25)
      this.setState({isHot: true, animation: "flash"})
    else if (15<=temp<=25)
      this.setState({isOK: true, animation: "tada"})
    else if (temp<15)
      this.setState({isCold: true, animation: "shakeX"})
  }

  render() {
    let card;
    if (this.state.isHot)
    {
      card = <WeatherCard text="It's Fucking Hot" animation={this.state.animation} city={this.state.city}/>
    }
    else if (this.state.isOK)
    {
      card = <WeatherCard text="It's Fucking OK" animation={this.state.animation} city={this.state.city}/>
    }
    else if (this.state.isCold)
    {
      card = <WeatherCard text="It's Fucking Cold" animation={this.state.animation} city={this.state.city}/>
    }

    return (
      <div className="App">
      <Wrapper>
        <Header />
            {card}
        </Wrapper>
        <Footer />
    </div>

    );
  }
}

export default App;
