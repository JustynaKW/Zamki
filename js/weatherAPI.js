document.addEventListener("DOMContentLoaded", ()=> {
    let city = "Wroclaw";
    let apiKey = "62c1f29637b4c954f1a048b77523217c";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            document.querySelector("#city").innerHTML = res.name;
            document.querySelector("#temp").innerHTML = res.main.temp;
        })
        .catch(err => console.log(err));
})