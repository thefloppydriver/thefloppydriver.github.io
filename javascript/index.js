var phpFileDomainName = '30767013';

var defaultAccountNumber = '2';

var brokenAccountNumbers = ['1',
                            '0'];

var contactsMap = new Map([['jomar', '2163198688'],
                           ['jaden', '8032432431'],
                           ['kendall', '8034934103'],
                           ['kylee', '9999999999'],
                           ['ryan', '9809257025'],
                           ['gracee', '8035041480'],
                           ['rene', '8036166880'],
                           ['chloe','7042147602'],
                           ['ada', '7049890912']
                           ]);

var supportedCarriers = {
								'v':'@vtext.com',
								't':'@tmomail.net',
								'a':'@txt.att.net',
								's':'@messaging.sprintpcs.com',
								'm':'@mymetropcs.com',
								'b':'@sms.myboostmobile.com'
								};

var blacklist = [//'ryan',
					  'ada'];

blacklist.forEach(checker);

function checker(value) {
	blacklist.push(contactsMap.get(value));
}


//console.log(blacklist.toString());

                           
/*contactsMap.set('jomar', '2163198688');
contactsMap.set('jaden', '8032432431');
contactsMap.set('kendall', '8034934103');
contactsMap.set('kylee', '9999999999');
contactsMap.set('ryan', '9809257025');
contactsMap.set('gracee', '8035041480');
contactsMap.set('rene', '8036166880');
contactsMap.set('ada', '7049890912');*/

function emailjs(victimVariable, editNameVariable, editMessageVariable, accountNumber, passToPC) {
	var randomNumberVariable = Math.floor((Math.random()*10000)+1).toString();
	$.ajax({
		//cache: false,
		//headers: {'Access-Control-Allow-Origin': '*'},
		url: 'https://'+phpFileDomainName+'.ngrok.io',
		data: 'passToPC='+passToPC+'&accountNumber='+accountNumber+'&victimVariable='+victimVariable+'&editName='+editNameVariable+randomNumberVariable+'&editMessage='+editMessageVariable,
		success: function(data) {
			$('#console').html('Spam message sent to: '+victimVariable+'.\nMessage Sent: ('+editNameVariable+randomNumberVariable+')\n'+editMessageVariable);
			}
	});
}

function alert_ryan(culprit, editNameVariable) {
	var randomNumberVariable = Math.floor((Math.random()*10000)+1).toString();
	$.ajax({
		//cache: false,
		//headers: {'Access-Control-Allow-Origin': '*'},
		url: 'https://'+phpFileDomainName+'.ngrok.io',
		data: 'passToPC=noyeet&victimVariable=9809257025@vtext.com&accountNumber='+defaultAccountNumber+'&editName=ALERT'+randomNumberVariable+'&editMessage=Someone just tried to spam '+culprit+'.',
		success: function(data) {
			$('#console').html(editNameVariable+' is on the blacklist.');
			
			}
	});
}

function spamit(neat, e4get, e5get, e6get, e7get) {
         //var e1get = document.getElementById("numberOrContact").value;
         //var e2get = document.getElementById("victimsCarrier").value;
         //var e3get = document.getElementById("messageDelay").value;
         //var e4get = document.getElementById("editName").value;
         //var e5get = document.getElementById("editMessage").value;
         //var e6get = document.getElementById("accountNumber").value;
			if (e7get == "true") {
				var e7get2 = (Math.random() >= 0.5).toString();
				
				if (e7get2 == "true") {
         		var e7get3 = "yeet";
         	}
         	
         	if (e7get2 == "false") {
         		var e7get3 = "noyeet";
         	}
         }
         
         if (e7get == "false") {
         	var e7get3 = "noyeet";
         }
         
        
         //if (e1get == "") {
         //    return;
         //}
                                     
         //if (e2get == "") {
         //	   return;
         //}
         //   
         //if (e3get == "") {
        	//    e3get = "5";
         //    document.getElementById("numberOrContact").value = "5";
         //}
         
         /*   
         if (isNaN(e1get) == false) {
             if (Number(e1get) >= 10000000000 || Number(e1get) <= 999999999) {
                 return;
             }
             if (Number(e1get) <= 10000000000 && Number(e1get) >= 999999999) {
             	 var numberVariable=e1get;
             }
         }
            
                                        
         if (e1get == '7049890912' || e1get == '9809257025') {
             alert_ryan(e1get+' on '+e2get, e1get, e7get);
             window.close();
         }
         
         var numberVariable=e1get;
         
         if (isNaN(e1get) == true && isNaN(e1get) != " ") {
         	   if (e1get.toLowerCase() == 'ada') {// || e1get.toLowerCase() == 'ryan') {
         	       alert_ryan(e1get+' on '+e2get, e1get, e7get);
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
         	var realcarrier='@mymetropcs.com';
         }
         else if (e2get.toLowerCase().charAt(0) == 'b') {
         	var realcarrier='@sms.myboostmobile.com';
         }
         else {
         	return;
         }
         */
         
			//var neat = numberVariable+realcarrier;
         emailjs(neat, e4get, e5get, e6get, e7get3);
			//console.log("Spam message sent to: "+neat);
         //document.getElementById("console").innerHTML = "Spam message sent to: "+neat;

}

function delayFunction(MSP) {
	
	var exit_pls = "no";
	
	document.getElementById("console").innerHTML = 0
	
	var e1get = document.getElementById("numberOrContact").value;
   var e2get = document.getElementById("victimsCarrier").value;
   var e3get = document.getElementById("messageDelay").value;
   var e4get = document.getElementById("editName").value;
   var e5get = document.getElementById("editMessage").value;
	var e6get = document.getElementById("accountNumber").value;
	
	document.getElementById("console").innerHTML = 1
	
	if (e1get == "") {
		//document.getElementById("console").innerHTML = "The Number or Contact field is required.";
		document.getElementById("numberOrContactSpan").innerHTML = "&nbsp;Enter number or contact";
		$("#numberOrContactClass").removeClass("field_wrapper");
		$("#numberOrContactClass").addClass("fieldREQUIRED");
		$("#numberOrContactRequired").removeClass("removeItem");
		var exit_pls = "yes";
	}
	
	document.getElementById("console").innerHTML = 2
	
	if (e2get == "") {
		document.getElementById("victimsCarrierSpan").innerHTML = "&nbsp;Enter victim's carrier";
		$("#victimsCarrierClass").removeClass("field_wrapper");
		$("#victimsCarrierClass").addClass("fieldREQUIRED");
		$("#victimsCarrierRequired").removeClass("removeItem");
   	var exit_pls = "yes";
   }
   
	document.getElementById("console").innerHTML = 3
   
   if (e3get == "") {
   	//e3get = "5";
      document.getElementById("messageDelay").value = "5";
      document.getElementById("messageDelaySpan").innerHTML = "&nbsp;Message Delay set to <strong>5</strong> automatically.";
      $("#messageDelayClass").addClass("hasValue");
      $("#messageDelayClass").removeClass("field_wrapper");
		$("#messageDelayClass").addClass("fieldREQUIRED");
		$("#messageDelayRequired").removeClass("removeItem");
		//var exit_pls = "yes";
   }
	
	if (e4get == "") {
		//document.getElementById("console").innerHTML = "The Number or Contact field is required.";
		document.getElementById("editNameSpan").innerHTML = "&nbsp;Enter name";
		$("#editNameClass").removeClass("field_wrapper");
		$("#editNameClass").addClass("fieldREQUIRED");
		$("#editNameRequired").removeClass("removeItem");
		var exit_pls = "yes";
	}
	
	if (e5get == "") {
		//document.getElementById("console").innerHTML = "The Number or Contact field is required.";
		document.getElementById("editMessageSpan").innerHTML = "&nbsp;Enter message";
		$("#editMessageClass").removeClass("field_wrapper");
		$("#editMessageClass").addClass("fieldREQUIRED");
		$("#editMessageRequired").removeClass("removeItem");
		var exit_pls = "yes";
	}
	
	if (e6get == "") {
		//document.getElementById("console").innerHTML = "The Number or Contact field is required.";
		document.getElementById("accountNumberSpan").innerHTML = "&nbsp;Enter account number";
		$("#accountNumberClass").removeClass("field_wrapper");
		$("#accountNumberClass").addClass("fieldREQUIRED");
		$("#accountNumberRequired").removeClass("removeItem");
		var exit_pls = "yes";
	}
	
	document.getElementById("console").innerHTML = 4
	
	//if (document.getElementById("MSP").checked == true) {
	//	var e7get = "true";
   //}
   if (MSP == "yes") {
   	var e7get = "true"
   }
   
	document.getElementById("console").innerHTML = 5   
   
   //if (document.getElementById("MSP").checked == false) {
   //	var e7get = "false";
   //}
   
   if (MSP == "no") {
   	var e7get = "false";
   }
	
	document.getElementById("console").innerHTML = 6
	if (exit_pls == "no") {
		if (isNaN(e1get) == false) {
   		if (Number(e1get) >= 10000000000 || Number(e1get) <= 999999999) {
   			document.getElementById("numberOrContactSpan").innerHTML = "&nbsp;Phone numbers should be formatted like this: \"8005882300\"";
				$("#numberOrContactClass").removeClass("field_wrapper");
				$("#numberOrContactClass").addClass("fieldREQUIRED");
				$("#numberOrContactRequired").removeClass("removeItem");
				exit_pls = "yes";
   			//document.getElementById("console").innerHTML = "Phone numbers should be formatted like this: \"8005882300\""
      		//return;
      	}
      	if (Number(e1get) <= 10000000000 && Number(e1get) >= 999999999) {
      		var numberVariable=e1get;
			}
   	}
   }
   
	
	document.getElementById("console").innerHTML = 7
	
	if (blacklist.indexOf(e1get.toLowerCase()) >= 0) {//(blacklist.includes(e1get.toLowerCase()) == true) {
   	alert_ryan(e1get+' on '+e2get, e1get);
      return;
   }
   
	document.getElementById("console").innerHTML = 8
   
   //var numberVariable=e1get;
   
	document.getElementById("console").innerHTML = 9
   
   if (exit_pls == "no") {
   	if (isNaN(Number(e1get)) == true) {
   		var numberVariable = contactsMap.get(e1get.toLowerCase());
   	}
   }
   
	document.getElementById("console").innerHTML = 10
   /*
   var pp = e2get.toLowerCase().charAt(0);
   
   if (pp == 'v') {
   	var realcarrier='@vtext.com';
   }
   else if (pp == 't') {
   	var realcarrier='@tmomail.net';
   }
   else if (pp == 'a') {
   	var realcarrier='@txt.att.net';
   }
   else if (pp == 's') {
   	var realcarrier='@messaging.sprintpcs.com';
   }
   else if (pp == 'm') {
   	var realcarrier='@mymetropcs.com';
   }
   else if (pp == 'b') {
   	var realcarrier='@sms.myboostmobile.com';
   }
   else
   
	document.getElementById("console").innerHTML = 11
   
   if (pp != 'v' && pp != 't' && pp != 'a' && pp != 's' && pp != 'm' && pp != 'b') {
   	document.getElementById("console").innerHTML = e2get+" is not currently a supported carrier. If you want it supported contact the <strong>webmaster</strong> at thefloppydriver@gmail.com.";
   	return;
   }
   */
   var carrierFirstChar = e2get.toLowerCase().charAt(0);
   
   document.getElementById("console").innerHTML = 11
   
   if (supportedCarriers[carrierFirstChar] == undefined && exit_pls == "no") {
   		document.getElementById("victimsCarrierSpan").innerHTML = "&nbsp;"+e2get+" is not currently a supported carrier. If you want it supported contact the <strong>webmaster</strong> at thefloppydriver@gmail.com.";
			$("#victimsCarrierClass").removeClass("field_wrapper");
			$("#victimsCarrierClass").addClass("fieldREQUIRED");
			$("#victimsCarrierRequired").removeClass("removeItem");
			exit_pls == "yes";
   		//document.getElementById("console").innerHTML = e2get+" is not currently a supported carrier. If you want it supported contact the <strong>webmaster</strong> at thefloppydriver@gmail.com.";
   		//return;
   	}
   	
   if (exit_pls == "no") {   
   
   	document.getElementById("console").innerHTML = 12
   
   
   	if (supportedCarriers[carrierFirstChar].charAt(0) == '@') {
   		var realcarrier = supportedCarriers[carrierFirstChar];
   	}
   
   
   	document.getElementById("console").innerHTML = 13
   	
		if (e6get > "5" || e6get < "1") {
			document.getElementById("accountNumberSpan").innerHTML = "&nbsp;Account Number must be between 1 and 5.";
			$("#accountNumberClass").removeClass("field_wrapper");
			$("#accountNumberClass").addClass("fieldREQUIRED");
			$("#accountNumberRequired").removeClass("removeItem");
			exit_pls = "yes";
			//document.getElementById("console").innerHTML = "Account Number must be between 1 and 5."
   		//return;
   	}
   
		document.getElementById("console").innerHTML = 14
		
		/*
   	if (brokenAccountNumbers.indexOf(e6get) >= 0) {//(brokenAccountNumbers.includes(e6get) == true) {
   		document.getElementById("accountNumberSpan").innerHTML = "&nbsp;Account Number "+e6get+" is broken, please choose another.";
			$("#accountNumberClass").removeClass("field_wrapper");
			$("#accountNumberClass").addClass("fieldREQUIRED");
			$("#accountNumberRequired").removeClass("removeItem");
			exit_pls = "yes";
   		//document.getElementById("console").innerHTML = "Account Number "+e6get+" is broken, please choose another."
   		//return;
   	}*/
	   
		document.getElementById("console").innerHTML = 15
		var numReal = '"'+numberVariable+realcarrier+'"'
		
	   //var spammy = "spamit('"+numberVariable+realcarrier+"','"+e4get+"','"+e5get+"','"+e6get+"','"+e7get+"')"
	   //var spammy = `spamit(${numReal}, ${e4get}, ${e5get}, ${e6get}, ${e7get})`
	   
	   document.getElementById("console").innerHTML = 16
	   
	   var e4get2 = '"'+e4get+'"';
	   var e5get2 = '"'+e5get+'"';
	   var e6get2 = '"'+e6get+'"';
	   var e7getVariable = '"'+e7get+'"';
   }
   
   document.getElementById("console").innerHTML = 17;
   if (exit_pls == "yes") {
   	if (e1get != "" && e1get != " ") {
			//document.getElementById("console").innerHTML = "The Number or Contact field is required.";
			//document.getElementById("numberOrContactSpan").innerHTML = "&nbsp;Enter number or contact";
			$("#numberOrContactClass").removeClass("fieldREQUIRED");
			$("#numberOrContactClass").addClass("field_wrapper");
			$("#numberOrContactRequired").addClass("removeItem");
				
		}
		
		if (e2get != "") {
			//document.getElementById("victimsCarrierSpan").innerHTML = "&nbsp;Enter victim's carrier";
			$("#victimsCarrierClass").removeClass("fieldREQUIRED");
			$("#victimsCarrierClass").addClass("field_wrapper");
			$("#victimsCarrierRequired").addClass("removeItem");
			if (supportedCarriers[carrierFirstChar] == undefined) {
		   		document.getElementById("victimsCarrierSpan").innerHTML = "&nbsp;"+e2get+" is not currently a supported carrier. If you want it supported contact the <strong>webmaster</strong> at thefloppydriver@gmail.com.";
					$("#victimsCarrierClass").removeClass("field_wrapper");
					$("#victimsCarrierClass").addClass("fieldREQUIRED");
					$("#victimsCarrierRequired").removeClass("removeItem");
   		//document.getElementById("console").innerHTML = e2get+" is not currently a supported carrier. If you want it supported contact the <strong>webmaster</strong> at thefloppydriver@gmail.com.";
   		//return;
   		}
	   }
		
		if (e4get != "") {
			//document.getElementById("console").innerHTML = "The Number or Contact field is required.";
			//document.getElementById("editNameSpan").innerHTML = "&nbsp;Enter name";
			$("#editNameClass").removeClass("fieldREQUIRED");
			$("#editNameClass").addClass("field_wrapper");
			$("#editNameRequired").addClass("removeItem");
			//var exit_pls = "yes";
		}
		
		if (e5get != "") {
			//document.getElementById("console").innerHTML = "The Number or Contact field is required.";
			//document.getElementById("editMessageSpan").innerHTML = "&nbsp;Enter message";
			$("#editMessageClass").removeClass("fieldREQUIRED");
			$("#editMessageClass").addClass("field_wrapper");
			$("#editMessageRequired").addClass("removeItem");
			//var exit_pls = "yes";
		}
		
		if (e6get != "") {
			//document.getElementById("console").innerHTML = "The Number or Contact field is required.";
			//document.getElementById("accountNumberSpan").innerHTML = "&nbsp;Enter account number";
			$("#accountNumberClass").removeClass("fieldREQUIRED");
			$("#accountNumberClass").addClass("field_wrapper");
			$("#accountNumberRequired").addClass("removeItem");
			//var exit_pls = "yes";
		}
		
		if (brokenAccountNumbers.indexOf(e6get) >= 0) {//(brokenAccountNumbers.includes(e6get) == true) {
   		document.getElementById("accountNumberSpan").innerHTML = "&nbsp;Account Number "+e6get+" is broken, please choose another.";
			$("#accountNumberClass").removeClass("field_wrapper");
			$("#accountNumberClass").addClass("fieldREQUIRED");
			$("#accountNumberRequired").removeClass("removeItem");
			exit_pls = "yes";
		}
		
   	return;
   }
   
   if (exit_pls == "no") {
   	$("#numberOrContactClass").removeClass("fieldREQUIRED");
		$("#numberOrContactClass").addClass("field_wrapper");
		$("#victimsCarrierClass").removeClass("fieldREQUIRED");
		$("#victimsCarrierClass").addClass("field_wrapper");
		// $("#messageDelayClass").removeClass("fieldREQUIRED");
		// $("#messageDelayClass").addClass("field_wrapper");
		$("#accountNumberClass").removeClass("fieldREQUIRED");
		$("#accountNumberClass").addClass("field_wrapper");
		$("#editNameClass").removeClass("fieldREQUIRED");
		$("#editNameClass").addClass("field_wrapper");
		$("#editMessageClass").removeClass("fieldREQUIRED");
		$("#editMessageClass").addClass("field_wrapper");
		
		$("#numberOrContactRequired").addClass("removeItem");
		$("#victimsCarrierRequired").addClass("removeItem");
		$("#accountNumberRequired").addClass("removeItem");
		$("#editNameRequired").addClass("removeItem");
		$("#editMessageRequired").addClass("removeItem");
		
   }
	setInterval('spamit('+numReal+', '+e4get2+', '+e5get2+', '+e6get2+', '+e7getVariable+')', Number(document.getElementById("messageDelay").value) * 1000); //spammy, Number(document.getElementById("messageDelay").value) * 1000);
}