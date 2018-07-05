import React from 'react'; // import React from the 'react package' that's in package.json
// import Bloomer from 'bloomer';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "28f1851bcf3dff53a03ebef5540086ff";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    clouds: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault(); // prevent default behavior of component (prevents full page refresh)

    const zip = e.target.elements.zip.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${zip},us&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json(); // converts API call to json format

    if (zip) { // if zip is present, code will run
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        clouds: data.clouds.all,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather.icon, // weather[1]
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        clouds: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: "Aye, yer missin' stuff."
      });
    }
  }

  render() {
    return (
      <div>

        <div className="Titles">
          <Titles />
        </div>

        <div className="Form">
          <Form getWeather={this.getWeather} />
        </div>

        <div className="Weather">
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            clouds={this.state.clouds}
            humidity={this.state.humidity}
            description={this.state.description}
            icon={this.state.icon}
            error={this.state.error}
            />
        </div>

      </div>
    );
  }
};


export default App;
