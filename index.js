var gamelog=[];
var count=0;
var game=[];
var temp=0;
var index=0;
var level=0;
$(".green").click(greenclick);
$(".blue").click(blueclick);
$(".yellow").click(yellowclick);
$(".red").click(redclick);

$("body").keypress(function(event){
    var num1=event.key;
    if(num1 === "1"){greenclick();}
    else if(num1 === "2"){blueclick();}
    else if(num1 === "4"){redclick();}
    else if(num1 === "3"){yellowclick();}
});
nextflow();
function greenclick()
    {
    $(".green").addClass("pressed");
    var audio=new Audio("./sounds/green.mp3");
    setTimeout(function() { $(".green").removeClass("pressed");}, 200);
    audio.play();
    gamelog.push("1");
    check(1);
}

function blueclick(){
    $(".blue").addClass("pressed");
    var audio=new Audio("./sounds/blue.mp3");
    setTimeout(function() { $(".blue").removeClass("pressed");}, 200);
    audio.play();
    gamelog.push("2");
    check(2);
}

function yellowclick()
    {
    $(".yellow").addClass("pressed");
    var audio=new Audio("./sounds/yellow.mp3");
    setTimeout(function() { $(".yellow").removeClass("pressed");}, 200);
    audio.play();
    gamelog.push("3");
    check(3);
}

function redclick()
    {
    $(".red").addClass("pressed");   
    setTimeout(function() { $(".red").removeClass("pressed");}, 200);
    var audio=new Audio("./sounds/red.mp3");
    audio.play();
    gamelog.push("4");
    check(4);
    }

    function greenclick1()
    {
    $(".green").addClass("pressed1");
    var audio=new Audio("./sounds/green.mp3");
    setTimeout(function() { $(".green").removeClass("pressed1");}, 500);
    audio.play();
}

function blueclick1(){
    $(".blue").addClass("pressed1");
    var audio=new Audio("./sounds/blue.mp3");
    setTimeout(function() { $(".blue").removeClass("pressed1");}, 500);
    audio.play();
}

function yellowclick1()
    {
    $(".yellow").addClass("pressed1");
    var audio=new Audio("./sounds/yellow.mp3");
    setTimeout(function() { $(".yellow").removeClass("pressed1");}, 500);
    audio.play();
}

function redclick1()
    {
    $(".red").addClass("pressed1");   
    setTimeout(function() { $(".red").removeClass("pressed1");}, 500);
    var audio=new Audio("./sounds/red.mp3");
    audio.play();
    }
function nextflow(){

    console.log(gamelog);
    var num=Math.floor((Math.random()*4)+1);
    count++;
    game.push(num);
    if(num === 1){greenclick1();}
    else if(num === 2){blueclick1();}
    else if(num === 4){redclick1();}
    else if(num === 3){yellowclick1();}
    $("#key").hide()
    $("#game").hide()
   
    
    

}

function check(num){
 if(num === game[index]){
    index++;
    if(index===count)
    {
        level++;
        $("#level-title").text("LEVEL # "+ level);
        index=0;
        nextflow();
       
    }
 }
 else {
    $("body").addClass("game-over");
    var audio=new Audio("./sounds/wrong.mp3");
    audio.play();
    setTimeout(function() { $("body").removeClass("game-over");}, 1000);
    $("#level-title").text("YOU HAVE LOST REFRESH TO PLAY AGAIN");
    var str="HISTORY OF YOUR CHOICES :: "+gamelog;
    $("#game").text(str);
    var str1="THE ACTUAL KEY IS "+game;
    $("#key").text(str1);
    $("#key").show();
}
     
}








