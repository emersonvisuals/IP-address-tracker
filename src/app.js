let button = document.querySelector('.inputButton');

button.addEventListener('click', () => {
    console.log('clicked!');
});

function getData() {
    fetch('https://geo.ipify.org/api/v2/country?apiKey=at_VWo7RHLulsmKoMBYuuIVzf8DcAWYK&ipAddress=8.8.8.8')
    .then(function(result){
        console.log(result);
    })
    .then(function(data){
        console.log(data);
    });
}

getData();