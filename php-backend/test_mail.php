<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/mailer.php';

echo "<h1>SMTP Test Script</h1>";
echo "Testing connection to " . SMTP_HOST . " on port " . SMTP_PORT . " using " . SMTP_ENCRYPTION . "...<br><br>";

try {
    $mail = createMailer();
    
    // Enable verbose debug output
    $mail->SMTPDebug = 3; 
    $mail->Debugoutput = 'html';

    $mail->addAddress(MAIL_TO, 'Test User');
    $mail->Subject = 'SMTP Test from Hostinger';
    $mail->Body    = 'This is a test email to verify SMTP configuration.';
    
    echo "<h3>SMTP Debug Output:</h3>";
    echo "<div style='background:#f4f4f4; padding:10px; border:1px solid #ccc;'>";
    $mail->send();
    echo "</div>";
    
    echo "<h2 style='color:green;'>Success! The email was sent.</h2>";
} catch (Exception $e) {
    echo "</div>";
    echo "<h2 style='color:red;'>Failed to send email. Error:</h2>";
    echo "<pre>" . $e->getMessage() . "</pre>";
}
?>
