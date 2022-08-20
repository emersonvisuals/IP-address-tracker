let button = document.querySelector('.inputButton');
let ipAddressText = document.querySelector('h1.ipAddressValue');
let locationText = document.querySelector('h1.locationValue');
let timezoneText = document.querySelector('h1.timezoneValue');
let ispText = document.querySelector('h1.ispValue');
let userInput = document.querySelector('input.inputContainer');

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Location')
    .openPopup();


button.addEventListener('click', () => {

    function getVal(){
        userInput.value;
        console.log(userInput.value);  
    }
    
    getVal();

    function getData() {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_VWo7RHLulsmKoMBYuuIVzf8DcAWYK&ipAddress=${userInput.value}`)
        .then(response => response.json())
        .then(data => {
            ipAddressText.innerHTML = data.ip;
            locationText.innerHTML = `${data.location.country}, ${data.location.region}`;
            timezoneText.innerHTML = `${data.location.timezone}`;
            ispText.innerHTML = `${data.isp}`;
            console.log(data);
            map.setView([`${data.location.lat}`, `${data.location.lng}`], `${data.location.geonameId}`);
            L.marker([`${data.location.lat}`, `${data.location.lng}`]).addTo(map)
        })
    }
    
    getData();
});