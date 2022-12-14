const pagination = (startingRow, EndRow, BtnIndex) => {
    const rows = document.querySelectorAll(".winners");
    const Pagebtn = document.querySelectorAll(".Pagebtn");
    const more = document.getElementById("more");
    console.log(rows)
    const btnLength = 10
    console.log(rows.length / 5)
    for (let index = 0; index < Pagebtn.length; index++) {
      const element = Pagebtn[index];
      element.style.backgroundColor = "white";
      element.style.color = "black";
      
    }
    // if (Pagebtn.length >= 5) {
    //   more.innerText = "...";
    // }
    if (BtnIndex == undefined) {
    } else {
      Pagebtn[BtnIndex].style.backgroundColor = "black";
      Pagebtn[BtnIndex].style.color = "white";
    }
    for (let index = 0; index < rows.length; index++) {
      const element = rows[index];
      element.style.display = "none";
    }
    for (let index = startingRow; index < EndRow; index++) {
      const element = rows[index];
      if (index >= rows.length) {
      } else {
        element.style.display = "flex";
      }
    }

  };
  pagination(0, 12)