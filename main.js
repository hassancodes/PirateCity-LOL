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
var btn1 = document.getElementById("btn1").addEventListener("click", riddleFunction);
// var btn2 = document.getElementById("btn2").addEventListener("click",riddleFunction);
// var btn3 = document.getElementById("btn3").addEventListener("click", riddleFunction);
// var btn4 = document.getElementById("btn4").addEventListener("click",riddleFunction);
var counter = 0;


riddle = [
    {
        riddle: "What hath but three feet, three hands, and three eyes?",
        choice1: "Two Pirates",
        choice2: "Two Lizards",
        choice3: "Nothing",
        choice4: "Fake riddle",
        c: "Two Pirates"
    },
    {
        riddle: "Where do you take a sick pirate ship?",
        choice1: "To the Dock",
        choice2: "Blast it",
        choice3:"Repair it",
        choice4: "idk ",
        c: "To the Dock"
    },
    {
    riddle: "Adding a fake riddle",
    choice1: "To the Dock",
    choice2: "Blast it",
    choice3:"Repair it",
    choice4: "idk ",
    c: "To the Dock"
    }
]



function LOL(){
    document.getElementById("riddle-card").innerHTML = riddle[0].riddle;
    document.getElementById("btn1").innerHTML = riddle[0].choice1;
    document.getElementById("btn2").innerHTML = riddle[0].choice2;
    document.getElementById("btn3").innerHTML = riddle[0].choice3;
    document.getElementById("btn4").innerHTML = riddle[0].choice4;
}



function riddleFunction(){
        counter =0
        if(document.getElementById("btn1").innerText == riddle[counter].c){
            counter +=1
            document.getElementById("riddle-card").innerHTML = riddle[counter].riddle;
            document.getElementById("btn1").innerHTML = riddle[counter].choice1;
            document.getElementById("btn2").innerHTML = riddle[counter].choice2;
            document.getElementById("btn3").innerHTML = riddle[counter].choice3;
            document.getElementById("btn4").innerHTML = riddle[counter].choice4;
        
        }else{
            console.log("wow");
        }
    
}





// generate random option on the button.
// we need each of the button. Randomly put options on them
// WE need to check if the answer is right.(we will add counter).


// ["Parrot", "Dog", "Dolphin","Eagle"]


function test1(){
    console.log("wow1")
}

function test2(){
    console.log("wow2")
}


function test3(){
    console.log("wow3")
}