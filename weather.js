const weatherBtn = () =>{
    const inputGrp = document.getElementById('inputFild');
    const inputGrpMsg = inputGrp.value;
    inputGrp.value= '';
    // console.log(inputGrpMsg)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputGrpMsg}&appid=0ce99be9d2147cf4692e89de7913f708`
     fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        const cityName = data.name;
        const temp = data.main.temp;
        const ftemp = temp - 273.16;
        const discreption = data.weather[0].description;
        

        const resultDiv = document.getElementById('weatherDetails');
        resultDiv.innerHTML=`
    
        <h2 class="text-center text-white">${cityName}</h2>
        <h1 class="text-center text-warning">${ftemp.toFixed(2)}</h1>
        <h5 class="text-center text-white">${discreption}</h5>
        `

    })
}
