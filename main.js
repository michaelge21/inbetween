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
    newListItem.style.height = "35vh";
    newListItem.style.backgroundImage = 
    `url(media/meet/${arrayOfImgName[i].src})`;
    newListItem.style.backgroundSize = "cover";

    (i == arrayOfImgName.length-2 || i == arrayOfImgName.length-1)
    ? newListItem.style.width = "50%"
    : (i == 2)
        ? newListItem.style.width = "30%" 
        : newListItem.style.width = "35%";

    secondRowImages.appendChild(newListItem);

    i++;
}

const thirdRowImgs = document.querySelector(".whyRow3Imgs");

const arrayofFoodImgs = [
    {src: "2019Food1.jpg", alt:"handing out food to a long line of people"},
    {src:"2019Food2.jpeg", alt:"portait image of naan bread"},
    {src:"eggTarts.JPG", alt:"portait image of egg tarts from WeiHong Bakery"},
    {src:"platingFood.JPG", alt:"plating food in the DUC"},
    {src:"porkBuns.JPG", alt:"pork buns from WeiHong Bakery"},
    {src: "mangoNectar.JPG", alt:"lychee, aloe, mango, and milkis drinks"},
]

let incrementer = 0;
while (incrementer < arrayofFoodImgs.length) {
    const newListItem = document.createElement("li");
    newListItem.style.height = "35vh";
    newListItem.style.backgroundImage = 
    `url(media/food/${arrayofFoodImgs[incrementer].src})`;
    newListItem.style.backgroundSize = "cover";
    newListItem.setAttribute('loading', 'lazy');


    (incrementer == 4)
    ?   newListItem.style.width = "calc((3/6)*100%)"
    :   (incrementer == 5) 
        ? newListItem.style.width = "calc((1/6)*100%)"
        : newListItem.style.width = "calc((2/6)*100%)"

    thirdRowImgs.appendChild(newListItem);

    incrementer++
}