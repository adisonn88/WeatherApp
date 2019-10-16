import React from 'react';
import Form from './Form'
import Result from './Result'

class App extends React.Component() {

    state = {
      value: "",
      date:"",
      city:"",
      sunrise:"",
      sunset:"",
      temp:"",
      pressure:"",
      wind:"",
      err: false
    }

handleInputChange = (e) => {
  this.setState({
    value: e.target.value
  })
}

handleCitiSubmit = (e) => {
  e.preventDefault()
  const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}`

    fetch(API)
      .then(response =>{
        if(response.ok){
          return response
        }
        throw Error("Błąd")
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString()
        this.setState({
          err: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.main.wind.speed,
          city: this.state.value
        })
      })
      .catch(err =>{
        this.setState({
          err: true,
          city: this.state.value
        })
      })
}

render(){
  return (
      <div className="App">
        <Form 
          value={this.state.value} 
          change={this.handleInputChange} 
          submit={this.handleCitiSubmit}
        />
        <Result weather={this.state}/>
      </div>
    );
  }
}

export default App;
