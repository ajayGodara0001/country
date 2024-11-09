const allCountries = document.querySelector(".allCountries")

const regionSelect = document.querySelector(".select-region")
const body = document.querySelector("body")
const inputSearch = document.querySelector(".inputSearch")
const themeSwitcher = document.querySelector(".themeChanger")
let allCountry
const renderCountry = (data) => {
    allCountries.innerHTML = ""
    data.map((country) => {
        const countryCard = document.createElement('div')
        countryCard.classList.add("country-card")

        const cardHtml = `<a href="/country.html?name=${country.name.common}">
        <div class="image-container"><img src="${country.flags.svg}"      
        alt="flag-${country.name.common}">
        </div>
        <div class="content">
            <h3 class="country-name">${country.name.common}</h3>
            <p><b>Population: </b>${country.population.toLocaleString("en-IN")}</p>
            <p><b>Region: </b>${country.region}</p>
            <p><b>Capital: </b>${country.capital}</p>
        </div>
        </a>`
        countryCard.innerHTML = cardHtml

        allCountries.append(countryCard)

    })
}

fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        allCountry = data
        renderCountry(data)
    })

regionSelect.addEventListener("change", (e) => {

    fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
            renderCountry(data)
        })
})


inputSearch.addEventListener("input", (e) => {
    const filteredCountry = allCountry.filter((country) => {
        return (
            country.name.common.toLowerCase().includes(e.target.value.toLowerCase().trim())
        )
    })
    renderCountry(filteredCountry)
})


themeSwitcher.addEventListener("click", (e) => {
    body.classList.toggle("dark")
    if (themeSwitcher.innerHTML == `<i class="fa-regular fa-sun"></i>&nbsp;&nbsp;light Mode`) {
        themeSwitcher.innerHTML = `<i class="fa-regular fa-moon "></i>&nbsp;&nbsp;Dark Mode`
    }
    else {
       themeSwitcher.innerHTML =`<i class="fa-regular fa-sun"></i>&nbsp;&nbsp;light Mode`
    }
})
// 1st method to create a card

// const countryCard = document.createElement('div')
// countryCard.classList.add("country-card")

// const a = document.createElement('a')
// countryCard.append(a)

// const div1 = document.createElement('div')
// div1.classList.add("image-container")
// a.append(div1)

// const img = document.createElement("img")
// img.src = "https://flagcdn.com/gd.svg"
// img.alt = "flag-image"
// div1.append(img)

// const div2 = document.createElement('div')
// div2.classList.add("content")
// a.append(div2)



// 2st method to create a card


// const countryCard = document.createElement('div')
// countryCard.classList.add("country-card")

// const cardHtml = `<a href="#">
//                     <div class="image-container"><img src="https://flagcdn.com/gd.svg"         alt="flag-image">
//                     </div>
//                     <div class="content">
//                         <h3 class="country-name">Iceland</h3>
//                         <p><b>Population: </b>34,56,788</p>
//                         <p><b>Region: </b>Europe</p>
//                         <p><b>Capital: </b>Berlin</p>
//                     </div>
//                 </a>`
// countryCard.innerHTML = cardHtml

// allCountries.append(countryCard)
