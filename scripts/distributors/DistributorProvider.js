  
let distributor = []

export const useDistributor = () => distributor.slice () // slice returns a seciton of array


export const getDistributor = () => fetch("http://localhost:3000/distributor")  // DO THIS STUFF, ITS IMPORTANT
    .then(res => res.json())    // stringify our json data
    .then(parsedDistributor => distributor = parsedDistributor) // data equals our array distributor

