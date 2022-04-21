<?php
if(isset($_POST['email'])) {
  
  // CHANGE THE TWO LINES BELOW
  $email_to = "yourmail@example.com";  
  // your email address for getting email
  
  function died($error) {
    // your error code can go here
    echo "We're sorry, but there's errors found with the form you submitted.<br /><br />";
    echo $error."<br /><br />";
    echo "Please go back and try again.<br /><br />";
    die();
  }
  
  // validation expected data exists
  if(!isset($_POST['name']) ||
    !isset($_POST['email']) ||
     !isset($_POST['mobile']) ||
    !isset($_POST['subject']) ||
    !isset($_POST['message'])) {
    died('We are sorry, but there appears to be a problem with the form you submitted.');   
  }
  
  $name = $_POST['name']; // required 
  $email_from = $_POST['email']; // required  
  $subject = $_POST['subject']; // required
   $phone = $_POST['mobile']; // required
  $message = $_POST['message']; // required
  
    
  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }

  $email_subject .= "website Inquiry".clean_string($subject)."";
  
  
  $email_message .= "Name: ".clean_string($name)."\n";  
  $email_message .= "Email: ".clean_string($email_from)."\n";
   $email_message .= "Contact No.: ".clean_string($phone)."\n";
  $email_message .= "Message: ".clean_string($message)."\n";
   $email_message .= "Subject: ".clean_string($subject)."\n";

  
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>





<!-- place your own success html below -->
<html>
<head></head>
<body>
<script type="text/javascript">alert("We have received your request, we will get back to you shortly. Thank You.");window.location.href='index.html';
    </script>
</body>
</html>

<?php
}
die();
?>