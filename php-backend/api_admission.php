<?php
/**
 * Admission Form Handler - PHP Backend
 * Receives JSON POST from the admission form,
 * saves to DB and sends email notification via PHPMailer SMTP.
 * NOTE: PDF generation removed - uses HTML email only (same pattern as api_contact.php)
 */

// Output buffering to prevent stray output from corrupting JSON
ob_start();
ini_set('display_errors', 0);
error_reporting(E_ALL);

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    ob_end_clean();
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit();
}

// Load config (DB + SMTP constants)
require_once __DIR__ . '/config.php';

// Load PHPMailer helper
require_once __DIR__ . '/mailer.php';

// Read and decode JSON body
$input = file_get_contents('php://input');
$data  = json_decode($input, true);

if (!$data) {
    ob_end_clean();
    echo json_encode(['success' => false, 'message' => 'Invalid request data.']);
    exit();
}

// Sanitize helper
function clean($val) {
    return htmlspecialchars(strip_tags(trim((string)$val)), ENT_QUOTES, 'UTF-8');
}

// Extract fields
$studentName           = clean($data['studentName']           ?? '');
$gender                = clean($data['gender']                ?? '');
$dob                   = clean($data['dob']                   ?? '');
$applyingFor           = clean($data['applyingFor']            ?? '');
$previousSchool        = clean($data['previousSchool']         ?? 'N/A');
$parentName            = clean($data['parentName']             ?? '');
$relationship          = clean($data['relationship']           ?? '');
$mobileNumber          = clean($data['mobileNumber']           ?? '');
$emailAddress          = clean($data['emailAddress']           ?? '');
$occupation            = clean($data['occupation']             ?? 'N/A');
$residentialAddress    = clean($data['residentialAddress']     ?? '');
$isDirectVisit         = !empty($data['isDirectVisit']);
$preferredVisitDate    = clean($data['preferredVisitDate']     ?? '');
$preferredVisitTime    = clean($data['preferredVisitTime']     ?? '');
$directVisitParentName = clean($data['directVisitParentName']  ?? '');
$purposeOfVisit        = clean($data['purposeOfVisit']         ?? '');
$additionalComments    = clean($data['additionalComments']     ?? '');

// Validate required fields
if (!$studentName || !$parentName || !$mobileNumber || !$emailAddress) {
    ob_end_clean();
    echo json_encode(['success' => false, 'message' => 'Required fields are missing.']);
    exit();
}

// ── Save to database (non-fatal if it fails) ─────────────────────────────────
try {
    $stmt = $pdo->prepare("
        INSERT INTO admissions
        (student_name, gender, dob, applying_for, previous_school,
         parent_name, relationship, mobile_number, email_address, occupation, residential_address,
         is_direct_visit, preferred_visit_date, preferred_visit_time, direct_visit_parent_name,
         purpose_of_visit, additional_comments, submitted_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    ");
    $stmt->execute([
        $studentName, $gender, $dob, $applyingFor, $previousSchool,
        $parentName, $relationship, $mobileNumber, $emailAddress, $occupation, $residentialAddress,
        $isDirectVisit ? 1 : 0, $preferredVisitDate, $preferredVisitTime, $directVisitParentName,
        $purposeOfVisit, $additionalComments
    ]);
} catch (Exception $e) {
    error_log('Admission DB save error: ' . $e->getMessage());
}

// ── Build HTML email body ─────────────────────────────────────────────────────
$directVisitHtml = '';
if ($isDirectVisit) {
    $directVisitHtml = "
<h3 style='color:#1d2a44;border-bottom:1px solid #ddd;margin-top:24px;'>Direct Visit Request</h3>
<table style='width:100%;border-collapse:collapse;'>
  <tr><td style='padding:6px 12px;font-weight:bold;width:180px;background:#f8f9fa;'>Preferred Date</td><td style='padding:6px 12px;'>{$preferredVisitDate}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;background:#fff;'>Preferred Time</td><td style='padding:6px 12px;'>{$preferredVisitTime}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;background:#f8f9fa;'>Parent Name</td><td style='padding:6px 12px;'>{$directVisitParentName}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;background:#fff;'>Purpose</td><td style='padding:6px 12px;'>{$purposeOfVisit}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;background:#f8f9fa;'>Comments</td><td style='padding:6px 12px;'>{$additionalComments}</td></tr>
</table>";
}

$htmlBody = "
<html><body style='font-family:Arial,sans-serif;color:#333;'>
<h2 style='color:#1d2a44;'>New Admission Application</h2>
<p>Submitted on: <strong>" . date('d M Y, h:i A') . "</strong></p>

<h3 style='color:#1d2a44;border-bottom:1px solid #ddd;'>Student Details</h3>
<table style='width:100%;border-collapse:collapse;'>
  <tr><td style='padding:6px 12px;font-weight:bold;width:180px;background:#f8f9fa;'>Name</td><td style='padding:6px 12px;'>{$studentName}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;background:#fff;'>Gender</td><td style='padding:6px 12px;'>{$gender}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;background:#f8f9fa;'>Date of Birth</td><td style='padding:6px 12px;'>{$dob}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;background:#fff;'>Applying For</td><td style='padding:6px 12px;'>{$applyingFor}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;background:#f8f9fa;'>Previous School</td><td style='padding:6px 12px;'>{$previousSchool}</td></tr>
</table>

<h3 style='color:#1d2a44;border-bottom:1px solid #ddd;margin-top:24px;'>Parent / Guardian Details</h3>
<table style='width:100%;border-collapse:collapse;'>
  <tr><td style='padding:6px 12px;font-weight:bold;width:180px;background:#f8f9fa;'>Name</td><td style='padding:6px 12px;'>{$parentName} ({$relationship})</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;background:#fff;'>Mobile</td><td style='padding:6px 12px;'>{$mobileNumber}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;background:#f8f9fa;'>Email</td><td style='padding:6px 12px;'>{$emailAddress}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;background:#fff;'>Occupation</td><td style='padding:6px 12px;'>{$occupation}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;background:#f8f9fa;'>Address</td><td style='padding:6px 12px;'>{$residentialAddress}</td></tr>
</table>
{$directVisitHtml}
<br><hr>
<p style='color:#888;font-size:12px;'>This email was automatically generated by the SG Education website admission system.</p>
</body></html>
";

$plainText = "New Admission Application\n\nStudent: {$studentName}\nGender: {$gender}\nDOB: {$dob}\nApplying For: {$applyingFor}\nPrevious School: {$previousSchool}\n\nParent: {$parentName} ({$relationship})\nMobile: {$mobileNumber}\nEmail: {$emailAddress}\nOccupation: {$occupation}\nAddress: {$residentialAddress}";

// ── Send email via PHPMailer SMTP ────────────────────────────────────────────
try {
    $mail = createMailer();

    // Add all recipients defined in config
    $recipients = explode(',', MAIL_TO);
    foreach ($recipients as $recipient) {
        $mail->addAddress(trim($recipient), 'Admin');
    }

    // Reply-To is the applicant so you can reply directly
    $mail->addReplyTo($emailAddress, $parentName);

    // Subject & body
    $mail->Subject = "New Admission Application - {$studentName}";
    $mail->Body    = $htmlBody;
    $mail->AltBody = $plainText;

    // Clear stray output before sending JSON
    if (ob_get_length()) ob_end_clean();

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Application submitted successfully! We will contact you shortly.']);

} catch (\PHPMailer\PHPMailer\Exception $e) {
    if (ob_get_length()) ob_end_clean();
    error_log('Admission PHPMailer error: ' . $e->getMessage());
    echo json_encode(['success' => false, 'message' => 'SMTP Error: ' . $e->getMessage()]);
} catch (\Throwable $e) {
    if (ob_get_length()) ob_end_clean();
    error_log('Admission general error: ' . $e->getMessage());
    echo json_encode(['success' => false, 'message' => 'Server Crash: ' . $e->getMessage() . ' in ' . $e->getFile() . ' on line ' . $e->getLine()]);
}
?>
