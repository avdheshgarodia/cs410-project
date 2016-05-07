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
		
		$.get("/yelp?loc="+query+"&key=food",function(data, status)
		{
        	console.log("Data: " + data + "\nStatus: " + status);
        	var len = (5<data.length)? 5: data.length
        	for(i = 0;i<len;i++)
        	{
        		$("#restaurants").append('<li>'+data[i]+'</li>')
        	}	
    	});

    	$.get("/yelp?loc="+query+"&key=things%20to%20do",function(data, status)
		{
        	console.log("Data: " + data + "\nStatus: " + status);
        	var len = (5<data.length)? 5: data.length
        	for(i = 0;i<len;i++)
        	{
        		// $.get("/twitter?q="+data[i]+"&loc=" + query,function(data, status)
        		$("#places").append('<li>'+data[i]+'</li>')
        	}	
    	});

		$.get("/twitter?q="+query+"&loc=" + query,function(data, status)
		{
        	console.log("Data: " + data + "\nStatus: " + status);
        	//var len = (10<data.length)? 10: data.length
        	for(i = 0;i<data.length;i++)
        	{
        		if(data[i].sentiment!=0)
        		{
        			var tweet = "tweet : "+data[i].tweet+"; sentiment : "+data[i].sentiment 
        			$("#trending").append('<li>'+tweet+'</li>')
        		}
        	}

    	});
    	$.get("/weather",function(data, status)
		{
        	console.log("Data: " + data + "\nStatus: " + status);
        	var current_conditions = "temp : "+data.current_observation.temp_c +"; feel like : " + data.current_observation.feelslike_c;
        	$("#forecast").append('<li>'+current_conditions+'</li>');
        	for(i=0;i<(data.forecast.txt_forecast.forecastday.length);i+=2)
        	{
        		var daytime = data.forecast.txt_forecast.forecastday[i].fcttext;
        		var night = data.forecast.txt_forecast.forecastday[i+1].fcttext;
        		var forecast = "daytime : "+daytime+"; night : "+night
        		$("#forecast").append('<li>'+forecast+'</li>');
        	}
    	});

});



//intercept the button query. Jquery. HOw to insert boxes with Jquery. 