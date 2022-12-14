const Cards = document.querySelectorAll(".slide1");
let position = 0;
const leftbtn = document.getElementById("leftbtn");
const rightbtn = document.getElementById("rightbtn");
const SlideLeft = () => {
  if (Cards[0].style.left == "0rem" || Cards[0].style.left == "") {
    leftbtn.style.opacity = "0.6";
    rightbtn.style.opacity = "1";
  }else if(Cards[0].style.left == "-192rem" || Cards[0].style.left == ""){
    position += 192;
    leftbtn.style.opacity = "0.6";
    rightbtn.style.opacity = "1";

    for (let index = 0; index < Cards.length; index++) {
      const element = Cards[index];
      console.log(position);

      element.style.left = `${position}rem`;
    }
  } else {
    position += 192;
    rightbtn.style.opacity = "1";

    for (let index = 0; index < Cards.length; index++) {
      const element = Cards[index];
      console.log(position);

      element.style.left = `${position}rem`;
    }
  }
};
const msg = "adasd"
console.log(msg)
const SlideRight = () => {
  if (Cards[0].style.left == "-384rem") {
    rightbtn.style.opacity = "0.6";
    leftbtn.style.opacity = "1";
    console.log("hello");
  } else if (Cards[0].style.left == "-192rem") {
    console.log("hello");
    position -= 192;
    rightbtn.style.opacity = "0.6";
    leftbtn.style.opacity = "1";

    for (let index = 0; index < Cards.length; index++) {
      const element = Cards[index];
      console.log(position);

      element.style.left = `${position}rem`;
    }
  } else {
    position -= 192;

    leftbtn.style.opacity = "1";

    for (let index = 0; index < Cards.length; index++) {
      const element = Cards[index];
      console.log(position);

      element.style.left = `${position}rem`;
    }
  }
};
