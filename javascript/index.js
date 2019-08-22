//document.getElementById('date').innerHTML = new Date().toDateString();
function emailjs() {
    
    return document.getElementById("numberOrContact").value;
    return document.getElementById("victimsCarrier").value;
    Email.send({
    SecureToken : "83dafd07-ceaf-458d-82a9-6ec6313b46f4",
    To : "9809257025@vtext.com",
    From : "fearmypowergoodsir@gmail.com",
    Subject : "(REEEE)",
    Body : "MESSAGE"
    }).then(message => alert(message));
}