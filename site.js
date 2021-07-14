const myHideButton = document.getElementById("hidebutton");
const myToggleParagraph = document.getElementById("toggleParagraph");
const myParagraphs = document.querySelectorAll(".hiddenp");

myHideButton.addEventListener("click", () => {
    // myParagraphs.classList.toggle("hidden");
    console.log(myParagraphs);
    myParagraphs.forEach((p) => {
        p.classList.toggle("hidden");
    });

    if(myHideButton.innerText == "Hide") {
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

