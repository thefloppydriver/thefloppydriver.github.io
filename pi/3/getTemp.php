<?php 
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Credentials:true');
header('Access-Control-Allow-Methods:GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,X-Auth-Token,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,cache-control,Access-Control-Allow-Origin');
   
   $ngrokSubdomain0 = 'bf8929fb';
   $ngrokSubdomain0W = 'c5d288e6';
   $ngrokSubdomainPC = '7eaa1a70';
   
   $input = 'cpuTemp0=$(cat /sys/class/thermal/thermal_zone0/temp);cpuTemp1=$(echo "scale=2;9/5 * $(($cpuTemp0/100)) + 320" |bc);cpuTemp1=$( printf "%.0f" $cpuTemp1 );cpuTempM=$((cpuTemp1 % ${cpuTemp1%?}));echo "${cpuTemp1%?}"."$cpuTempM"';

   $output = `$input`;
   $output = str_replace(array("\n", "\r"), '', $output);
   
   echo "a".$output."b";
   
   $curl=curl_init();
   curl_setopt_array($curl, [
   CURLOPT_RETURNTRANSFER => 1,
   CURLOPT_URL => 'https://'.$ngrokSubdomain0W.'.ngrok.io/getTemp.php'
   ]);
   
   $resp = curl_exec($curl);
   curl_close($curl);
   $new_resp = str_replace(array("\n", "\r"), '', $resp);
   echo("c".$new_resp."d"); //pi 3 begin is a and end is b, pi 0 W is begin is c and end is d, pc begin is e and end is f
   
?>