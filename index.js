// Solution from stackoverflow for the uncaught typeerror null onclick
function waitForLoad(id, callback) {
    var timer = setInterval(function () {
        if (document.getElementById(id)) {
            clearInterval(timer);
            callback();
        }
    }, 100);
}

waitForLoad("contact-footer", function () {
    document.getElementById("contact-footer").onclick = function () {
        window.open('mailto:ossi.hour@gmail.com'); // open certain emailadress when contact footer is clicked
    }
},
    waitForLoad("refresh-page", function () {
        document.getElementById("refresh-page").onclick = function () {
            location.reload(); // refresh page when the "here" text is clicked
        }
    })

);

// Function for closing message alerts
var closingArray = document.getElementsByClassName("closing-x"); // returns all elements with this class
var i;

console.log();

for (i = 0; i < closingArray.length; i++) {
    // Close parent message of the returned array 
    closingArray[i].onclick = function () {
        var div = this.parentElement;
        div.style.opacity = "0";

        // Fade out when shutting it down, and remove from display
        setTimeout(function () { div.style.display = "none"; }, 300);
    }
}



