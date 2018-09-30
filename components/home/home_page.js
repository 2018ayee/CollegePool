document.getElementById("defaultTab").click();
document.getElementById("defaultModalTab").click();
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("Post");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function changeTab(evt, tab){
	// Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

function changeModalTab(evt, tab){
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("modaltabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("modaltablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

function submitOffer(){
    span.click();
}
function multiply() {
    var div = document.createElement("div");
    div.id = "feed";
    div.className = "feed1";
    div.style.display = "all";
    document.getElementById('bigfeed').appendChild(div);
    
    var divtext = document.createElement("div");
    document.getElementById('feed').appendChild(divtext);
    divtext.id = "text1";
    
    var img = document.createElement("IMG");
    document.getElementById('text1').appendChild(img);
    img.id = "pfp";
    document.getElementById("pfp");
    img.className = "pfp";
    
    var header1 = document.createElement("h1");
    document.getElementById('text1').appendChild(header1);
    header1.id = "name";
    header1.innerHTML = "Name";
    header1.className = "header";
    
    var p1 = document.createElement('p');
    document.getElementById('text1').appendChild(p1);
    p1.id = "details1";
    p1.innerHTML = "Departure day for $$$$$";
    p1.className = "details";
    
    var map1 = document.createElement("IMG")
    document.getElementById('text1').appendChild(map1);
    map1.id = "map1";
    map1.className = "destination";

    var buttonhouse1 = document.createElement("div");
    document.getElementById('text1').appendChild(buttonhouse1);
    buttonhouse1.id = "buttonhouse1";
    buttonhouse1.className = "buttonhouse";
    
    var connect = document.createElement("button");
    document.getElementById('buttonhouse1').appendChild(connect);
    connect.id = "connect";
    connect.className = "buttons";
    connect.innerHTML = "Connect";



}
