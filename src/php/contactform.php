<!-- redirect back to contact page or successful message (inject success or error message on contact page)
-->

<!--//! check local server xampp /Applications/XAMPP/xamppfiles/htdocs for testing-->
<?php

if(isset($_POST['submit'])) {
  $email_to = "admin@bluesmokemedia.net"; //email address for receiving email
  $business = $_POST['business'];

  //! Required Vars
  $name = $_POST['name'];
  $email_from = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $anti_spam = $_POST['antiSpam'] == "";
  //! Required Vars


  function died($error) {
    // your error code can go here
    echo "We're sorry, but there's errors found with the form you submitted.<br /><br />";
    echo $error."<br /><br />";
    echo "Please go back and try again.<br /><br />";
    die();
  }

  // validation expected data exists
  if(!isset($name) ||
    !isset($email_from) ||
    !isset($subject) ||
    !isset($message) ||
    !isset($anti_spam) || !$anti_spam
    )  {
    died('We are sorry, but there appears to be a problem with the form you submitted. Please check all required fields.');
  }



  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }
  
  $business .= "Business: ".clean_string($business)."\n";
  $name .= "Name: ".clean_string($name)."\n";
  $email_from .= "Email: ".clean_string($email_from)."\n";
  $subject .= "website Inquiry".clean_string($subject)."\n";
  $message .= "Message: ".clean_string($message)."\n";
  // $message .= "Contact No.: ".clean_string($phone)."\n";


// create email headers
$headers = 'From: '.$email_from.
'Reply-To: '.$email_from .
'X-Mailer: PHP/' . phpversion();
//! @mail() suppresses all warnings/errors vs mail()
mail($email_to, $subject, $message, $headers);
// echo mail
?>


<!-- place your own success html below -->
<html>
<head></head>
<body>
<script type="text/javascript">alert("We have received your request, we will get back to you shortly. Thank You.");
// todo redirect anywhere?
// window.location.href='../html/Contact.html';
    </script>
</body>
</html>

<?php
}
die();
?>

//todo validate phone number and email -->
