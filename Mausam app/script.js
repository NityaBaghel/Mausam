const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey= "9fd649741b9c9fd242be70434a8bd9ee";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".icon");
const weathericon=document.querySelector(".weathericon");


async function checkWeather(city){
  const response=await fetch(apiurl + city + `&appid=${apiKey}`);
  var data = await response.json();
  // console.log(data);

  document.querySelector("h3").innerHTML=data.name;
  document.querySelector("h1").innerHTML=Math.round(data.main.temp) + "°C";
  if(data.weather[0].main=="Mist")
  {
    weathericon.src="https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.png ";
  }
  else if(data.weather[0].main=="Clear")
  {
    weathericon.src="https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png"
  }
  else if(data.weather[0].main=="Rain")
  {
    weathericon.src="https://cdn2.iconfinder.com/data/icons/weather-filled-outline-3/64/weather07-512.png"
  }
  else if(data.weather[0].main=="Drizzle")
  {
    weathericon.src="https://cdn-icons-png.flaticon.com/512/4837/4837678.png "
  }
  else if(data.weather[0].main=="Haze")
  {
    weathericon.src="https://cdn-icons-png.flaticon.com/512/1779/1779807.png"
  }
  else if(data.weather[0].main=="Mist")
  {
    weathericon.src="https://cdn-icons-png.flaticon.com/512/175/175872.png"
  }
  else if(data.weather[0].main=="Clouds")
  {
    weathericon.src=" https://cdn-icons-png.flaticon.com/512/4834/4834559.png"
  }

}


searchBtn.addEventListener("click",function(){
  checkWeather(searchBox.value);
})