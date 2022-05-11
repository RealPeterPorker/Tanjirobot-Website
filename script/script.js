
var up = 0;
var down = 0;
var left = 0;
var right = 0;
function onclick_event(clicked) 
{ 
    console.log(clicked)
    if (clicked == "upbutton") {
        up += 1
        document.getElementById("text").innerHTML ="Last button pressed: UP:" + ' ' + up;
    }
    else if (clicked == "downbutton"){
        down += 1
        document.getElementById("text").innerHTML ="Last button pressed: DOWN:" + ' ' + down;
        
    }
    else if (clicked == "leftbutton"){
        left += 1
        document.getElementById("text").innerHTML ="Last button pressed: LEFT:" + ' ' + left;
    }
    else if (clicked == "rightbutton"){
        right += 1
        document.getElementById("text").innerHTML ="Last button pressed: RIGHT:" + ' ' + right;
    }
}