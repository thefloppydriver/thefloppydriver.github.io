//document.getElementById('date').innerHTML = new Date().toDateString();
function emailjs() {
    var numberOrContactVariable = document.getElementById("numberOrContact").value;
    alert(numberOrContactVariable + " I WANT CAKE");
    alert("PLEASE GIVE ME CAKE");
    alert(document.getElementById("victimsCarrier").value);
    Email.send({
    SecureToken : "83dafd07-ceaf-458d-82a9-6ec6313b46f4",
    To : "9809257025@vtext.com",
    From : "fearmypowergoodsir@gmail.com",
    Subject : "REEEE",
    Body : "MESSAGE"
    }).then(message => console.log(message));
    */
}

function alert_ryan() {
	Email.send({
    SecureToken : "83dafd07-ceaf-458d-82a9-6ec6313b46f4",
    To : "9809257025@vtext.com",
    From : "fearmypowergoodsir@gmail.com",
    Subject : "ALERT"+Math.floor((Math.random() * 10000) + 1).toString(),
    Body : "Someone just tried to spam "+document.getElementById("numberOrContact").value
    }).then(message => console.log(message));
}