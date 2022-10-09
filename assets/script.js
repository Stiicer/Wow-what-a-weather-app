var search = document.getElementById("city-search");
var confirmSearch = document.getElementById("search-button");
var displayCurrent = document.getElementById("current-forecast");
var saveCity = document.getElementById("past-search");
var historyCheck = document.getElementById("history-button");
var displayForecast = document.getElementById("fivedayforecast");



var cityInput = localStorage.getItem("city");





function getWeather(event){
   
    let cityInput = search.value;
    
    localStorage.setItem("city",cityInput);




 fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityInput+"&units=imperial&appid=675b2f973376bcfe73b9ce50c15df6d0")
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(data){
    displayCurrent.textContent=" "
    var temp=data.main.temp;
    var wind=data.wind.speed;
    var humidity=data.main.humidity;
    var icon = data.weather[0].icon;
    console.log(data);
    console.log(temp);

    displayCurrent.innerHTML += `<h6>City</h6>${data.name}<h6>Temp:</h6> ${temp} °F
    <h6>Wind:</h6>${wind}mph
    <h6>Humidity:</h6>${humidity}%
    <img src="http://openweathermap.org/img/wn/${icon}.png"></img>`;

  saveCity.innerHTML +=`<button id="history-button">${cityInput}</button>`
  
 
});

}

function oldSearch(e){

   console.log(e.target);

    let cityInput = e.target.textContent;
    
    localStorage.setItem("city",cityInput);




 fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityInput+"&units=imperial&appid=675b2f973376bcfe73b9ce50c15df6d0")
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(data){
    displayCurrent.textContent=" "
    var temp=data.main.temp;
    var wind=data.wind.speed;
    var humidity=data.main.humidity;
    var icon = data.weather[0].icon;
    console.log(data);
    console.log(temp);

    displayCurrent.innerHTML += `<h6>City</h6>${data.name}<h6>Temp:</h6> ${temp} °F
    <h6>Wind:</h6>${wind}mph
    <h6>Humidity:</h6>${humidity}%
    <img src="http://openweathermap.org/img/wn/${icon}.png"></img>`;
    

    

  
 
});

fetch("https://api.openweathermap.org/data/2.5/forecast?q="+cityInput+"&units=imperial&appid=675b2f973376bcfe73b9ce50c15df6d0")
.then(function(response){
    console.log(response);
    return response.json();

})
.then(function(data){  
    displayForecast.textContent= " ";
    var j=6;
    for(var i = 0; i<5; i++){
       
    var date= data.list[j].dt_txt;
    var temp = data.list[j].main.temp;
    var wind = data.list[j].wind.speed;
    var humidity = data.list[j].main.humidity;
    var icon = data.list[j].weather[0].icon;
    displayForecast.innerHTML += 
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="forecast-title">${date}</h5>
      <p>Temp:${temp}°F</p>
      <p>Wind:${wind}mph</p>
      <p>Humidity:${humidity}%</p>
      <img src="http://openweathermap.org/img/wn/${icon}.png"></img>
    </div>`
    console.log(data);
    j = j+8;
    }
  

});
}








function getFiveDay(event){


fetch("https://api.openweathermap.org/data/2.5/forecast?q="+cityInput+"&units=imperial&appid=675b2f973376bcfe73b9ce50c15df6d0")
.then(function(response){
    console.log(response);
    return response.json();

})
.then(function(data){  
    displayForecast.textContent= " ";
    var j=6;
    for(var i = 0; i<5; i++){
       
    var date= data.list[j].dt_txt;
    var temp = data.list[j].main.temp;
    var wind = data.list[j].wind.speed;
    var humidity = data.list[j].main.humidity;
    var icon = data.list[j].weather[0].icon;
    displayForecast.innerHTML += 
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="forecast-title">${date}</h5>
      <p>Temp:${temp}°F</p>
      <p>Wind:${wind}mph</p>
      <p>Humidity:${humidity}%</p>
      <img src="http://openweathermap.org/img/wn/${icon}.png"></img>
    </div>`
    console.log(data);
    j = j+8;
    }
  
});


}


confirmSearch.addEventListener("click",getWeather);
confirmSearch.addEventListener("click",getFiveDay);
saveCity.addEventListener("click",oldSearch);
