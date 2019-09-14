<?php 
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Credentials:true');
header('Access-Control-Allow-Methods:GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,X-Auth-Token,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,cache-control,Access-Control-Allow-Origin');

   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   
   require '/home/pi/vendor/autoload.php';
   
   $ngrokSubdomain0W = 'c5d288e6'; //that's the rpi zero w
   $ngrokSubdomain0 = 'bf8929fb'; //that's the rpi zero
   $ngrokSubdomainPC = '7eaa1a70'; //that's my PC
   
   
   $account = array("fearmypowergoodsir2@gmail.com", "sp4m.m3!2");
   
   $mail = new PHPMailer(TRUE);
   

   if ($_GET['passToPC'] == "yeet0W") { //that's the rpi zero w
      $curl=curl_init();
      curl_setopt_array($curl, [
      CURLOPT_RETURNTRANSFER => 1,
      CURLOPT_URL => 'https://'.$ngrokSubdomain0W.'.ngrok.io/index.php?victimVariable='.$_GET['victimVariable'].'&editName='.$_GET['editName'].'&editMessage='.urlencode($_GET['editMessage'])
      ]);
      $resp = curl_exec($curl);
      curl_close($curl);
      echo($resp);
      
   }
   
   if ($_GET['passToPC'] == "yeet0") { //that's the rpi zero
      $curl=curl_init();
      curl_setopt_array($curl, [
      CURLOPT_RETURNTRANSFER => 1,
      CURLOPT_URL => 'https://'.$ngrokSubdomain0.'.ngrok.io/index.php?victimVariable='.$_GET['victimVariable'].'&editName='.$_GET['editName'].'&editMessage='.urlencode($_GET['editMessage'])
      ]);
      $resp = curl_exec($curl);
      curl_close($curl);
      echo($resp);
      
   }
   
   if ($_GET['passToPC'] == "yeet") { //that's my pc
      $curl=curl_init();
      curl_setopt_array($curl, [
      CURLOPT_RETURNTRANSFER => 1,
      CURLOPT_URL => 'https://'.$ngrokSubdomainPC.'.ngrok.io/php/email2.php?victimVariable='.$_GET['victimVariable'].'&editName='.$_GET['editName'].'&editMessage='.urlencode($_GET['editMessage'])
      ]);
      $resp = curl_exec($curl);
      curl_close($curl);
      echo($resp);
      
   }
   
   if ($_GET['passToPC'] == "noyeet") {
      $victimVariable = $_GET['victimVariable'];
      $editName = $_GET['editName'];
      $editMessage = $_GET['editMessage'];
      $accountNumber = $_GET['accountNumber'];
      $account = array('fearmypowergoodsir'.$accountNumber.'@gmail.com', 'sp4m.m3!'.$accountNumber);
      if ($accountNumber == '' || $accountNumber == '1' || $accountNumber == '0') {
         $account = array("fearmypowergoodsir@gmail.com", "sp4m.m3!");
      };

      try {

         $mail->setFrom($account[0]);
         $mail->addAddress($victimVariable);
         $mail->Subject = $editName;
         $mail->Body = $editMessage;

         /* SMTP parameters. */

         /* Tells PHPMailer to use SMTP. */
         $mail->isSMTP();

         /* SMTP server address. */
         $mail->Host = 'smtp.gmail.com';

         /* Use SMTP authentication. */
         $mail->SMTPAuth = TRUE;

         /* Set the encryption system. */
         $mail->SMTPSecure = 'tls';

         /* SMTP authentication username. */
         $mail->Username = $account[0];

         /* SMTP authentication password. */
         $mail->Password = $account[1];

         /* Set the SMTP port. */
         $mail->Port = 587;

         /* Finally send the mail. */
         $mail->send();
         }
         
         catch (Exception $e) {
            echo $e->errorMessage();
         }
         
         catch (\Exception $e) {
            echo $e->getMessage();
         }
}
   
?>