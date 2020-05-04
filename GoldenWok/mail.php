<?php
$name = $_POST['Name'];
$email = $_POST['Email'];
$message = $_POST['Message'];
$formcontent=" From: $name \n Message: $message";
$recipient = "oceanwavecxx@gmail.com";
$subject = "Golden Wok Website Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
readfile("contact_success.html");
?>