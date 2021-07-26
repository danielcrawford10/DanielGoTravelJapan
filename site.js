const myHideButton = document.getElementById("hidebutton");
const myToggleParagraph = document.getElementById("toggleParagraph");
const myParagraphs = document.querySelectorAll(".hiddenp");

myHideButton.addEventListener("click", () => {
    // myParagraphs.classList.toggle("hidden");
    const myHiddenParagraphs = document.querySelectorAll(".hidden");
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


