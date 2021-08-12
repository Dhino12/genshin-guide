import "../component/tab-indicators.js"
import {Carousel} from "bootstrap/dist/js/bootstrap.esm.min.js"
import slideShow from "./slide-show.js";
import DataCharacter from "../data/data-source.js";

const main = () => { 
    const tabIndicators = document.querySelector("tab-indicators");

    const onLoadedTabIndicators = async () => {
        try {
            const data = await DataCharacter.getNameChara();
            renderResult(data);
        } catch (error) { 
            console.error(error);
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
    const carousel = new Carousel(myCarousel);    

}

export default main;