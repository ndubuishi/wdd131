document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(tempC, windKph) {
  if (tempC <= 10 && windKph > 4.8) {
    return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKph, 0.16) + 0.3965 * tempC * Math.pow(windKph, 0.16)).toFixed(1);
  } else {
    return "N/A";
  }
}

const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);

document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed) + "°C";