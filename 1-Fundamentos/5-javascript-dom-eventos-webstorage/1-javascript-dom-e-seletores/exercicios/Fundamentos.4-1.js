const paragraph = document.getElementById("paragraph");
paragraph.style.color = "rgb(30, 70, 100)";
const title = document.getElementById("page-title");
title.innerText = "O Poderoso Chefão";
const secondParagraph = document.getElementById("second-paragraph");
secondParagraph.innerText =
  "Me aflige q talvez em ti nada de mim seja desejo, tesão!";
const subTitle = document.getElementById("subtitle");
subTitle.innerText= "Poesia:"
paragraph.setAttribute('class', 'titles');
secondParagraph.setAttribute('class', 'titles');
const titles = document.getElementsByClassName('titles');
titles[0].style.color = "red";
subTitle.style.color = '#000030';