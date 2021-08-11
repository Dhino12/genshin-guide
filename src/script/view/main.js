import "../component/tab-indicators.js"
import {Carousel} from "bootstrap/dist/js/bootstrap.esm.min.js"
// import "./slide-show.js";
import DataCharacter from "../data/data-source.js";

const main = () => {
    const rowTabCharacter = document.querySelector("div.row");
    const tabIndicators = document.querySelector("tab-indicators");

    const onLoadedTabIndicators = async () => {
        try {
            // const data = await DataCharacter.getChara();
            console.log(data);
            renderResult(data);
        } catch (error) {

        }

    }

    const renderResult = results => {
        tabIndicators.tabs = results;
        slideShow();
    }

    onLoadedTabIndicators();

    document.addEventListener("scroll",()=>{
        const getHeader = document.getElementsByClassName("header")[0];
        let scrollWindow = window.scrollY
        if(scrollWindow > 50){
            getHeader.classList.add("bg-header-scroll");
        }  else{
            getHeader.classList.remove("bg-header-scroll");
        } 
    })

    const myCarousel = document.querySelector(".carousel");
    // const carousel = new Carousel(myCarousel);    

}


const slideShow = () => {
    const tabIndicator = document.querySelector("tab-indicators");
    const iconIndicator = document.querySelectorAll("tab-item img");

    tabIndicator.addEventListener("click", function (e) {
        if (e.target.className == "rounded-circle") {
            iconIndicator.forEach(e => {
                e.className = "rounded-circle"
            })
            e.target.classList.add("p-active");
        }
    })
}

export default main;