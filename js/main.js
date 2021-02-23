    document.getElementById("date").innerHTML = formatDate();


    function formatDate() {
        let d = new Date(),
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
           document.querySelector('.temperature-value').innerText = Math.floor(temp)+ '°' ;
           document.querySelector('.bottom-temp-value').innerText = Math.floor(temp) + '°';
           document.querySelector('.temperature-description').innerText = main;
           document.querySelector('.feels_like').innerText = Math.floor(feels_like) + '°';
           document.querySelector('.humidity').innerText = humidity + '%';
           document.querySelector('.wind').innerText = speed + ' km/h';
           document.querySelector('.icon').src = "/icons/" + icon + ".png";
        },

       search : function(){
           this.fetchWeather(document.querySelector('.search-bar').value);
        },
};
        document.querySelector('.search-btn').addEventListener('click',function(){
            weather.search();
            document.querySelector('.search-bar').value = "";
    });
        document.querySelector('.search-bar').addEventListener('keyup',function(e){
            if(e.key === 'Enter'){
                weather.search();
                document.querySelector('.search-bar').value = "";
            };

             
    });

    weather.fetchWeather('Esbjerg')

// ** Current and following dates - EDIT 

function showDetails(){
    let d = new Date ();
    let weekdays = new Array (7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    return  weekdays[d.getDay() + 1]  
}

function showDetails2(){
    let d = new Date ();
    let weekdays = new Array (7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    return  weekdays[d.getDay() + 2]  
}
document.querySelector('.date2').innerHTML = showDetails();
document.querySelector('.date3').innerHTML = showDetails2();
   
 // weekdays[d.getDay()] + weekdays[d.getDay() + 1] + weekdays[d.getDay() + 2] 



    
       
  
   


