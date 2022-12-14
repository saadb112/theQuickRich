const CardsSlider = document.querySelectorAll(".CardSlider");
let Cardposition = 0;
const Cardleftbtn = document.getElementById("CardLeftbtn");
const Cardrightbtn = document.getElementById("CardRightbtn");
const cards = document.getElementById("card");
for (let index = 0; index < CardsSlider.length; index++) {
  const element = CardsSlider[index];
  if(index >= 4){
element.style.visibility = "hidden"
console.log(element.style.visibility)
  }
  
}

let PrevSLiderCount = -1 
let NextSLiderCount = 4 
const CardSlideLeft = () => {
  if(CardsSlider[1].style.left == "0rem"){

  }else{
    NextSLiderCount--
    console.log(NextSLiderCount)
    PrevSLiderCount--
  }

  if (CardsSlider[0].style.left == "0rem" || CardsSlider[0].style.left == "") {
    Cardleftbtn.style.opacity = "0.6";
    Cardrightbtn.style.opacity = "1";
  }else{
    Cardposition += 41.5;
    Cardleftbtn.style.opacity = "0.6";
    Cardrightbtn.style.opacity = "1";

    for (let index = 0; index < CardsSlider.length; index++) {
      const element = CardsSlider[index];
      

      element.style.left = `${Cardposition}rem`;
 element.style.visibility = "visible"

    }
  } 

if(PrevSLiderCount == -1){

}else{

  CardsSlider[PrevSLiderCount].style.visibility = "hidden"
}
if(NextSLiderCount == 8){

}else{

  CardsSlider[NextSLiderCount].style.visibility = "hidden"
}

};
const CardSlideRight = () => {
 
  if( CardsSlider[1].style.left == "-166rem"){
   

  }else{

    NextSLiderCount++
    PrevSLiderCount++
  }
    console.log(CardsSlider[0].style.left)
    if(CardsSlider[0].style.left == "-166rem"  ){
        Cardrightbtn.style.opacity = "0.6";
        Cardleftbtn.style.opacity = "1";

    }else{
        Cardposition -= 41.5;
        Cardrightbtn.style.opacity = "0.6";
        Cardleftbtn.style.opacity = "1";
        
        for (let index = 0; index < CardsSlider.length; index++) {
            const element = CardsSlider[index];
  
            
            element.style.left = `${Cardposition}rem`;
  element.style.visibility = "visible"

        }
    }
 
      CardsSlider[PrevSLiderCount].style.visibility = "hidden"
      CardsSlider[NextSLiderCount].style.visibility = "hidden"
    
};
