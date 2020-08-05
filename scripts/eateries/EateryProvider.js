let eateries = []

export const useEateries = () => {
    return eateries.slice()
}

export const getEateries = () => {
    fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(data => {
            eateries = data
        })
}