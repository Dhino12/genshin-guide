const slideShow = () => {
    const tabIndicator = document.querySelector("tab-indicators");
    const iconIndicator = document.querySelectorAll("tab-item img");
    const portraitChara = document.querySelector("#portrait-chara");

    tabIndicator.addEventListener("click", function (e) {
        if (e.target.className == "rounded-circle") {
            portraitChara.src = e.target.src
            iconIndicator.forEach(e => {
                e.className = "rounded-circle"
            })
            e.target.classList.add("p-active");
        }
    })
}

export default slideShow;