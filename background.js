const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

const chosenImage=images[Math.floor(Math.random()*images.length)]



document.body.style.backgroundImage = "image/"+chosenImage;
document.body.style.backgroundImage = "url(image/"+chosenImage+")";  

console.log(chosenImage);




// const bgimage=document.createElement("img");

// bgimage.src="image/"+chosenImage;


// document.body.appendChild(bgimage);