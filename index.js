const imageMap = new Map([
    [0, "./media/NSX1.jpg"],
    [1, "./media/NSX2.jpg"],
    [2, "./media/Porsche.jpg"],
    [3, "./media/S13.jpg"],
    [4, "./media/S2000.jpg"],
    [5, "./media/R32.jpg"],
    [6, "./media/FK8.jpg"]
]);

let imageNumber = 0;

leftArrow = () => {
    console.log("Left arrow clicked.");
    if (imageNumber === 0) {
        imageNumber = imageMap.size - 1;
        document.getElementById("galleryImage").src = imageMap.get(imageNumber);
    }
    else {
        imageNumber--;
        document.getElementById("galleryImage").src = imageMap.get(imageNumber);
    }
}

rightArrow = () => {
    console.log("Right arrow clicked.");
    if (imageNumber === imageMap.size - 1) {
        imageNumber = 0;
        document.getElementById("galleryImage").src = imageMap.get(imageNumber);
    }
    else {
        imageNumber++;
        document.getElementById("galleryImage").src = imageMap.get(imageNumber);
    }
}

setInterval(rightArrow, 15000);