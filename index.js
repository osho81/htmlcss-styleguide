// Solution from stackoverflow for null type error when get unloaded element by id
function waitForLoad(id, callback) {
    var timer = setInterval(function () {
        if (document.getElementById(id)) {
            clearInterval(timer);
            callback();
        }
    }, 100);
}

// Open certain emailadress when contact footer is clicked
waitForLoad("contact-footer", function () {
    document.getElementById("contact-footer").onclick = function () {
        window.open('mailto:ossi.hour@gmail.com');
    }
})

// Refresh page when the "here" text is clicked
waitForLoad("refresh-page", function () {
    document.getElementById("refresh-page").onclick = function () {
        location.reload();
    }
});

// If Information link is clicked, open or close its sub-links
waitForLoad("info-subnav", function () {
    document.getElementById("info-subnav").onclick = function () {
        if (document.getElementById("sub-subnav").style.display == "block") {
            document.getElementById("sub-subnav").style.display = "none";
            document.getElementById("subnav-icon").classList.replace("fa-caret-up", "fa-caret-down");
        } else {
            document.getElementById("sub-subnav").style.display = "block";
            document.getElementById("subnav-icon").classList.replace("fa-caret-down", "fa-caret-up");
        }
    }
});

// Function for closing message alerts
var closingArray = document.getElementsByClassName("closing-x"); // returns all elements with this class
var i;

for (i = 0; i < closingArray.length; i++) {
    // Close parent message of the returned array 
    closingArray[i].onclick = function () {
        var div = this.parentElement;
        div.style.opacity = "0";

        // Fade out when shutting it down, and remove from display
        setTimeout(function () { div.style.display = "none"; }, 300);
    }
}

// Functions for opening panels
waitForLoad("info-subnav", function () {
    document.getElementById("info-subnav").onclick = function () {
        if (document.getElementById("sub-subnav").style.display == "block") {
            document.getElementById("sub-subnav").style.display = "none";
            document.getElementById("subnav-icon").classList.replace("fa-caret-up", "fa-caret-down");
        } else {
            document.getElementById("sub-subnav").style.display = "block";
            document.getElementById("subnav-icon").classList.replace("fa-caret-down", "fa-caret-up");
        }
    }
});
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";

// Function to close a panel
var closingPanelArray = document.getElementsByClassName("closing-panel-x"); // returns all elements with this class
var i;

for (i = 0; i < closingPanelArray.length; i++) {
    // Close parent message of the returned array 
    closingPanelArray[i].onclick = function () {
        var div = this.parentElement;
        div.style.opacity = "0";

        // Fade out when shutting it down, and remove from display
        setTimeout(function () { div.style.display = "none"; }, 300);
    }
}



