const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["গ্রাম বাংলা সঞ্চয় ও ঋণদান সমবায় সমিতি  লিমিটেড", "غرام بنغابة شنصاى ريندن شوموبای شومتي ليميتد", "Gram Bangla Savings and Loans Cooperative Society LTD",];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 30);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 80);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})


var menu = document.getElementById("menu");
menu.onclick = function () {
  document.getElementById("mobile").style.display="block";
}



// the csrsole data w3 school
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


///// data all fun ction  


//চেয়ারম্যানের বানী
function manager() {
  alert("click")
}

///ইতিহাস
function function1() {
  alert("click")
}

//উদেশ্য
function history() {
  alert("click")
}

// ভবিষ্যৎ পরিক্লপনা
function flan() {
  alert("click")
}

//অর্জণ 
function earn() {
  alert("click")
}
// পরিচালনা পরিষদ 

//কার্যকরী পরিষদ
function function2() {
  alert("click")
}
//অফিস কর্মীবৃন্দ
function function3() {
  alert("click")
}

//কালেক্টর বৃন্দ
function function4() {
  alert("click")
}
//উপদেষ্টা ও বিভিন্ন উপ-কমিটি
function function5() {
  alert("click")
}
//  অফিস ব্যবস্থাপনা


//>“ ভবন’’ উদ্বোধন
function function6() {
  alert("click")
}

//সর্বশেষ আপডেট
function function7() {
  alert("click")
}

// গ্যালারী ১ 
function function8() {
  alert("click")
}
//কর্মসংস্থান
function function9() {
  alert("click")
}
// নিউজ
function function10() {
  alert("click")
}
//বার্ষিক অডিট প্রতিবেদন
function function11() {
window.location.href="/src/odet-file/index.html"
}

// সেবা সমূহ

function function12() {
 window.location.href="/src/seba/"
}

/// facebook 

function facebook() {
  alert("no link found");
}



// google 





/// foter box style zoom
var anisit = ` position: fixed;
top: 50%;
left: 50%;
transform: translate(-50% , -50%);
backdrop-filter: blur(90px);
height: 100vh;
width: 100%;
z-index: 100;
background-color: #00000075;
animation: apk 0.2s;`
/// foter box-zoom 
// home/index.html 
function box1() {
  document.getElementById("box1").style = anisit;
  document.getElementById("box1-x").style.display = "block";
}
function box1x() {
  document.getElementById("box1").style = `animation: apk1 0.2s;`;
  document.getElementById("box1-x").style.display = "none";
}
function box2() {
  document.getElementById("box2").style = anisit;
  document.getElementById("box2-x").style.display = "block";
}
function box2x() {
  document.getElementById("box2").style = `animation: apk1 0.7s;`;
  document.getElementById("box2-x").style.display = "none";
}
function box3() {
  document.getElementById("box3").style = anisit;
  document.getElementById("box3-x").style.display = "block";
}
function box3x() {
  document.getElementById("box3").style = `animation: apk1 0.7s;`;
  document.getElementById("box3-x").style.display = "none";
}
// new html file system  zoom funtion
// loction : /src/odet-file/index.html 
function box4() {
  document.getElementById("box4").style = anisit;
  document.getElementById("box4-x").style.display = "block";
}
function box4x() {
  document.getElementById("box4").style = `animation: apk1 0.2s;`;
  document.getElementById("box4-x").style.display = "none";
}
function box5() {
  document.getElementById("box5").style = anisit;
  document.getElementById("box5-x").style.display = "block";
}
function box5x() {
  document.getElementById("box5").style = `animation: apk1 0.7s;`;
  document.getElementById("box5-x").style.display = "none";
}
function box6() {
  document.getElementById("box6").style = anisit;
  document.getElementById("box6-x").style.display = "block";
}
function box6x() {
  document.getElementById("box6").style = `animation: apk1 0.7s;`;
  document.getElementById("box6-x").style.display = "none";
}




//exampule test 



////// the cut function 
function cut(){
  document.getElementById("mobile").style.display="none";
}