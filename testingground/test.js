const secondRowImages = document.querySelector(".whyRow2Imgs");

const arrayOfImgName = [
    {src: "threeSmile.jpg", alt:"smiling1"},
    {src: "actionSmile.ed2.jpeg", alt:"smiling2"},
    {src: "askingQ.1.jpeg", alt:"smiling4"},
    {src: "psypher.1.jpeg", alt:"smiling5"},
    {src: "checkIn.jpeg", alt:"smiling6"},
]

let i = 0;
while (i < arrayOfImgName.length) {
    const newListItem = document.createElement("li");
    newListItem.style.height = "30vh";
    newListItem.style.backgroundImage = 
    `url(../media/meet/${arrayOfImgName[i].src})`;
    newListItem.style.backgroundSize = "cover";

    (i == arrayOfImgName.length-2 || i == arrayOfImgName.length-1)
    ? newListItem.style.width = "50%"
    : (i == 2)
        ? newListItem.style.width = "30%" 
        : newListItem.style.width = "35%";



    secondRowImages.appendChild(newListItem);

    i++;
}

