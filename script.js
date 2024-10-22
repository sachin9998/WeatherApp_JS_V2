const result = document.getElementById("result");
const city = document.getElementById("city");

async function fetchWeather() {
  const text = city.value;
  console.log(text);

  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q={${text}}&appid=852acd81ef71b13f4d4be2449a167e5f`
  );

  const resp = await data.json();
  console.log(resp);
}
