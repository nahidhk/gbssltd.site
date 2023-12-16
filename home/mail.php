<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $email = $_POST["email"];

  
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  
        $data = array(
            'email' => $email,
            'timestamp' => date('Y-m-d H:i:s')
        );

        $json_data = json_encode($data, JSON_PRETTY_PRINT);

   
        file_put_contents('emaildata.json', $json_data, FILE_APPEND | LOCK_EX);

        header("Location: thank-you.html");
        exit;
    } else {
     
        echo "Invalid email address";
    }
} else {

    echo "Form not submitted";
}

?>
