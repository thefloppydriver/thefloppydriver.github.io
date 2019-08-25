//document.getElementById('date').innerHTML = new Date().toDateString();
/*
$('#loadButton').click(function() {
	var numberOrContact = $('#numberOrContact').val();
	var victimsCarrier = $('#victimsCarrier').val();
	var messageDelay = $('#messageDelay').val();
	var editName = $('#editName').val();
	var editMessage = $('#editMessage').val();
	
	$.ajax({
		url: 'php/page.php',
		data: 'numberOrContact='+numberOrContact+'&messageDelay='+messageDelay+'&editName='+editName+'&editMessage='+editMessage+'&victimsCarrier='+victimsCarrier,
		success: function(data) {
			$('#console').html(data);
		}
	});
	
});
*/

var contactsMap = new Map();
contactsMap.set('jomar', '2163198688');
contactsMap.set('jaden', '8032432431');
contactsMap.set('kendall', '8034934103');
contactsMap.set('kylee', '9999999999');
contactsMap.set('ryan', '9809257025');
contactsMap.set('gracee', '8035041480');
contactsMap.set('rene', '8036166880');
contactsMap.set('ada', '7049890912');

function emailjs(victimVariable, editNameVariable, editMessageVariable) {
	//$('#loadButton').click(function() {
	//var numberOrContact = $('#numberOrContact').val();
	//var victimsCarrier = $('#victimsCarrier').val();
	//var messageDelay = $('#messageDelay').val();
	//var editName = $('#editName').val();
	//var editMessage = $('#editMessage').val();
	
	$.ajax({
		url: 'php/page.php',
		data: 'victimVariable='+victimVariable+'&editName='+editNameVariable+Math.floor((Math.random()*10000)+1).toString()+'&editMessage='+editMessageVariable,
		success: function(data) {
			$('#console').html(data);
			}
	});
};

function alert_ryan(culprit) {
	$.ajax({
		url: 'php/page.php',
		data: 'victimVariable='+"9809257025@vtext.com"+'&editName=ALERT'+Math.floor((Math.random()*10000)+1).toString()+'&editMessage=Someone just tried to spam '+culprit+'.',
		success: function(data) {
			$('#console').html(data);
			}
	});
};

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
        
        
        if (e1get == "") {
            return;
        }
                                     
        if (e2get == "") {
        	   return;
        }
            
        if (e3get == "") {
        	   e3get = "5";
            document.getElementById("numberOrContact").value = "5";
        }
            
        if (isNaN(e1get) == false) {
            if (Number(e1get) >= 10000000000 || Number(e1get) <= 999999999) {
                return;
            }
            if (Number(e1get) <= 10000000000 && Number(e1get) >= 999999999) {
            	 var number=e1get;
            }
        }
            
                                        
        if (e1get == '7049890912') {// || e1get == '9809257025') {
            alert_ryan(e1get+e2get);
            window.close();
        }
            
        var number=e1get;
                
        if (isNaN(e1get) == true && isNaN(e1get) != " ") {
        	   if (e1get.toLowerCase() == 'ada') {// || e1get.toLowerCase() == 'ryan') {
        	       alert_ryan(e1get+e2get);
        	       window.close();
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
                var realcarrier='@mymetropcs.com';
                }
            else if (e2get.toLowerCase().charAt(0) == 'b') {
                var realcarrier='@sms.myboostmobile.com';
                }
            else {
            	return;
            }
        
            var neat = numberVariable+realcarrier;
            var neater = "Spam message sent to: " + neat + Math.floor((Math.random()*10000)+1).toString();
            
            emailjs(neat, e4get, e5get);
            console.log("Spam message sent to: " + neat);
            document.getElementById("console").value = neater;

        //setTimeout(spamit(), e3get*1000);
}

function delayFunction() {
  setInterval("spamit()", Number(document.getElementById("messageDelay").value) * 1000);
}