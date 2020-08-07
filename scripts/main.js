import { AttractionList } from "./attractions/AttractionList.js"
import { AttractionSelect } from "./attractions/AttractionSelect.js"
import { eateryList } from "./eateries/EateryList.js"
import { eaterySelect } from "./eateries/EaterySelect.js"
import { ParkSelect } from "./parks/ParkSelect.js"
import './weather/WeatherProvider.js'
import { itineraryList } from "./itinerary/ItineraryList.js"
import './itinerary/SaveItinerary.js'

//import { getEateries, useEateries } from "./eateries/EateryProvider.js"

//import { getEateries, useEateries } from "./eateries/EateryProvider.js"
AttractionList()
AttractionSelect()
eateryList()
eaterySelect()
ParkSelect()
//itineraryList()
    /*const array = getEateries().then(() => {
        const test = useEateries()
        console.log(test)
    })
    */


// import { useWeather } from "./weather/WeatherProvider.js";
// import { weatherList } from "./weather/weatherList.js"



// const weatherTest = useWeather()
// console.log(weatherTest)