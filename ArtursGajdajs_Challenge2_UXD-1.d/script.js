let BG = document.getElementById("Background");
let BG2 = document.getElementById("Background2");

let DispButt1 = document.getElementById("clock1Butt1");
let DispButt2 = document.getElementById("clock2Butt1");

let MainDisp = document.getElementById("mainDisplay")
let DispValues1 = document.getElementById("mainDisplayText1");
let DispValues2 = document.getElementById("mainDisplayText2");

let clock1 = document.getElementById("clock1");
let clock1Val1 = document.getElementById("clock1Values1");
let clock1Val2 = document.getElementById("clock1Values2");

let animation1 = document.getElementById("Animation1");
let animation2 = document.getElementById("Animation2");
let spaceship = document.getElementById("spaceship");


  let date = new Date();
  let h = date.getHours(); 
    if (h < 10 || h > 20){
        BG2.classList.add("changesColor");
    } else {
        BG2.classList.add("Background2");
    }



function myFunction2(){
let marsClock1 = setInterval(function() {

    let earthTimeHours = new Date().getHours();
    let earthTimeMinutes = new Date().getMinutes();
    let earthTimeSeconds = new Date().getSeconds();
  
       document.getElementById("mainDisplayText1").innerHTML = "Earth Time:  " + earthTimeHours + ":" +
       earthTimeMinutes +":" +  earthTimeSeconds;
       document.getElementById("clock1Values1").innerHTML = "Earth Time:  " + earthTimeHours + ":" +
       earthTimeMinutes + ":" +  earthTimeSeconds;
    }, 1000);

 DispButt1.onclick = function() {
    window.clearInterval(marsClock1);
    DispValues1.innerHTML = "";
    clock1Val1.innerHTML = "";
    myFunction1();
    }
}
function myFunction1(){
    let DispButt1 = document.getElementById("clock1Butt1");
    let DispValues2 = document.getElementById("mainDisplayText2");
    let clock1Val2 = document.getElementById("clock1Values2");

    let marsClock2 = setInterval(function() {

        let earthTime = new Date().getTime();
        let marsT = earthTime * 1.03;


        let hours = Math.floor((marsT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((marsT % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((marsT % (1000 * 60)) / 1000);
  
       document.getElementById("mainDisplayText2").innerHTML = "Mars Time: " + hours + ":" +
       minutes + ":" + seconds;
       document.getElementById("clock1Values2").innerHTML = "Mars Time: " + hours + ":" +
       minutes + ":" + seconds;

    }, 1000);

    DispButt1.onclick = function() {
        window.clearInterval(marsClock2);
        DispValues2.innerHTML = "";
        clock1Val2.innerHTML = "";
        myFunction2();
        }

}

function myFunction3(){ 
let spaceship = document.getElementById("spaceship");

    spaceship.classList.add("changesPosition");

    spaceship.onclick = function(){
        spaceship.classList.replace("changesPosition","changesPositionBack");
    }
}
