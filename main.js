// main riddle part . For "main.html"
var a = document.getElementById("Main").addEventListener("click", riddleFunction);
var counter = 0;


console.log("LOL");
riddle = [

    {
        "What pet does a pirate carry on his shoulder?": "Parrot"
    },
    {
        "What hath but three feet, three hands, and three eyes?": "two pirates"
    },
    {
        "Where do you take a sick pirate ship?": "to the dock"
    },

]




function riddleFunction() {

    for (key in riddle[counter]) {
        if (riddle[counter].hasOwnProperty(key)) {
            document.getElementById("riddle-card").innerHTML = key;
        }
    }
    if (counter == riddle.length) {
        counter -= riddle.length;
    } else {
        counter += 1;
    };
}