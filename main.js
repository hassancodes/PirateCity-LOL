// main riddle part . For "main.html"
// var a = document.getElementById("Main1").addEventListener("click", riddleFunction);
// var b = document.getElementById("Main2").addEventListener("click",test1);
// var c = document.getElementById("Main3").addEventListener("click", test2);
// var d = document.getElementById("Main4").addEventListener("click",test3);
// var counter = 0;


// riddle = [
//     {
//         "What hath but three feet, three hands, and three eyes?": "two pirates"
//     },
//     {
//         "Where do you take a sick pirate ship?": "to the dock"
//     },

//     {
//         "Adding a fake riddle" : "idk"
//     }

// ]

// document.getElementById("riddle-card").innerHTML = "What pet does a pirate carry on his shoulder?";


// function riddleFunction() {

//     for (key in riddle[counter]) {
//         if (riddle[counter].hasOwnProperty(key)) {
//             document.getElementById("riddle-card").innerHTML = key;
//         }
//     }
//     if (counter == riddle.length) {
//         counter -= riddle.length;
//     } else {
//         counter += 1;
//     };
// }


// -----------------------------------------------------------------
// main riddle part . For "main.html"
var btn1 = document.getElementById("btn1").addEventListener("click", miniFunc1);
var btn2 = document.getElementById("btn2").addEventListener("click", miniFunc2);
var btn3 = document.getElementById("btn3").addEventListener("click", miniFunc3);
var btn4 = document.getElementById("btn4").addEventListener("click", miniFunc4);

// seperate

function miniFunc1() {
    var a = document.getElementById("btn1").innerHTML;
    if (counter == riddle.length) {
        location.href = "won.html";
    } else if (a == riddle[counter].c) {
        counter += 1
        document.getElementById("riddle-card").innerHTML = riddle[counter].riddle;
        document.getElementById("btn1").innerHTML = riddle[counter].choice1;
        document.getElementById("btn2").innerHTML = riddle[counter].choice2;
        document.getElementById("btn3").innerHTML = riddle[counter].choice3;
        document.getElementById("btn4").innerHTML = riddle[counter].choice4;


    } else {
        location.href = "error.html";
    }

}

function miniFunc2() {
    var b = document.getElementById("btn2").innerHTML;

    if (counter == riddle.length) {
        location.href = "won.html";
    } else if (b == riddle[counter].c) {
        counter += 1
        document.getElementById("riddle-card").innerHTML = riddle[counter].riddle;
        document.getElementById("btn1").innerHTML = riddle[counter].choice1;
        document.getElementById("btn2").innerHTML = riddle[counter].choice2;
        document.getElementById("btn3").innerHTML = riddle[counter].choice3;
        document.getElementById("btn4").innerHTML = riddle[counter].choice4;


    } else {
        location.href = "error.html";
    }


}

function miniFunc3() {
    c = document.getElementById("btn3").innerHTML;

    if (counter == riddle.length) {
        location.href = "won.html";
    } else if (c == riddle[counter].c) {
        counter += 1
        document.getElementById("riddle-card").innerHTML = riddle[counter].riddle;
        document.getElementById("btn1").innerHTML = riddle[counter].choice1;
        document.getElementById("btn2").innerHTML = riddle[counter].choice2;
        document.getElementById("btn3").innerHTML = riddle[counter].choice3;
        document.getElementById("btn4").innerHTML = riddle[counter].choice4;


    } else {
        location.href = "error.html";
    }

}

function miniFunc4() {
    var d = document.getElementById("btn4").innerHTML;

    if (counter == riddle.length-1){
        location.href = "won.html";
    } else if (d == riddle[counter].c) {
        counter += 1
        document.getElementById("riddle-card").innerHTML = riddle[counter].riddle;
        document.getElementById("btn1").innerHTML = riddle[counter].choice1;
        document.getElementById("btn2").innerHTML = riddle[counter].choice2;
        document.getElementById("btn3").innerHTML = riddle[counter].choice3;
        document.getElementById("btn4").innerHTML = riddle[counter].choice4;


    } else {
        location.href = "error.html";
    }



}



var counter = 0;


riddle = [{
        riddle: "What hath but three feet, three hands, and three eyes?",
        choice1: "Two Pirates",
        choice2: "Two Lizards",
        choice3: "Nothing",
        choice4: "Ghost",
        c: "Two Pirates"
    },
    {
        riddle: "Where do you take a sick pirate ship?",
        choice1: "To the Dock",
        choice2: "Blast it",
        choice3: "Repair it",
        choice4: "idk ",
        c: "To the Dock"
    },
    {
        riddle: " You lost half of your sight in a fight as a pirate,whats the first thing you will look for?",
        choice1: "surrender",
        choice2: "Eye patch",
        choice3: "go to doctor",
        choice4: "take out someone's eye",
        c: "Eye patch"
    },
    {
        riddle: "A ship would drop this to stay still Even when the water’s calm It can also be a tattoo That you can also see on Popeye’s arm.What object is it",
        choice1: "Crew Members",
        choice2: "Anchor",
        choice3: "Rope",
        choice4: "sandbags",
        c: "Anchor"
    },
    {
        riddle: "He was a famous pirate The one who everyone feared A little color and a few facial hair?",
        choice1: "Jacksparrow",
        choice2: "BlackBeard",
        choice3: "Grace O' Malley",
        choice4: "Charles Gibbs",
        c: "BlackBeard"
    },
    {
        riddle: "What did the pirate say on his 80th birthday?",
        choice1: "decapticate",
        choice2: "Happy birthday",
        choice3: "Aye matey",
        choice4: "go to cinema",
        c: "Aye matey"
    }

]








function LOL() {

    document.getElementById("riddle-card").innerHTML = riddle[0].riddle;
    document.getElementById("btn1").innerHTML = riddle[0].choice1;
    document.getElementById("btn2").innerHTML = riddle[0].choice2;
    document.getElementById("btn3").innerHTML = riddle[0].choice3;
    document.getElementById("btn4").innerHTML = riddle[0].choice4;


}


counter = 0

// function riddleFunction() {




//     if (document.getElementById("btn1").innerText == riddle[counter].c) {
//         counter += 1
//         document.getElementById("riddle-card").innerHTML = riddle[counter].riddle;
//         document.getElementById("btn1").innerHTML = riddle[counter].choice1;
//         document.getElementById("btn2").innerHTML = riddle[counter].choice2;
//         document.getElementById("btn3").innerHTML = riddle[counter].choice3;
//         document.getElementById("btn4").innerHTML = riddle[counter].choice4;


//     } else {
//         console.log("wow");
//     }
// }



// function riddleFunction() {
// console.log(miniFunc1);

//     if (document.getElementById("btn1").innerText == riddle[counter].c) {
//         counter += 1
//         document.getElementById("riddle-card").innerHTML = riddle[counter].riddle;
//         document.getElementById("btn1").innerHTML = riddle[counter].choice1;
//         document.getElementById("btn2").innerHTML = riddle[counter].choice2;
//         document.getElementById("btn3").innerHTML = riddle[counter].choice3;
//         document.getElementById("btn4").innerHTML = riddle[counter].choice4;


//     } else {
//         console.log("wow");
//     }
// }