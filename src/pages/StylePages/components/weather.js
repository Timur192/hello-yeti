import React from "react";

const Weather = (props) => {
    return (
        <div>
        { props.temp &&
            <div className="search-boxxx">
                <p>Location: {props.city}, {props.country}</p>
                <p>Temperature: {props.temp}°C</p>
                <p>Humidity: {props.humidity}%</p>
            </div>
        }
        <p>{ props.error }</p>
        </div>
    );
}

export default Weather;