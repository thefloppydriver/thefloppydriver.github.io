document.getElementById('date').innerHTML = new Date().toDateString();

function sendMail() {
    var link = "mailto:9809257025@vtext.com"
             + "?cc=fearmypowergoodsir@gmail.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}