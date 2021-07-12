const myHideButton = document.getElementById("hidebutton");
const myToggleParagraph = document.getElementById("toggleParagraph");
const myParagraphs = document.querySelectorAll("p");

myHideButton.addEventListener("click", () => {
    // myParagraphs.classList.toggle("hidden");
    myParagraphs.forEach((p => {
        p.classList.toggle("hidden");
    });

    if(myHideButton.innterText == "Hide") {
        myHideButton.innerText = "Show";
    } else {
        myHideButton.innerText = "Hide";
    }
});

myParagraphs.forEach((p) => {
p.addEventListener("click", (t) => {
    console.log(t.target);
    t.target.classList.toggle("hidden");
})
});

