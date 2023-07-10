const imageMap = new Map([
    [0, "./media/WhiteFL5.png"],
    [1, "./media/BlueFK8.png"],
    [2, "./media/YellowFK8.png"],
    [3, "./media/RedFK8.png"],
    [4, "./media/BlueFK82.png"]
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