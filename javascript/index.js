var phpFileDomainName = '9a5cf4c1';

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
                           ['alice', '8034934864'],
                           ['maggie', '8038336657'],
                           ['ada', '7049890912']
                           ]);

var supportedCarriers = {
								've':'@vtext.com', //Verizon Wireless
								't-':'@tmomail.net', //T-Mobile
								'tm':'@tmomail.net', //TMobile
								't ':'@tmomail.net', //T Mobile
								'at':'@txt.att.net', //AT&T
								'sp':'@messaging.sprintpcs.com', //Sprint
								'me':'@mymetropcs.com', //MetroPCS
								'bo':'@sms.myboostmobile.com', //Boost Mobile
								'xf':'@vtext.com', //XFinity Mobile
								'x-':'@vtext.com', //X-Finity Mobile
								'x ':'@vtext.com', //X Finity Mobile
								'cr':'@sms.cricketwireless.net', //Cricket Wireless
								'co':'@mailmymobile.net', //Consumer Cellular
								'c-':'@cspire1.com', //C-Spire
								'c ':'@cspire1.com', //C Spire
								'cs':'@cspire1.com', //CSpire
								'go':'@msg.fi.google.com', //Google Fi
								'pr':'@msg.fi.google.com', //Project Fi
								'fi':'@msg.fi.google.com', //Fi
								'pa':'@vtext.com', //Page Plus
								're':'@text.republicwireless.com', //Republic Wireless
								'u.':'@email.uscc.net', //U.S. Cellular
								'u ':'@email.uscc.net', //U S Cellular
								'us':'@email.uscc.net', //US Cellular
								'tr':'@mmst5.tracfone.com', //Tracfone
								'ti':'@message.ting.com', //Ting
								'vi':'@vmobl.com' //Virgin Mobile
								};

var blacklist = ['ada'];

blacklist.forEach(blacklist_checker);

function blacklist_checker(value) {
	blacklist.push(contactsMap.get(value));
}


/*
contactsMap.forEach(contact_checker);

function blacklist_checker(value) {
	var isContact = contactsMap.get(value));
}*/

//console.log(blacklist.toString());

                           
/*contactsMap.set('jomar', '2163198688');
contactsMap.set('jaden', '8032432431');
contactsMap.set('kendall', '8034934103');
contactsMap.set('kylee', '9999999999');
contactsMap.set('ryan', '9809257025');
contactsMap.set('gracee', '8035041480');
contactsMap.set('rene', '8036166880');
contactsMap.set('ada', '7049890912');*/



function call_temps(data) {
	//temps = data;
	var rpi3_1 = data.indexOf("a")+1;
	var rpi3_2 = data.indexOf("b");
	console.log("rpi3_1: "+rpi3_1);
	if (rpi3_1 != 0) {
		var rpi3 = data.slice(rpi3_1, rpi3_2);
		console.log("1");
	}

	var rpi0W_1 = data.indexOf("c")+1;
	var rpi0W_2 = data.indexOf("d");
	console.log("rpi0W_1: "+rpi0W_1);
	if (rpi0W_1 != 0) {
		var rpi0W = data.slice(rpi0W_1, rpi0W_2);
		console.log("1");
	}
	
	var rpi0_1 = data.indexOf("e")+1;
	var rpi0_2 = data.indexOf("f");
	console.log("rpi0_1: "+rpi0_1);
	if (rpi0_1 != 0) {
		var rpi0 = data.slice(rpi0_1, rpi0_2);
		console.log("1");
	}

	/*var pcServer_1 = data.indexOf("e")+1;
	var pcServer_2 = data.indexOf("f");
	console.log("pcServer_1: "+pcServer_1);
	if (pcServer_1 != 0) {
		var pcServer = data.slice(pcServer_1, pcServer_2);
		console.log("1");
	}*/

	var cputemps_data = "";

	


	if (rpi3 == "" || rpi3.charAt(0) == " " || rpi3_1 == 0) {
		cputemps_data = "Server is down for maintenance. ";
	}

	if (rpi3_1 != "0") {
		cputemps_data = "PI 3 CPU: "+rpi3+"°F ";
	}
	


	if (rpi0W_1 == 0) {
		cputemps_data = cputemps_data + "\nPI0W CPU: (Node is down for maintenance.) ";
	}

	if (rpi0W_1 != "0") {
		cputemps_data = cputemps_data + "\nPI0W CPU: "+rpi0W+"°F ";
	}

	
	
	if (rpi0_1 == 0) {
		cputemps_data = cputemps_data + "\nPI0 CPU: (Node is down for maintenance.) ";
	}

	if (rpi0_1 != "0") {
		cputemps_data = cputemps_data + "\nPI0 CPU: "+rpi0+"°F ";
	}
	
	

	/*if (pcServer_1 == 0) {
		cputemps_data = cputemps_data + "\nTFD-PC CPU: (Node is down for maintenance.) ";
	}
	
	if (pcServer_1 != "0") {
		cputemps_data = cputemps_data + "\nTFD-PC CPU: "+pcServer+" F ";
	}*/
	
	document.getElementById("cputemps").innerHTML = cputemps_data;
}

function get_temps() {
	$.get('https://'+phpFileDomainName+'.ngrok.io/getTemp.php', call_temps);
}



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
			if (e7get == "true") {/*
				var e7get2 = Math.random(); // >= 0.5; //var e7get2 = (Math.random() >= 0.5).toString();
				
				if (e7get2 <= 0.25) {//== "true") {
         		var e7get3 = "yeet0";//"yeet";
         	}
         	
         	if (e7get2 > 0.25 && e7get2 <= 0.5) {//"false") {
         		var e7get3 = "yeet0W";//noyeet";
         	}
         	
         	if (e7get2 > 0.5 && e7get2 <= 0.75) {
         		var e7get3 = "yeet";
         	}
         	
         	if (e7get2 > 0.75) {
         		var e7get3 = "noyeet";
         	}*/
         	
         	var e7get2 = Math.random(); // >= 0.5; //var e7get2 = (Math.random() >= 0.5).toString();
				
				if (e7get2 <= 0.25) {//== "true") {
         		var e7get3 = "yeet0W";//"yeet";
         	}
         	
         	if (e7get2 > 0.25 && e7get2 <= 0.50) {//"false") {
         		var e7get3 = "yeet0";//noyeet";
         	}
         	
         	if (e7get2 > 0.50 && e7get2 <= 0.75) {//"false") {
         		var e7get3 = "yeet";//noyeet";
         	}
         	
         	if (e7get2 > 0.75) {
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
			//document.getElementById("console").innerHTML = ""
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
	//var numberVariable = "p"
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
   
   if (e3get == "" || e3get.charAt(0) == " " && MSP == "no") {
   	//e3get = "5";
      document.getElementById("messageDelay").value = "5";
      document.getElementById("messageDelaySpan").innerHTML = "&nbsp;Message Delay set to <strong>5</strong> automatically.";
      $("#messageDelayClass").addClass("hasValue");
      $("#messageDelayClass").removeClass("field_wrapper");
		$("#messageDelayClass").addClass("fieldREQUIRED");
		$("#messageDelayRequired").removeClass("removeItem");
		//var exit_pls = "yes";
   }
   
   if (e3get == "" || e3get.charAt(0) == " " && MSP == "yes") {
   	//e3get = "5";
      document.getElementById("messageDelay").value = "2";
      document.getElementById("messageDelaySpan").innerHTML = "&nbsp;Message Delay set to <strong>2</strong> automatically.";
      $("#messageDelayClass").addClass("hasValue");
      $("#messageDelayClass").removeClass("field_wrapper");
		$("#messageDelayClass").addClass("fieldREQUIRED");
		$("#messageDelayRequired").removeClass("removeItem");
		//var exit_pls = "yes";
   }
   
   if (e3get < 5 && e3get >= 1 && MSP == "no") {
   	//e3get = "5";
      //document.getElementById("messageDelay").value = "5";
      document.getElementById("messageDelaySpan").innerHTML = "&nbsp;Message Delay cannot be below <strong>5</strong> without MSP.";
      //$("#messageDelayClass").addClass("hasValue");
      $("#messageDelayClass").removeClass("field_wrapper");
		$("#messageDelayClass").addClass("fieldREQUIRED");
		$("#messageDelayRequired").removeClass("removeItem");
		//var exit_pls = "yes";
		var exit_pls = "yes";
   }
   
   if (e3get < 1) {// && MSP == "yes") {
   	//e3get = "5";
      //document.getElementById("messageDelay").value = "5";
      document.getElementById("messageDelaySpan").innerHTML = "&nbsp;Message Delay cannot be below <strong>1</strong> (unless you want to donate $20 for me to get another server :])";
      //$("#messageDelayClass").addClass("hasValue");
      $("#messageDelayClass").removeClass("field_wrapper");
		$("#messageDelayClass").addClass("fieldREQUIRED");
		$("#messageDelayRequired").removeClass("removeItem");
		//var exit_pls = "yes";
		var exit_pls = "yes";
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
	//console.log("l");
	
	if (isNaN(e1get) == false && e1get != "" && e1get != " ") {
   		if (e1get >= 10000000000 || e1get <= 999999999) {
   			document.getElementById("numberOrContactSpan").innerHTML = "&nbsp;Phone numbers should be formatted like this: \"8005882300\"";
   			$("#numberOrContactClass").removeClass("field_wrapper");
				$("#numberOrContactClass").addClass("fieldREQUIRED");
				$("#numberOrContactRequired").removeClass("removeItem");
				
				var exit_pls = "yes";
			}
	}
	
	if (exit_pls == "no") {
		//console.log("m");
		if (isNaN(e1get) == false) {
			//console.log("n");
   		if (e1get >= 10000000000 || e1get <= 999999999) {
   			//console.log("o");
   			document.getElementById("numberOrContactSpan").innerHTML = "&nbsp;Phone numbers should be formatted like this: \"8005882300\"";
   			$("#numberOrContactClass").removeClass("field_wrapper");
				$("#numberOrContactClass").addClass("fieldREQUIRED");
				$("#numberOrContactRequired").removeClass("removeItem");
				
				var exit_pls = "yes";
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
   //console.log(numberVariable)
   if (isNaN(Number(e1get)) == true) {
   		var numberVariable = contactsMap.get(e1get.toLowerCase());
   	}
   	
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
   var carrierFirstAndSecondChars = e2get.toLowerCase().charAt(0)+e2get.toLowerCase().charAt(1);
   
   document.getElementById("console").innerHTML = 11
   
   if (supportedCarriers[carrierFirstAndSecondChars] == undefined && exit_pls == "no") {
   		document.getElementById("victimsCarrierSpan").innerHTML = "&nbsp;"+e2get+" is not currently a supported carrier. If you want it supported contact the <strong>webmaster</strong> at thefloppydriver@gmail.com.";
			$("#victimsCarrierClass").removeClass("field_wrapper");
			$("#victimsCarrierClass").addClass("fieldREQUIRED");
			$("#victimsCarrierRequired").removeClass("removeItem");
			exit_pls = "yes";
   		//document.getElementById("console").innerHTML = e2get+" is not currently a supported carrier. If you want it supported contact the <strong>webmaster</strong> at thefloppydriver@gmail.com.";
   		//return;
   	}
   	
   if (exit_pls == "no") {   
   
   	document.getElementById("console").innerHTML = 12
   
   
   	if (supportedCarriers[carrierFirstAndSecondChars].charAt(0) == '@') {
   		var realcarrier = supportedCarriers[carrierFirstAndSecondChars];
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
	   //console.log(numberVariable)
		document.getElementById("console").innerHTML = 15
		
		//console.log(numberVariable)
		var numReal = '"'+numberVariable+realcarrier+'"'
		
	   //var spammy = "spamit('"+numberVariable+realcarrier+"','"+e4get+"','"+e5get+"','"+e6get+"','"+e7get+"')"
	   //var spammy = `spamit(${numReal}, ${e4get}, ${e5get}, ${e6get}, ${e7get})`
	   
	   document.getElementById("console").innerHTML = 16
	   
	   var e4get2 = '"'+e4get+'"';
	   var e5get2 = '"'+e5get+'"';
	   var e6get2 = '"'+e6get+'"';
	   var e7getVariable = '"'+e7get+'"';
   }
   
   if (numberVariable == undefined && e1get != "" && e1get != " ") {
			document.getElementById("numberOrContactSpan").innerHTML = "&nbsp;"+e1get+" is not currently on the contact list . If you want "+e1get+" added to the contact list, contact the <strong>webmaster</strong> at thefloppydriver@gmail.com.";
			$("#numberOrContactClass").removeClass("field_wrapper");
			$("#numberOrContactClass").addClass("fieldREQUIRED");
			$("#numberOrContactRequired").removeClass("removeItem");
			var exit_pls = "yes";
		}
   
   document.getElementById("console").innerHTML = 17;
   if (exit_pls == "yes") {
   	//console.log(numberVariable)
   	if (isNaN(e1get) == false && e1get <= 10000000000 && e1get >= 999999999) {
			//document.getElementById("console").innerHTML = "The Number or Contact field is required.";
			//document.getElementById("numberOrContactSpan").innerHTML = "&nbsp;Enter number or contact";
			$("#numberOrContactClass").removeClass("fieldREQUIRED");
			$("#numberOrContactClass").addClass("field_wrapper");
			$("#numberOrContactRequired").addClass("removeItem");
				
		}
		
		if (e1get != "" && e1get != " " && isNaN(e1get) == true && numberVariable != undefined) {
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
		
		
		
		if (e3get >= 5 && MSP == "no" && e3get != "" && e3get.charAt(0) != " ") {
			$("#messageDelayClass").removeClass("fieldREQUIRED");
			$("#messageDelayClass").addClass("field_wrapper");
			$("#messageDelayRequired").addClass("removeItem");
		}
		
		if (e3get >= 2 && MSP == "yes") {
			$("#messageDelayClass").removeClass("fieldREQUIRED");
			$("#messageDelayClass").addClass("field_wrapper");
			$("#messageDelayRequired").addClass("removeItem");
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
		document.getElementById("console").innerHTML = ""
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
   document.getElementById("console").innerHTML = ""
   spamit(numberVariable+realcarrier, e4get, e5get, e6get, e7get);
	setInterval('spamit('+numReal+', '+e4get2+', '+e5get2+', '+e6get2+', '+e7getVariable+')', Number(document.getElementById("messageDelay").value) * 1000); //spammy, Number(document.getElementById("messageDelay").value) * 1000);
}