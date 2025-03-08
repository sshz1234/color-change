// constants for query selector
const myStudentId = document.getElementById("myStudentId");
const customNumber = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");

// function to change bg color from user input and add student id
function changeCustomColor() {
    const color = customNumber.value;
    document.body.style.backgroundColor = color;
    myStudentId.textContent = "Your Student ID: " + color;
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    myStudentId.textContent = "Your Student ID: " + randomColor;
}

// function to generate options for select list
function addList() {
    const imageOptions = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Array of image filenames
    for (let i = 0; i < imageOptions.length; i++) {
        const option = document.createElement("option");
        option.text = imageOptions[i];
        imageSelect.add(option);
    }
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = selectedImage;
}

// event listeners for on click event of buttons and select
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// Call addList function to generate options for select list
addList();