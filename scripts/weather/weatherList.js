const eventHub = document.querySelector(".container")
    //const contentTarget = document.querySelector(".")

eventHub.addEventListener("parkSelected", (parkSelected) => {
    const parkChosen = parkSelected.detail.parkId
    console.log("its loging", parkChosen)

})

// const render = (weatherObject) => {
//     contentTarget.innerHTML
// }