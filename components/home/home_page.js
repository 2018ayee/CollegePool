var blocks = 1;
var span;
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
    span = document.getElementsByClassName("close")[0];

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

function submit(type){
    span.click();
    if(type == 'offer')
    {
        var departureDate = document.getElementById("departureOffer").value;
        var pickup = document.getElementById("pickupOffer").value;
        var destination = document.getElementById("destinationOffer").value;
        var price = document.getElementById("priceOffer").value;
        var capacity = document.getElementById("capacityOffer").value;
        var comments = document.getElementById("commentsOffer").value;
        addPost(departureDate, pickup, destination, comments, price, capacity);
    }
    else{
        var departureDate = document.getElementById("departureRequest").value;
        var pickup = document.getElementById("pickupRequest").value;
        var destination = document.getElementById("destinationRequest").value;
        var comments = document.getElementById("commentsOffer").value;
        addPost(departureDate, pickup, destination, comments);
    }
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
function toHistory(){
    location.href="http://localhost:8080/components/history/history_page.html";
}
function toSettings(){
    location.href="http://localhost:8080/components/settings/settings_page.html";
}
function addPost(date, pickup, destination, comments, price, capacity) {
    var div = document.createElement("div");
    div.id = "feed"+blocks;
    div.className = "feed1";
    div.style.display = "all";
    div.style.marginTop = "50px";
    div.style.marginBottom = "50px";
    //div.style.paddingLeft = "20%";
    //div.style.width = "40%";
    document.getElementById('bigfeed').appendChild(div);
    
    var divtext = document.createElement("div");
    document.getElementById('feed'+blocks).appendChild(divtext);
    divtext.id = "text"+blocks;
    
    var img = document.createElement("IMG");
    document.getElementById('text'+blocks).appendChild(img);
    img.id = "pfp"+blocks;
    document.getElementById("pfp");
    img.className = "pfp";
    img.src = "../../img/sample_profile.jpg";
    
    var header1 = document.createElement("h1");
    document.getElementById('text'+blocks).appendChild(header1);
    header1.id = "name"+blocks;
    header1.innerHTML = "Adam Yee";
    header1.className = "header";
    
    var p1 = document.createElement('p');
    document.getElementById('text'+blocks).appendChild(p1);
    p1.id = "details"+blocks;
    p1.innerHTML = "Leaving " + date + " from " + pickup + " to " + destination + " for " + price;
    p1.className = "details";
    
    var map1 = document.createElement("IMG")
    document.getElementById('text'+blocks).appendChild(map1);
    map1.id = "map"+blocks;
    map1.className = "destination";
    map1.src = "../../img/virginia_map.jpg";

    var buttonhouse1 = document.createElement("div");
    document.getElementById('text'+blocks).appendChild(buttonhouse1);
    buttonhouse1.id = "buttonhouse"+blocks;
    buttonhouse1.className = "buttonhouse";
    
    var connect = document.createElement("button");
    document.getElementById('buttonhouse'+blocks).appendChild(connect);
    connect.id = "connect"+blocks;
    connect.className = "buttons";
    connect.innerHTML = "Connect";
    blocks++;
}