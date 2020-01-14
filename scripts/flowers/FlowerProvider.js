  
let flowers = []

export const useFlowers = () => flowers.slice () // slice returns a seciton of array


export const getFlowers = () => fetch("http://localhost:3000/flowers")  // DO THIS STUFF, ITS IMPORTANT
    .then(res => res.json())    // DO THIS STUFF
    .then(parsedFlowers => flowers = parsedFlowers) // DO THIS STUFF

