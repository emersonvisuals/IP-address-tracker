let button = document.querySelector('.inputButton');
let ipAddressText = document.querySelector('h1.ipAddressValue');
let locationText = document.querySelector('h1.locationValue');
let timezoneText = document.querySelector('h1.timezoneValue');
let ispText = document.querySelector('h1.ispValue');
let userInput = document.querySelector('input.inputContainer');
let statisticsContainer = document.querySelector('.statisticsContainer');

var map = L.map('map');
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function firstTest() {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_puAweYRxXH1bIVhKSiAa2GsFXWsAK&ipAddress=${userInput.value}`)
    .then(response => response.json())
    .then(data => {
        ipAddressText.innerHTML = data.ip;
        locationText.innerHTML = `${data.location.country}, ${data.location.region}`;
        timezoneText.innerHTML = `${data.location.timezone}`;
        ispText.innerHTML = `${data.isp}`;
            
        map.setView([`${data.location.lat}`, `${data.location.lng}`], `${data.location.geonameId}`);
        L.marker([`${data.location.lat}`, `${data.location.lng}`]).addTo(map);

        statisticsContainer.classList.add('active');
    })
    statisticsContainer.classList.add('active');
}
firstTest();

button.addEventListener('click', () => {

    function getVal(){
        userInput.value;
        console.log(userInput.value);  
    }
    
    getVal();

    function getData() {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_puAweYRxXH1bIVhKSiAa2GsFXWsAK&ipAddress=${userInput.value}`)
        .then(response => response.json())
        .then(data => {
            if (data.ip === undefined) {
                alert('please enter a valid address');
            } else {
                ipAddressText.innerHTML = data.ip;
                locationText.innerHTML = `${data.location.country}, ${data.location.region}`;
                timezoneText.innerHTML = `${data.location.timezone}`;
                ispText.innerHTML = `${data.isp}`;
                    
                map.setView([`${data.location.lat}`, `${data.location.lng}`], `${data.location.geonameId}`);
                L.marker([`${data.location.lat}`, `${data.location.lng}`]).addTo(map)
            }
        })
    }
    
    getData();
});

document.addEventListener("keyup", function(event) {
    
    if (event.keyCode === 13) {

        function getVal(){
            userInput.value;
            console.log(userInput.value);  
        }
        
        getVal();
    
        function getData() {
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_puAweYRxXH1bIVhKSiAa2GsFXWsAK&ipAddress=${userInput.value}`)
            .then(response => response.json())
            .then(data => {
                if (data.ip === undefined) {
                    alert('please enter a valid address');
                } else {
                    ipAddressText.innerHTML = data.ip;
                    locationText.innerHTML = `${data.location.country}, ${data.location.region}`;
                    timezoneText.innerHTML = `${data.location.timezone}`;
                    ispText.innerHTML = `${data.isp}`;
                        
                    map.setView([`${data.location.lat}`, `${data.location.lng}`], `${data.location.geonameId}`);
                    L.marker([`${data.location.lat}`, `${data.location.lng}`]).addTo(map)
                }
            })
        }
        
        getData();
    }
});