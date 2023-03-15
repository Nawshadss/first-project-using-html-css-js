
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // console.log(searchText);
    searchField.value = '';


    // __________________________________________________________________________________
    // api theke data load kora ...........daynamic URL make 

    const url = `https://restcountries.com/v3.1/name/${searchText}`;

    // console.log(url)

    // fetch Call ____________________________________________________________________

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data));

    // ___________________________________________________________________________________

}


// rearch result window output e dekhano


const displaySearchResult = country => {

    const searchResult = document.getElementById('search-result');
    country.forEach(country => {

        console.log(country);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
            <div class="card  h-100" >
                <img src="${country.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${country.name.common}</h5>
                    // <p class="card-text">${country.capital}</p>
                </div>
            </div>
        `;

        searchResult.appendChild(div);



    })
}