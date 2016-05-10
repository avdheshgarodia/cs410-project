$(document).ready(function () {
    
    $('#input').keypress(function (e) {
        if (e.keyCode == 13)
            $('#submit_button').click();
    });

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    $("#submit_button").on("click", function () {
        // $.get("/twitter",function(data,status)
        // {
        // 	console($("#input").val());
        // });
        var query = $("#input").val();
        console.log(query);

        $.get("/yelp?loc=" + query + "&key=food", function (data, status) {
            console.log("Data: " + data + "\nStatus: " + status);
            var len = (5 < data.length) ? 5 : data.length
            for (i = 0; i < len; i++) {
                $("#restaurants").append('<li>' + data[i] + '</li>')
            }
        });

        $.get("/yelp?loc=" + query + "&key=things%20to%20do", function (data, status) {
            console.log("Data: " + data + "\nStatus: " + status);
            var len = (5 < data.length) ? 5 : data.length
            for (i = 0; i < len; i++) {
                // $.get("/twitter?q="+data[i]+"&loc=" + query,function(data, status)
                $("#places").append('<li>' + data[i] + '</li>')
            }
        });

        $.get("/twitter?q=" + query + "&loc=" + query, function (data, status) {
            console.log("Data: " + data + "\nStatus: " + status);
            //var len = (10<data.length)? 10: data.length
            for (i = 0; i < data.length; i++) {
                if (data[i].sentiment != 0) {
                    var tweet = "<h6><b>Tweet</b></h6> : " + data[i].tweet + " ---- <b>Sentiment</b> : " + data[i].sentiment
                    $("#trending").append('<li>' + tweet + '</li>')
                }
            }

        });
        $.get("/weather", function (data, status) {
            var d = new Date();
            var n = d.getDay();
            
            console.log("Data: " + data + "\nStatus: " + status);
            var current_conditions = "    Temperature : " + data.current_observation.temp_c + " -- Feels Like : " + data.current_observation.feelslike_c;
            $("#forecast").append('<h6><b>Today</h6></b>');
            $("#forecast").append('<li>' + current_conditions + '</li>');
            $("#forecast").append('<h6><b>4 Day Forecast</h6></b>');
            
            for (i = 0; i < (data.forecast.txt_forecast.forecastday.length); i += 2) {
                $("#forecast").append('<h6><b>'+days[(n+((i/2)+1))%7]+'</b></h6>');
                var daytime = data.forecast.txt_forecast.forecastday[i].fcttext;
                var night = data.forecast.txt_forecast.forecastday[i + 1].fcttext;
                var forecast = "Morning : " + daytime;
                var forecast1 = "Night : " + night;

                $("#forecast").append('<li>' + forecast + '</li>');
                $("#forecast").append('<li>' + forecast1 + '</li>');
            }
            
        });

    });
});





//intercept the button query. Jquery. HOw to insert boxes with Jquery.