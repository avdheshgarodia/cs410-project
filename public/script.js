$(document).ready(function(){
$.get("/yelp",function(data, status)
	{
        alert("Data: " + data + "\nStatus: " + status);
    }
    );
});

document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " W3Schools. All rights reserved.</p>";

document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='about.html'>About</a></li>" +
"</ul>";


