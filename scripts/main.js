
import FlowerList from "./flowers/FlowerList.js";
import { getFlowers } from "./flowers/FlowerProvider.js";
import { getRetailers } from "./retailers/RetailersProvider.js";
import RetailerList from "./retailers/RetailersList.js";
import { getDistributor } from "./distributors/DistributorProvider.js";

getFlowers()
    .then(FlowerList)

getRetailers()
    .then(getDistributor)
    // .then(getNurseries)
    // .then(getNurseryFlower)
    // .then(getNurseryDistributor)
    .then(RetailerList)