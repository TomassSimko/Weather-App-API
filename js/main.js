document.getElementById("date").innerHTML = formatDate();
//** Day & Time */
    function formatDate() {
        let d = new Date(),
        month = d.getMonth()+1;
        days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        
    return `${days[d.getDay()]} - ${d.getDate()}.${month}.${d.getFullYear()}`;
    }
//** Fetch Weather OpenWeatherMap */
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
            .then((data) => this.displayWeather(data))
            .catch((data) => this.displayError(data));
            },
        
        displayError : function (){
            document.querySelector('.error-msg').innerText = 'City not found'
        },
//** Displayed data from JSON */

        displayWeather : function(data){
           const {name} = data;
           const {temp,feels_like,humidity,temp_min,temp_max} = data.main;
           const {main,icon} = data.weather[0];
           const {speed} = data.wind;
//** Locations of Json data */
           console.log(name,temp,main,feels_like,humidity,speed,icon,temp_min,temp_max)
           document.querySelector('.location').innerText = name;
           document.querySelector('.temperature-value').innerText = Math.floor(temp)+ '°' ;
           document.querySelector('.bottom-temp-value').innerText = Math.floor(temp) + '°';
           document.querySelector('.temp2').innerText= Math.floor(temp_min) + '°';
           document.querySelector('.temp3').innerText= Math.floor(temp_max) + '°';
           document.querySelector('.temperature-description').innerText = main;
           document.querySelector('.feels_like').innerText = Math.floor(feels_like) + '°';
           document.querySelector('.humidity').innerText = humidity + '%';
           document.querySelector('.wind').innerText = speed + ' km/h';
           document.querySelector('.icon').src = "/icons/" + icon + ".png";
           document.querySelector('.info-container').style.backgroundImage = "url('https://source.unsplash.com/350x200/?" + name + "')"
//** Fahrnheit transfer */          
            var transfer = document.querySelector('.transfer-btn');
            var test = document.querySelector('.temperature-value').innerHTML;
            transfer.addEventListener('click',cToF);
           
            function cToF () {
               counter = Math.round(parseInt(test) * 1.8) + 32;
               num1 = document.querySelector('.temperature-value').innerText = counter + '°F';
            }
            
//** deletion of error msg */        
document.querySelector('.error-msg').innerText = '';
},
//** function for search */
       search : function(){
           this.fetchWeather(document.querySelector('.search-bar').value);
        },
};
 //** event listeners  */
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

weather.fetchWeather('Prague') //** Base city */

//** Dark mode */    
const colorSwitch = document.querySelector('#input-color-switch');
colorSwitch.addEventListener('click',checkMode);

function checkMode (){
    console.log('checking')
    if(colorSwitch.checked){
        darkModeOn();
    }
    else {
        darkModeOff();
    }
}
function darkModeOn () {
    document.body.classList.add('dark-mode');
}
function darkModeOff (){
    document.body.classList.remove('dark-mode');
}

