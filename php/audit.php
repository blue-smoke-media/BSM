<!--// todo handle success and errors -->

<?php

if(isset($_POST['submit'])) {
  $email_to = "solutions@BlueSmokeMedia.net"; //email address for receiving email
  $subject = "Audit";

  //! Required Vars
  $name = $_POST['name'];
  $reply_to = $_POST['email'];
  $phone = $_POST['phone'];
  $business = $_POST['business'];
  // $anti_spam = $_POST['antiSpam'] == "";
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
  !isset($reply_to) ||
  !isset($phone) ||
  !isset($business)
  // !isset($anti_spam) || !$anti_spam
    )  {
    died('We are sorry, but there appears to be a problem with the form you submitted. Please check all required fields.');
  }



  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }

  $reply_to = clean_string($reply_to);

  $name = clean_string($name);

  $message = "Website: ";
  $message .= clean_string($business)."\n";
  $message .= "Name: ";
  $message .= clean_string($name)."\n";
  $message .= "Phone: ";
  $message .= clean_string($phone)."\n";
  // todo format phone number - also turn into link for iphone


// create email headers
$headers = 'From: '.$reply_to."\n".
'Reply-To: '.$reply_to;
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
    <h1>audit sent</h1>
</body>
</html>

<?php
}
die();
?>

//todo validate phone number and email -->
