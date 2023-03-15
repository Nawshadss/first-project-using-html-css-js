fetch('https://restcountries.com/v3.1/name/bangladesh')
.then((res)=>res.json())
.then((data)=>functio(data))

function functio(data) {
    data.map((data)=>console.log(data.capital))

}
