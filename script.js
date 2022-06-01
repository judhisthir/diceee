var rn1;
function randomizr(){
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomDiceImg = "images/dice"+randomNumber1+".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomDiceImg);
    

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    var randomDiceImg2 = "images/dice"+randomNumber2+".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomDiceImg2);
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML = ("&#128681 wins");
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML = ("wins &#128681");
    }
    else{
        document.querySelector("h1").innerHTML = ("Draw");
    }
}
function nameing(){
    var name1=prompt("First Option");
    document.querySelector("#p1").innerHTML=name1;
    var name2=prompt("Second Option");
    document.querySelector("#p2").innerHTML=name2;
    if (name1 == "judo" && name2 == "kabu"){
        document.querySelector("h1").innerHTML = ("i love you shraddha");
        var judo = document.querySelectorAll("img")[0];
        judo.setAttribute("src","images/judo.jpeg");
        judo.setAttribute("width","100%");
        var kabu = document.querySelectorAll("img")[1]; 
        kabu.setAttribute("src","images/kabu.jpeg");
        kabu.setAttribute("width","100%");
    }
}




