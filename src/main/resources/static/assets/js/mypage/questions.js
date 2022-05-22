let left = document.getElementsByClassName("left");

function handleClick(event) {
    console.log(event.target);
    console.log(event.target.classList);

    left[0].classList.remove("clicked");
    if (event.target.classList[1] === "clicked") {
        event.target.classList.remove("clicked");
    } else {
        for (let i = 0; i < active.length; i++) {
            left[i].classList.remove("clicked");
        }

        event.target.classList.add("clicked");
    }
}
function init() {
    left[3].classList.add("clicked");
    for (let i = 0; i < active.length; i++) {
        left[i].addEventListener("click", handleClick);
    }
}
init();