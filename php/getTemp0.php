<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Credentials:true');
header('Access-Control-Allow-Methods:GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,X-Auth-Token,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,cache-control,Access-Control-Allow-Origin');
   //$output = "42.0"; //pi 3 begin is a and end is b, pi 0 W is begin is c and end is d, pc begin is e and end is f
   //echo $output;
   
   $input = 'cpuTemp0=$(cat /sys/class/thermal/thermal_zone0/temp);cpuTemp1=$(echo "scale=2;9/5 * $(($cpuTemp0/100)) + 320" |bc);cpuTemp1=$( printf "%.0f" $cpuTemp1 );cpuTempM=$((cpuTemp1 % ${cpuTemp1%?}));echo "${cpuTemp1%?}"."$cpuTempM"';

   $output = `$input`;
   
   echo "c".$output."d";
?>