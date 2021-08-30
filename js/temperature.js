const searchBtn = document.getElementById('search_btn');
searchBtn.addEventListener('click', function() {
    const inputField = document.getElementById('input_field');
    const inputValue = inputField.value;
    inputField.value = '';

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=b1e60e4ff3072bcdaba2fff4533206a9`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const cityName = data.name;
        const tem = data.main.temp;
        const temp = tem - 273.15;
        const description = data.weather[0].description;

        document.getElementById('city').innerText = cityName;
        document.getElementById('temp').innerText = temp.toFixed(2);
        document.getElementById('des').innerText = description;
    })
    .catch(res => alert('Please type Right City Name'))
})