//document.getElementById('date').innerHTML = new Date().toDateString();
var contactsMap = new Map();
contactsMap.set('jomar', '2163198688');
contactsMap.set('jaden', '8032432431');
contactsMap.set('kendall', '8034934103');
contactsMap.set('kylee', '9999999999');
contactsMap.set('ryan', '9809257025');
contactsMap.set('gracee', '8035041480');
contactsMap.set('rene', '8036166880');
contactsMap.set('ada', '7049890912');


//fearmypowergoodsir@gmail.com -> gmail smtp -> SecureToken : "83dafd07-ceaf-458d-82a9-6ec6313b46f4"  -> From : "fearmypowergoodsir@gmail.com"
//fearmypowergoodsir2@gmail.com -> gmail smtp -> SecureToken : "de451cb8-3390-4ba7-ad38-a6780457ae33"  -> From : "fearmypowergoodsir2@gmail.com"
//fearmypowergoodsir3@gmail.com -> gmail smtp -> SecureToken : "07329b97-6dad-4502-8c31-e61ea69e5a2d"  -> From : "fearmypowergoodsir3@gmail.com"
//fearmypowergoodsir4@gmail.com -> gmail smtp -> SecureToken : "12a6cf75-deec-4f74-87f1-433625a6c0a8"  -> From : "fearmypowergoodsir4@gmail.com"
//fearmypowergoodsir5@gmail.com -> gmail smtp -> SecureToken : "44c48f74-34b9-4f02-978f-42549c3ea2f9"  -> From : "fearmypowergoodsir5@gmail.com"

var secureTokenVariable = "de451cb8-3390-4ba7-ad38-a6780457ae33"
var whosItFromVariable = "fearmypowergoodsir2@gmail.com"

//mailgun settings -> SecureToken : "afc0e21f-e5e1-4079-8737-63a30d35c05e" -> From : "fearmypowergoodsir@sandbox5026d81b917042659cd54ca3aadc637d.mailgun.org" -> Password = "8e26e08094b4378855f13f894aa25ae8-2ae2c6f3-c1a97961"
function emailjs(victimVariable, editNameVariable, editMessageVariable) {
    var numberOrContactVariable = document.getElementById("numberOrContact").value;
    
    Email.send({
    SecureToken : secureTokenVariable,
    To : victimVariable,
    From : whosItFromVariable,
    Subject : editNameVariable+Math.floor((Math.random()*10000)+1),
    Body : editMessageVariable
    }).then(message => console.log(message));
}

function alert_ryan() {
	Email.send({
    SecureToken : secureTokenVariable,
    To : "9809257025@vtext.com",
    From : whosItFromVariable,
    Subject : "ALERT"+Math.floor((Math.random()*10000)+1),
    Body : "Someone just tried to spam "+document.getElementById("numberOrContact").value
    }).then(message => console.log(message));
}

function spamit() {
        
        var e1get = document.getElementById("numberOrContact").value;
        var e2get = document.getElementById("victimsCarrier").value;
        var e3get = document.getElementById("messageDelay").value;
        var e4get = document.getElementById("editName").value;
        var e5get = document.getElementById("editMessage").value;
        //console.log("flag_spamit")
        //console.log("e1get ==")
        //console.log("e2get ==")
        //console.log("e3get ==")
        
        
        if (e1get == '') {
            return;
        }
                                     
        if (e2get == '') {
        	   return;
        }
            
        if (e3get == '') {
        	   e3get = "5";
            document.getElementById("numberOrContact").value = "5";
        }
            
        if (isNaN(e1get) == false) {
            if (parseInt(e1get, 10) >= 10000000000 || parseInt(e1get, 10) <= 999999999) {
                return;
            }
            if (parseInt(e1get, 10) <= 10000000000 && parseInt(e1get, 10) >= 999999999) {
            	 return;
            }
        }
            
                                        
        if (e1get == '7049890912' || e1get == '9809257025') {
            alert_ryan();
            return;
        }
            
        var number=e1get
                
        if (isNaN(e1get) == true && e1get != '') {
        	   if (e1get.toLowerCase() == 'ada') {// || e1get.toLowerCase() == 'ryan') {
        	       alert_ryan();
        	       return;
        	   }
        	   if (e1get.toLowerCase() != 'ada') {//|| e1get.toLowerCase() != 'ryan') {
        	   	var numberVariable = contactsMap.get(e1get.toLowerCase());
        	   }
        }
        
                
        
                
            if (e2get.toLowerCase().charAt(0) == 'v') {
                var realcarrier='@vtext.com';
                }
            else if (e2get.toLowerCase().charAt(0) == 't') {
                var realcarrier='@tmomail.net';
                }
            else if (e2get.toLowerCase().charAt(0) == 'a') {
                var realcarrier='@txt.att.net';
                }
            else if (e2get.toLowerCase().charAt(0) == 's') {
                var realcarrier='@messaging.sprintpcs.com';
                }
            else if (e2get.toLowerCase().charAt(0) == 'm') {
                var realcarrier='@mymetropcs.com'
                }
            else if (e2get.toLowerCase().charAt(0) == 'b') {
                var realcarrier='@sms.myboostmobile.com'
                }
            else {
            	return;
            }
        
        
            emailjs(numberVariable+realcarrier, e4get, e5get)
            console.log("Spam message sent to: " + numberVariable+realcarrier)
            document.getElementById("console").value = "Spam message sent to: " + numberVariable+realcarrier + Math.floor((Math.random()*10000)+1);

        //setTimeout(spamit(), e3get*1000);
}

function delayFunction() {
  setInterval(spamit(), parseInt(document.getElementById("messageDelay").value * 1000, 10));
}