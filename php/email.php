<?php header('Access-Control-Allow-Origin: https://thefloppydriver.github.io');
   
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   
   require 'D:\composer\vendor\autoload.php';
   
   //$account = array("fearmypowergoodsir@gmail.com", "sp4m.m3!");
   
   $mail = new PHPMailer(TRUE);
   
   //check if the 'victimVariable' was sent in ajax data
   if (isset($_GET['victimVariable'])) {
      echo $victimVariable = $_GET['victimVariable'];
      $victimVariable = $_GET['victimVariable'];
   }
   
   //check if the 'editName' was sent in ajax data
   if (isset($_GET['editName'])) {
      echo $editName = $_GET['editName'];
      $editName = $_GET['editName'];
   }
   
   //check if the 'editMessage' was sent in ajax data
   if (isset($_GET['editMessage'])) {
      echo $editMessage = $_GET['editMessage'];
      $editMessage = $_GET['editMessage'];
   }
   
   if (isset($_GET['accountNumber'])) {
      echo $accountNumber = $_GET['accountNumber'];
      $accountNumber = $_GET['accountNumber'];
      if ($accountNumber == "") {
         $account = array("fearmypowergoodsir@gmail.com", "sp4m.m3!");
      }
      
      $account = array("fearmypowergoodsir"+$accountNumber+"@gmail.com", "sp4m.m3!"+$accountNumber);
      
      if ($accountNumber == "1") {
         $account = array("fearmypowergoodsir@gmail.com", "sp4m.m3!");
      }
      
      
      
      
      
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

   
?>