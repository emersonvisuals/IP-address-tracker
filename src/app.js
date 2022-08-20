let button = document.querySelector('.inputButton');
let ipAddressText = document.querySelector('h1.ipAddressValue');
let locationText = document.querySelector('h1.locationValue');
let timezoneText = document.querySelector('h1.timezoneValue');
let ispText = document.querySelector('h1.ispValue');


button.addEventListener('click', () => {

    function getData() {
        fetch('https://geo.ipify.org/api/v2/country?apiKey=at_VWo7RHLulsmKoMBYuuIVzf8DcAWYK&ipAddress=8.8.8.8')
        .then(response => response.json())
        .then(data => {
            ipAddressText.innerHTML = data.ip;
            locationText.innerHTML = `${data.location.country}, ${data.location.region}`;
            timezoneText.innerHTML = `${data.location.timezone}`;
            ispText.innerHTML = `${data.isp}`;
            console.log(data);
        })
    }
    
    getData();
});