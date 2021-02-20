    document.getElementById("date").innerHTML = formatDate();

    function formatDate() {
        var d = new Date(),
        month = d.getMonth()+1;
        days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        
    return `${days[d.getDay()]} - ${d.getDate()}.${month}.${d.getFullYear()}`;
    }
    
    let weather = {
        apiKey : 'b5ca0a803da945e46f33c61e65f7c77e',
        fetchWeather: function (city){
            fetch(
                'http://api.openweathermap.org/data/2.5/weather?q='
                + city 
                + '&units=metric&appid='
                + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
        },
        displayWeather : function(data){
           const {name} = data;
           const {temp,feels_like,humidity} = data.main;
           const {main,icon} = data.weather[0];
           const {speed} = data.wind;

           
           console.log(name,temp,main,feels_like,humidity,speed,icon)
           document.querySelector('.location').innerText = name;
           document.querySelector('#temperature-value').innerText = Math.floor(temp)+ '°' ;
           document.querySelector('.bottom-temp-value').innerText = Math.floor(temp) + '°';
           document.querySelector('.temperature-description').innerText = main;
           document.querySelector('.feels_like').innerText = Math.floor(feels_like) + '°';
           document.querySelector('.humidity').innerText = humidity + '%';
           document.querySelector('.wind').innerText = speed + ' km/h';
           document.querySelector('.icon').src = "/icons/" + icon + ".png";
            
        }

       
    };
 
    weather.fetchWeather('Denver')

       
  
   


