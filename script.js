// Select the H1 element
let myHeading = document.getElementById("myHeading");

// Set the textContent of the H1 element
myHeading.textContent = "Some Text";

// Select the "Hide" button
let hideButton = document.getElementById("hideButton");

// Add click event listener to hide the H1 element
hideButton.addEventListener("click", () => {
    myHeading.style.display = "none";
});

// Select the "Unhide" button
let unhideButton = document.getElementById("unhideButton");

// Add click event listener to unhide the H1 element
unhideButton.addEventListener("click", () => {
    myHeading.style.display = "block";
});
