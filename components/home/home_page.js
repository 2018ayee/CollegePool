init();
function init(){
    // window.addEventListener("resize", onWindowResize());
    document.getElementById("defaultTab").click();
    document.getElementById("defaultModalTab").click();
    var size = "" + (window.innerWidth - 600) + "px";
    console.log(size);
    var tabcontents = document.getElementsByClassName('tabcontent')
    for(var x = 0; x < tabcontents.length; x++)
    {
        tabcontents[x].style.width = size;
    }

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
}

window.onresize = function(event){
    console.log("resize")
    var size = "" + (window.innerWidth - 600) + "px";
    console.log(size);
    var tabcontents = document.getElementsByClassName('tabcontent')
    for(var x = 0; x < tabcontents.length; x++)
    {
        tabcontents[x].style.width = size;
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

function filter(newsType){
    requestContent = document.getElementsByClassName("request");
    offerContent = document.getElementsByClassName("offer");
    if(newsType == "offer"){
        for (i = 0; i < requestContent.length; i++) {
            requestContent[i].style.display = "none";
        }
        for (i = 0; i < offerContent.length; i++) {
            offerContent[i].style.display = "block";
        }
    }
    else if(newsType == "request"){
        for (i = 0; i < requestContent.length; i++) {
            requestContent[i].style.display = "block";
        }
        for (i = 0; i < offerContent.length; i++) {
            offerContent[i].style.display = "none";
        }
    }
    else if(newsType == "all"){
        for (i = 0; i < requestContent.length; i++) {
            requestContent[i].style.display = "block";
        }
        for (i = 0; i < offerContent.length; i++) {
            offerContent[i].style.display = "block";
        }
    }
}