import React, { Component } from 'react';
import Header from "./Components/Header/Header";
//import TwitterCard from "./Components/TwitterCard/TwitterCard";
import Wrapper from "./Components/Wrapper/Wrapper";
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
        city:""
    };
  }

  async componentDidMount() {
    //Initializing stuff
    await this.findIP();
  }

  findIP = () => {
    console.log(process.env.REACT_APP_IPSTACK_ACCESS_KEY)
    let IP_URL='http://api.ipstack.com/check?access_key='+process.env.REACT_APP_IPSTACK_ACCESS_KEY
    console.log(IP_URL);
    axios.get(IP_URL)
      .then(res => {
        console.log("Axios IP", res.data)
        this.setState({city: res.data.city})
        console.log("city is:", this.state.city)
        this.callWeatherAPI(this.state.city); 
      })
      .catch(error => {
        this.setState({error})
      })
  }

  callWeatherAPI = city =>
  {
    let URL = 'http://api.openweathermap.org/data/2.5/forecast?appid='+process.env.REACT_APP_OPENWEATHER_APPID+'&lang=en&units=metric&q='+city;
    axios.get (URL)
      .then(res => {
        console.log("Axios weather:", res.data)
      })
      .catch(error => {
        this.setState({error})
      });
  }

  render() {
    let variable = 30;
    return (
      <div className="App">
      <Wrapper>
        <Header />
            <p>yo</p>
        </Wrapper>
    </div>

    );
  }
}

export default App;
