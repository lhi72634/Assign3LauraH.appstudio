<<<<<<< HEAD
//Laura Higueras Assignment 3
=======
//Laura Higueras
>>>>>>> changes2

let cities = []
let moreInfo = "yes"
let i = 0

while(moreInfo == "yes") {
    let newCity = prompt("Enter name of a city")
    cities.push(newCity.toLowerCase())
    moreInfo = prompt("To add more cities write yes, if not click cancel")
    }

while (i < cities.length) {
    console.log(cities[i])
    i++
    }
*/