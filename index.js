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

// If Information nav link is clicked, open or close its sub-links
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

// Functions for opening a certain panel
waitForLoad("positive-panel-btn", function () {
    document.getElementById("positive-panel-btn").onclick = function () {
        document.getElementById("positive-panel").style.height = "20vw";
        document.getElementById("positive-panel").style.width = "40vw";
        document.getElementById("positive-panel").style.padding = "25px";
    }
});
waitForLoad("neutral-panel-btn", function () {
    document.getElementById("neutral-panel-btn").onclick = function () {
        document.getElementById("neutral-panel").style.height = "20vw";
        document.getElementById("neutral-panel").style.width = "40vw";
        document.getElementById("neutral-panel").style.padding = "25px";
    }
});
waitForLoad("negative-panel-btn", function () {
    document.getElementById("negative-panel-btn").onclick = function () {
        document.getElementById("negative-panel").style.height = "20vw";
        document.getElementById("negative-panel").style.width = "40vw";
        document.getElementById("negative-panel").style.padding = "25px";
    }
});

// Function to close a panel
var closingPanelArray = document.getElementsByClassName("closing-panel-x"); // returns all elements with this class
var i;

for (i = 0; i < closingPanelArray.length; i++) {
    // Close parent message of the returned array 
    closingPanelArray[i].onclick = function () {
        var div = this.parentElement;
        // div.style.opacity = "0";

        // Fade out when shutting it down, and remove from display
        setTimeout(function () { div.style.height = "0"; div.style.width = "0"; div.style.padding = "0"; }, 300);
    }
}

// Code for displaying html and css code
function openCodeView(codeName) {
    // Display current tab-content passed in as arg
    if (document.getElementById(codeName).style.display == "") {
        document.getElementById(codeName).style.display = "block";
    } else {
        document.getElementById(codeName).style.display = "";
    }

}



