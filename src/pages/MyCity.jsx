import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Координати Умані: Latitude: 48.7484, Longitude: 30.2215
        const response = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=48.7484&longitude=30.2215&current_weather=true'
        );
        setWeather(response.data.current_weather);
        setLoading(false);
      } catch (error) {
        console.error("Помилка завантаження погоди:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="page fade-in">
      <h1>Моє місто: Умань, Україна 🇺🇦</h1>
      
      <div className="city-info">
        <p>
          <strong>Умань</strong> — місто в Черкаській області, розташоване в центральній частині України. 
          Воно відоме на весь світ своїм чудовим Національним дендрологічним парком «Софіївка», який є справжнім шедевром садово-паркового мистецтва. 
          Також місто має багату історію та є важливим культурним центром регіону.
        </p>
      </div>

      <div className="weather-widget">
        <h2>Поточна погода в місті</h2>
        {loading ? (
          <p>Завантаження даних...</p>
        ) : weather ? (
          <div className="weather-data">
            <p><strong>Температура:</strong> {weather.temperature}°C</p>
            <p><strong>Швидкість вітру:</strong> {weather.windspeed} км/год</p>
            <p><strong>Координати:</strong> Широта 48.74°, Довгота 30.22°</p>
            <p><strong>Країна:</strong> Україна</p>
          </div>
        ) : (
          <p>Не вдалося завантажити погоду.</p>
        )}
      </div>
    </div>
  );
};

export default MyCity;