const apiKey = "467efc4262814654a9c74334250805";

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=yes`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();

        const weatherHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p>${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="weather icon">
            <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
            <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
            <p><strong>Wind:</strong> ${data.current.wind_kph} kph</p>
        `;

        document.getElementById("weatherInfo").innerHTML = weatherHTML;
    } catch (error) {
        document.getElementById("weatherInfo").innerHTML = `<p style="color: #ffdddd;">Error: ${error.message}</p>`;
    }
}
