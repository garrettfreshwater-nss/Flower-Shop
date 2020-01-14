import { useRetailers } from "./RetailersProvider.js";
import Retailer from "./Retailers.js";
import { useDistributor } from "../distributors/DistributorProvider.js";

const contentTarget = document.querySelector(".retailerList")

//list function for our retailer information

const RetailerList = () => {

    const retailers = useRetailers()
    const distributors = useDistributor()

   

    ${
        retailers.filter(retailer => {
            if (distributors.id === retailer.distributorId) {
                return true
            }
            return false
        })
        .map(retailer => {
            const retailerHTML = Retailer(retailer)
            return retailerHTML
        }).join("")
    }


    const render = () => {
        
        contentTarget.innerHTML = retailers.map(
            retailer => {
                const html = Retailer(retailer)
                return html
            }
        ).join("")

        
    }
    
    render() //invoke render function



}

export default RetailerList

