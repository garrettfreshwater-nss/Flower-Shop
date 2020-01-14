import { useFlowers } from "./FlowerProvider.js";
import Flower from "./Flower.js";

const contentTarget = document.querySelector(".flowerList") //select the .flowerList div class on our index.html

const FlowerList = () => {

    const flowers = useFlowers() // Alias flowers created to useFlowers array from our provider

    //maping over flowers array with a function that takes the currently flower as a parameter and inserts it into the Flower function from Flower.js
    const render = () => {
        contentTarget.innerHTML = flowers.map(  
            flower => {
                const html = Flower(flower)
                return html
            }

        ).join("")
    }

    render() //invoking the function that has html flower info
}

export default FlowerList