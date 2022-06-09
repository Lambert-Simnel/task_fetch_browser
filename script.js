console.log("HI!")

async function  getCountryByName(countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => {console.log(data)})
    .catch(countryName => console.log(`${countryName} does not exist`))
}


const button = document.querySelector("#btn");
const list = document.querySelector("#area");
const form = document.querySelector("#new-country-form");
const pop = document.querySelector("#population")

const handleButtonClick = (event) => {
const countryData = getCountryByName(document.getElementById("myInput").value)
    console.log(event)
    const newListItem = document.createElement("ul");
    newListItem.innerText = document.getElementById("myInput").value;
    list.append(newListItem);
    
    const newPopulation = document.createElement("li");
    newPopulation.innerText = countryData.population
    pop.append(newPopulation);
}

button.addEventListener("click", handleButtonClick);



//When the country name has been submitted, it will add that name to the webpage as a new line (in this case added in section)
// form.addEventListener("submit", (event)=>{
//     console.log(event)
//     event.preventDefault();
//     const newListItem = document.createElement("ul");
//     const newPopulation = document.createElement("li");
//     newListItem.innerText = event.target["myInput"].value;
//     //newPopulation.innerText = event.target["population"].value;
//     list.append(newListItem);
    
// })

// getCountryByName("Peru");
// Must be a way to call the method but allow user to insert any country name across the entire list of available countries.



window.addEventListener("keydown", function(keyPressed) {
    if (keyPressed.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
    
      switch (keyPressed.key) {
        case "Down": // IE/Edge specific value
        case "ArrowDown":
          // Do something for "down arrow" key press.
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
          // Do something for "up arrow" key press.
          break;
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          // Do something for "left arrow" key press.
          break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          // Do something for "right arrow" key press.
          break;
        case "Enter":
        const newListItem = document.createElement("ul");
        const newPopulation = document.createElement("li");
        const countryPromise = getCountryByName(document.getElementById("myInput").value);
        countryPromise.then(data => {
            countryData = data;
            console.log(data)
            // newListItem.innerText = countryData.name;
            // newPopulation.innerText = countryData.population;
            // list.append(newListItem);
            // pop.append(newPopulation);

        })
        break;
        case "Esc": // IE/Edge specific value
        case "Escape":
          // Do something for "esc" key press.
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
    
      // Cancel the default action to avoid it being handled twice
      keyPressed.preventDefault();
    }, true);