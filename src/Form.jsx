import React, { useState, useEffect } from "react";

function CityList() {
  const [city, setCity] = useState([]); // State to store city data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Replace with a valid OpenWeatherMap API endpoint
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=fc770464b00a1681acc0086adb3d4455')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to Fetch");
        }
        return response.json();
      })
      .then((data) => {
        setCity([data]);  // Assuming data is a single city object, wrap it in an array
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError(error.message); // Set error state if fetch fails
        setLoading(false);
      });
  }, []); // Empty dependency array means it will run once when the component mounts

  if (loading) {
    return <>Loading...</>; // Show loading state
  }

  if (error) {
    return <>Error: {error}</>; // Show error message
  }

  return (
    <div>
      <h1>City List</h1>
      <ul>
        {city.map((cityData, index) => (
          <li key={index}>
            <p>Name: {cityData.name}</p>
            <p>Weather: {cityData.weather[0].description}</p>
            <p>Temperature: {cityData.main.temp}°C</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
