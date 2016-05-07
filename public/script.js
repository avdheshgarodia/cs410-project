// $(document).ready(function(){
// 	$.get("/yelp",function(data, status)
// 		{
//         	alert("Data: " + data + "\nStatus: " + status);
//     	});
// });

document.getElementById("foot01").innerHTML = "cs410 project by garodia2,vkhande2";

document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='about.html'>About</a></li>" +
"</ul>";


$("#submit_button").on("click", function()
{
	// $.get("/twitter",function(data,status)
	// {
	// 	console($("#input").val());
	// });
		var query = $("#input").val();
		console.log(query);
		
		$.get("/yelp?loc="+query,function(data, status)
		{
        	console.log("Data: " + data + "\nStatus: " + status);
    	});

		$.get("/twitter?q="+query,function(data, status)
		{
        	console.log("Data: " + data + "\nStatus: " + status);
    	});

});




//intercept the button query. Jquery. HOw to insert boxes with Jquery. 