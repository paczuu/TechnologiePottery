<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $file = 'emails.txt';
        file_put_contents($file, $email . PHP_EOL, FILE_APPEND | LOCK_EX);
        echo "Dziękujemy za subskrypcję!";
    } else {
        echo "Nieprawidłowy adres e-mail.";
    }
} else {
    echo "Błąd zapisu.";
}
?>
