document.getElementById('date').innerHTML = new Date().toDateString();

function sendMail() {
    var link = "mailto:9809257025@vtext.com"
             + "?cc=fearmypowergoodsir@gmail.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}

function emailjs() {
    Email.send({
    SecureToken : "f783e512-0f19-4c3c-b5e3-b15c5acd1ae3",
    To : "9809257025@vtext.com",
    From : "fearmypowergoodsir@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
    }).then(message => alert(message))
}