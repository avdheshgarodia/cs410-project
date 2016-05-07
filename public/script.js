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
        	var len = (5<data.length)? 5: data.length
        	for(i = 0;i<len;i++)
        	{
        		$("#restaurants").append('<li>'+data[i]+'</li>')
        	}	
    	});

		$.get("/twitter?q="+query,function(data, status)
		{
        	console.log("Data: " + data + "\nStatus: " + status);
    	});
    	$.get("/weather",function(data, status)
		{
        	console.log("Data: " + data + "\nStatus: " + status);
        	var current_conditions = "temp : "+data.current_observation.temp_c +" feel like " + data.current_observation.feelslike_c;
        	$("#restaurants").append('<li>'+data[i]+'</li>');
        	
        	// temp_c, feelslike_c
    	});

});




//intercept the button query. Jquery. HOw to insert boxes with Jquery. 