const Card = document.querySelectorAll(".card")


function removeClassList() {
    Card.forEach((currrent) => {
        currrent.classList.remove("active")
    })
}

Card.forEach((currrent) => {

    currrent.addEventListener("click", () => {
        removeClassList();
        currrent.classList.add("active")
    })
})
