const secondRowImages=document.querySelector(".whyRow2Imgs"),arrayOfImgName=[{src:"threeSmile.jpg",alt:"smiling1"},{src:"actionSmile.ed2.jpeg",alt:"smiling2"},{src:"askingQ.1.jpeg",alt:"smiling4"},{src:"psypher.1.jpeg",alt:"smiling5"},{src:"checkIn.jpeg",alt:"smiling6"}];let i=0;for(;i<arrayOfImgName.length;){const e=document.createElement("li");e.style.height="35vh",e.style.backgroundImage=`url(media/meet/${arrayOfImgName[i].src})`,e.style.backgroundSize="cover",e.style.width=i==arrayOfImgName.length-2||i==arrayOfImgName.length-1?"50%":2==i?"30%":"35%",secondRowImages.appendChild(e),i++}const thirdRowImgs=document.querySelector(".whyRow3Imgs"),arrayofFoodImgs=[{src:"2019Food1.jpg",alt:"handing out food to a long line of people"},{src:"2019Food2.jpeg",alt:"portait image of naan bread"},{src:"eggTarts.JPG",alt:"portait image of egg tarts from WeiHong Bakery"},{src:"platingFood.JPG",alt:"plating food in the DUC"},{src:"porkBuns.JPG",alt:"pork buns from WeiHong Bakery"},{src:"mangoNectar.JPG",alt:"lychee, aloe, mango, and milkis drinks"}];let incrementer=0;for(;incrementer<arrayofFoodImgs.length;){const e=document.createElement("li");e.style.height="35vh",e.style.backgroundImage=`url(media/food/${arrayofFoodImgs[incrementer].src})`,e.style.backgroundSize="cover",e.setAttribute("loading","lazy"),e.style.width=4==incrementer?"calc((3/6)*100%)":5==incrementer?"calc((1/6)*100%)":"calc((2/6)*100%)",thirdRowImgs.appendChild(e),incrementer++}
//# sourceMappingURL=index.eb651596.js.map
