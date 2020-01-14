  
let retailers = []

export const useRetailers = () => retailers.slice () // slice returns a seciton of array


export const getRetailers = () => fetch("http://localhost:3000/retailers")
    .then(res => res.json())    // DO THIS STUFF
    .then(parsedRetailers => retailers = parsedRetailers) // DO THIS STUFF
