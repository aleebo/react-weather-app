import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container">
      <div className="background">
        <div className="weather-app-wrapper" id="weather-app">
          <form id="search-form" class="mb-3">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Search for a city..."
                  autoFocus="on"
                  className="form-control"
                  id="city-input"
                  autoComplete="off"
                />
              </div>
              <div className="col-6">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                  id="search-submit"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="overview">
          <div className="row">
            <ul className="col-9" id="main">
              <h1>
                <span id="city">Seoul</span>
              </h1>
              <li>
                <span className="date"> Sunday, 9:53am</span>
              </li>
              <li>
                <span className="description"> Sunny</span>
              </li>
            </ul>
            <br />
            <div className="row">
              <div className="col-3">
                <div className="clearfix weather-temperature">
                  <h2>
                    <span id="temperature-element">25</span>
                    <span className="temperature">°C </span>

                    <img
                      src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                      alt=""
                      id="main-icon"
                      className="float-right"
                    />
                  </h2>
                  <div className="col-6">
                    <ul>
                      <li>
                        Humidity:
                        <span className="humidity" id="humidity">
                          60
                        </span>
                        %
                      </li>
                      <li>
                        Wind:
                        <span className="wind" id="wind">
                          1
                        </span>
                        km/hr
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="forecast" id="forecast"></div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
