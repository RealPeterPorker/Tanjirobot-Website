
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
        return up;
    }
    else if (clicked == "downbutton"){
        down += 1
        document.getElementById("text").innerHTML ="Last button pressed: DOWN:" + ' ' + down;
        return down;
    }
    else if (clicked == "leftbutton"){
        left += 1
        document.getElementById("text").innerHTML ="Last button pressed: LEFT:" + ' ' + left;
        return left;
    }
    else if (clicked == "rightbutton"){
        right += 1
        document.getElementById("text").innerHTML ="Last button pressed: RIGHT:" + ' ' + right;
        return right;
    }
}