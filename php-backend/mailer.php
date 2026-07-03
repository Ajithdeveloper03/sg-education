<?php
/**
 * mailer.php — Shared PHPMailer helper for SG Education
 *
 * Usage:
 *   require_once __DIR__ . '/mailer.php';
 *   $mail = createMailer();
 *   $mail->addAddress('recipient@example.com', 'Name');
 *   $mail->Subject = 'Your subject';
 *   $mail->Body    = '<h1>HTML Body</h1>';
 *   $mail->AltBody = 'Plain text fallback';
 *   $mail->send();
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/vendor/autoload.php';

/**
 * Returns a pre-configured PHPMailer instance ready to send.
 * All SMTP credentials come from config.php constants.
 *
 * @return PHPMailer
 * @throws Exception
 */
function createMailer() {
    $mail = new PHPMailer(true); // true = exceptions enabled

    // ── SMTP Settings ────────────────────────────────────────────────────────
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->Port       = SMTP_PORT;

    // Encryption: 'ssl' for port 465, PHPMailer::ENCRYPTION_STARTTLS for port 587
    if (SMTP_ENCRYPTION === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }

    // ── Sender ───────────────────────────────────────────────────────────────
    $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);

    // ── Content defaults ─────────────────────────────────────────────────────
    $mail->CharSet  = 'UTF-8';
    $mail->isHTML(true);

    // ── Timeouts ─────────────────────────────────────────────────────────────
    $mail->Timeout      = 30;
    $mail->SMTPKeepAlive = false;

    return $mail;
}
?>
