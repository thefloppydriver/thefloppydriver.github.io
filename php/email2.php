<?php header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Credentials:true');
header('Access-Control-Allow-Methods:GET,HEAD,OPTIONS,POST,PUT');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,cache-control,Access-Control-Allow-Origin');
   
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   
   require 'D:\composer\vendor\autoload.php';
   
   $account = array("fearmypowergoodsir2@gmail.com", "sp4m.m3!2");
   $mail = new PHPMailer(true);
   
   $victimVariable = $_GET['victimVariable'];
   $editName = $_GET['editName'];
   $editMessage = $_GET['editMessage'];
   

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
   

?>