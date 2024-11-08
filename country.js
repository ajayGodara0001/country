const country = new URLSearchParams(location.search).get("name");

const themeSwitcher = document.querySelector(".themeChanger")
const body = document.querySelector("body")
// console.log("eee",searchParams.get('name'));
// console.log("eee",searchParams.get('capital'));

// console.log(searchParams.has('name6')); // true

// for (const param of searchParams) {
//     console.log(param);
//   }

// const f = async () => {


const flag = document.querySelector("img")
const countryName = document.querySelector(".country-name")
const nativeName = document.querySelector(".native-name")
const region = document.querySelector(".region")
const capital = document.querySelector(".capital")
const subRegion = document.querySelector(".sub-region")
const population = document.querySelector(".population")
const tld = document.querySelector(".tld")
const currency = document.querySelector(".currencies")
const lang = document.querySelector(".lang")

const borderCountry = document.querySelector(".border")

fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0]);
        flag.src = data[0].flags.svg
        countryName.innerHTML = data[0].name.common
        
        if(data[0].name.nativeName){
            nativeName.innerText =  Object.values(data[0].name.nativeName)[0].common
        }

        region.innerText = data[0].region

        if(data[0].capital[0]){
            capital.innerText = data[0].capital.join(", ")
        }
        subRegion.innerHTML = data[0].subregion
        population.innerHTML = data[0].population.toLocaleString("en-In")

        if(data[0].tld){
            tld.innerText = data[0].tld[0]
        }

        if(data[0].currencies){
            currency.innerHTML = Object.values(data[0].currencies)[0].name
        }
        if(data[0].languages){
            lang.innerHTML = Object.values(data[0].languages).join(", ")
        }

        if(data[0].borders){
            data[0].borders.forEach((border) => {
                const a = document.createElement("a")
                let b;
                fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res) => res.json()).then((country) => {
                   b = country[0].name.common
                   a.innerHTML= b
                   a.classList.add("borderAnchor")
                   a.href = `country.html?name=${b}`
                   borderCountry.append(a)  
                }) 
            })
        }


    })
    .catch((e) => console.log("e: ", e)
    )
    .finally(() => console.log("finally")
    )

    themeSwitcher.addEventListener("click", (e) => {
        body.classList.toggle("dark")
        if (themeSwitcher.innerHTML == `<i class="fa-regular fa-sun"></i>&nbsp;&nbsp;light Mode`) {
            themeSwitcher.innerHTML = `<i class="fa-regular fa-moon "></i>&nbsp;&nbsp;Dark Mode`
        }
        else {
           themeSwitcher.innerHTML =`<i class="fa-regular fa-sun"></i>&nbsp;&nbsp;light Mode`
        }
    })
// console.log(data.flags);
