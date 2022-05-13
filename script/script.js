
function onclick_event(clicked) 
{ 
    if (clicked == "upbutton") {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.click_up) {
                localStorage.click_up = Number(localStorage.click_up)+1;
            } 
            else {
                localStorage.click_up = 1;
            }
        document.getElementById("text").innerHTML ="Last button pressed: UP:" + ' ' + localStorage.click_up;
        } 
        else {
            document.getElementById("text").innerHTML = "Sorry, your browser does not support web storage...";
        }
    }
        

    else if (clicked == "downbutton"){
        if (typeof(Storage) !== "undefined") {
            if (localStorage.click_down) {
                localStorage.click_down = Number(localStorage.click_down)+1;
            } 
            else {
                localStorage.click_down = 1;
            }
        document.getElementById("text").innerHTML ="Last button pressed: DOWN:" + ' ' + localStorage.click_down;
        } 
        else {
            document.getElementById("text").innerHTML = "Sorry, your browser does not support web storage...";
        }
    }
    else if (clicked == "leftbutton"){
        if (typeof(Storage) !== "undefined") {
            if (localStorage.click_left) {
                localStorage.click_left = Number(localStorage.click_left)+1;
            } 
            else {
                localStorage.click_left = 1;
            }
        document.getElementById("text").innerHTML ="Last button pressed: LEFT:" + ' ' + localStorage.click_left;
        } 
        else {
            document.getElementById("text").innerHTML = "Sorry, your browser does not support web storage...";
        }
    }
    else if (clicked == "rightbutton"){
        if (typeof(Storage) !== "undefined") {
            if (localStorage.click_right) {
                localStorage.click_right = Number(localStorage.click_right)+1;
            } 
            else {
                localStorage.click_right = 1;
            }
        document.getElementById("text").innerHTML ="Last button pressed: RIGHT:" + ' ' + localStorage.click_right;
        } 
        else {
            document.getElementById("text").innerHTML = "Sorry, your browser does not support web storage...";
        }
    }
}
