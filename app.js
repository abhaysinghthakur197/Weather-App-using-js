
const weatherApi= {
     key: "0bbc5b94123e7e582b1a4967445ea0d5",
     baseurl:"https://api.openweathermap.org/data/2.5/weather",
}

const searchValue = document.getElementById('input-box');

searchValue.addEventListener('keypress',temp=(event)=> {
              if(event.keyCode == 13) {
                console.log(searchValue.value)
                weatherreport(searchValue.value)
              }
});

 function weatherreport(city){
     fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
     .then(weather =>{
         return weather.json()
     }).then(showweather);
 }

 function showweather(weather){
     console.log(weather)

     let city = document.getElementById("city-name")
     city.innerHTML = `${weather.name},${weather.sys.country}`

     let temp=document.getElementById("temp")
     temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

     let min = document.getElementById("min-max")
     min.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C(min) / ${Math.ceil(weather.main.temp_max)}&deg;C(max)`

    let weatherStatus = document.getElementById("weather1")
    weatherStatus.innerHTML =  `${weather.weather[0].main}`

    let time = document.getElementById("date");

    if(weatherStatus.textContent == 'Clean'){
       document.querySelector(".weather-app").style.backgroundImage="url(img/clean.jpg)";
    }else if(weatherStatus.textContent == 'Haze'){
        document.querySelector(".weather-app").style.backgroundImage="url(img/haze.jpg)"
    } else if(weatherStatus.textContent == 'Clouds')
    {
        document.querySelector(".weather-app").style.backgroundImage= "url(img/cloud.jfif)"
                }else if(weatherStatus.textContent=='Rain'){
        document.querySelector(".weather-app").style.backgroundImage="url(img/rain.png)"
        
    } else if(weatherStatus.textContent=='Mist'){
        document.querySelector(".weather-app").style.backgroundImage="url(img/mist.jpg)"
        
    }else if(weatherStatus.textContent=='Drizzle'){
        document.querySelector(".weather-app").style.backgroundImage="url(img/drizzle.jpg)"
         
    }else if(weatherStatus.textContent=='Smoke')
    {
        document.querySelector(".weather-app").style.backgroundImage="url(img/mist.jpg)"
         
    } 


  
    
 }

 window.onload = function(){   
     
    let data = document.getElementById("date");

       let todaydate = new Date();
       dateToday(todaydate)

        function  dateToday(todaydate)
        {
         let days =['Sunday','Monday','Tuesday','wednesday','Thursday','friday','saturday'];
    
          let year = todaydate.getFullYear();
          let month = todaydate.getMonth()+1;
          let dates = todaydate.getDate();
          let day= days[todaydate.getDay()]
          let hour= todaydate.getHours();
          let minute = todaydate.getMinutes();
        //   /let second = todaydate.getSeconds()
    
    
          date.innerText =` ${hour}:${minute} (${day}) ${dates}/${month}/${year} `
          setTimeout(dateToday,1000);
     
        
    }


 
}
