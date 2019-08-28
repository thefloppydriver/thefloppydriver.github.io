<?php header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Credentials:true');
header('Access-Control-Allow-Methods:GET,HEAD,OPTIONS,POST,PUT');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, cache-control');
   $ngrokSubdomain = '884f1c56'
   
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   
   require 'D:\composer\vendor\autoload.php';
   //require '/home/pi/vendor/autoload.php';
   
   $account = array("fearmypowergoodsir@gmail.com", "sp4m.m3!");
   
   $mail = new PHPMailer(true);
   
   //if ($_GET['passToPC'] == "true") {
   //   $curl=curl_init();
   //   curl_setopt_array($curl, [
   //      CURLOPT_RETURNTRANSFER => 1,
   //      CURLOPT_URL => 'https://'.$ngrokSubdomain.'.ngrok.io/php/email2.php?victimVariable='.$_GET['victimVariable'].'&editName='.$_GET['editName'].'&editMessage='.urlencode($_GET['editMessage'])
   //   ]);
      
   //   curl_exec($curl);
   //   curl_close($curl);
   //}
   
   
   echo $_GET['passToPC'];
   if ($_GET['passToPC'] == "false") {
      $victimVariable = $_GET['victimVariable'];
      $editName = $_GET['editName'];
      $editMessage = $_GET['editMessage'];
      $accountNumber = $_GET['accountNumber'];
      $account = array('fearmypowergoodsir'.$accountNumber.'@gmail.com', 'sp4m.m3!'.$accountNumber);
      if ($accountNumber == '' || $accountNumber == '1' || $accountNumber == '0') {
         $account = array("fearmypowergoodsir@gmail.com", "sp4m.m3!");
      }
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
         
      catch (Exception $e)
      {
      echo $e->errorMessage();
      }
      catch (\Exception $e)
      {
      echo $e->getMessage();
      }
   }

?>