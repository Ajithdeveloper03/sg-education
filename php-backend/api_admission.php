<?php
/**
 * Admission Form Handler - PHP Backend
 * Receives JSON POST from the admission form,
 * saves to DB and sends email notification.
 */

// Start output buffering to prevent any stray output (FPDF, PHP warnings, etc.)
// from corrupting the JSON response.
ob_start();

// Suppress display errors so PHP warnings don't pollute the response
ini_set('display_errors', 0);
error_reporting(E_ALL);

// CORS headers - allow the static site to call this
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
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit();
}

// Read and decode JSON body
$input = file_get_contents('php://input');
$data  = json_decode($input, true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Invalid request data.']);
    exit();
}

// Sanitize helper
function clean($val) {
    return htmlspecialchars(strip_tags(trim((string)$val)), ENT_QUOTES, 'UTF-8');
}

// Extract fields
$studentName          = clean($data['studentName']          ?? '');
$gender               = clean($data['gender']               ?? '');
$dob                  = clean($data['dob']                  ?? '');
$applyingFor          = clean($data['applyingFor']           ?? '');
$previousSchool       = clean($data['previousSchool']        ?? 'N/A');
$parentName           = clean($data['parentName']            ?? '');
$relationship         = clean($data['relationship']          ?? '');
$mobileNumber         = clean($data['mobileNumber']          ?? '');
$emailAddress         = clean($data['emailAddress']          ?? '');
$occupation           = clean($data['occupation']            ?? 'N/A');
$residentialAddress   = clean($data['residentialAddress']    ?? '');
$isDirectVisit        = !empty($data['isDirectVisit']);
$preferredVisitDate   = clean($data['preferredVisitDate']    ?? '');
$preferredVisitTime   = clean($data['preferredVisitTime']    ?? '');
$directVisitParentName = clean($data['directVisitParentName'] ?? '');
$purposeOfVisit       = clean($data['purposeOfVisit']        ?? '');
$additionalComments   = clean($data['additionalComments']    ?? '');

// Validate required fields
if (!$studentName || !$parentName || !$mobileNumber || !$emailAddress) {
    echo json_encode(['success' => false, 'message' => 'Required fields are missing.']);
    exit();
}

// Save to database (optional - requires DB connection)
try {
    require_once __DIR__ . '/config.php';
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
    // DB save failure is non-fatal — still send email
    error_log('Admission DB save error: ' . $e->getMessage());
}

// Build email content
$visitSection = '';
if ($isDirectVisit) {
    $visitSection = "
=== DIRECT VISIT REQUEST ===
Preferred Date   : {$preferredVisitDate}
Preferred Time   : {$preferredVisitTime}
Parent Name      : {$directVisitParentName}
Purpose of Visit : {$purposeOfVisit}
Comments         : {$additionalComments}
";
}

$emailBody = "
New Admission Application Received
====================================
Submitted On : " . date('d M Y, h:i A') . "

=== STUDENT DETAILS ===
Name             : {$studentName}
Gender           : {$gender}
Date of Birth    : {$dob}
Applying For     : {$applyingFor}
Previous School  : {$previousSchool}

=== PARENT / GUARDIAN DETAILS ===
Name             : {$parentName}
Relationship     : {$relationship}
Mobile Number    : {$mobileNumber}
Email Address    : {$emailAddress}
Occupation       : {$occupation}
Residential Addr : {$residentialAddress}
{$visitSection}
====================================
This email was generated automatically by the SG Education website.
";

$htmlBody = "
<html><body style='font-family:Arial,sans-serif;color:#333;'>
<h2 style='color:#1d2a44;'>New Admission Application</h2>
<p>Submitted on: <strong>" . date('d M Y, h:i A') . "</strong></p>

<h3 style='color:#1d2a44;border-bottom:1px solid #ddd;'>Student Details</h3>
<table style='width:100%;border-collapse:collapse;'>
  <tr><td style='padding:6px 12px;font-weight:bold;width:180px;'>Name</td><td style='padding:6px 12px;'>{$studentName}</td></tr>
  <tr style='background:#f8f9fa;'><td style='padding:6px 12px;font-weight:bold;'>Gender</td><td style='padding:6px 12px;'>{$gender}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;'>Date of Birth</td><td style='padding:6px 12px;'>{$dob}</td></tr>
  <tr style='background:#f8f9fa;'><td style='padding:6px 12px;font-weight:bold;'>Applying For</td><td style='padding:6px 12px;'>{$applyingFor}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;'>Previous School</td><td style='padding:6px 12px;'>{$previousSchool}</td></tr>
</table>

<h3 style='color:#1d2a44;border-bottom:1px solid #ddd;margin-top:24px;'>Parent / Guardian Details</h3>
<table style='width:100%;border-collapse:collapse;'>
  <tr><td style='padding:6px 12px;font-weight:bold;width:180px;'>Name</td><td style='padding:6px 12px;'>{$parentName} ({$relationship})</td></tr>
  <tr style='background:#f8f9fa;'><td style='padding:6px 12px;font-weight:bold;'>Mobile</td><td style='padding:6px 12px;'>{$mobileNumber}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;'>Email</td><td style='padding:6px 12px;'>{$emailAddress}</td></tr>
  <tr style='background:#f8f9fa;'><td style='padding:6px 12px;font-weight:bold;'>Occupation</td><td style='padding:6px 12px;'>{$occupation}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;'>Address</td><td style='padding:6px 12px;'>{$residentialAddress}</td></tr>
</table>
" . ($isDirectVisit ? "
<h3 style='color:#1d2a44;border-bottom:1px solid #ddd;margin-top:24px;'>Direct Visit Request</h3>
<table style='width:100%;border-collapse:collapse;'>
  <tr><td style='padding:6px 12px;font-weight:bold;width:180px;'>Preferred Date</td><td style='padding:6px 12px;'>{$preferredVisitDate}</td></tr>
  <tr style='background:#f8f9fa;'><td style='padding:6px 12px;font-weight:bold;'>Preferred Time</td><td style='padding:6px 12px;'>{$preferredVisitTime}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;'>Parent Name</td><td style='padding:6px 12px;'>{$directVisitParentName}</td></tr>
  <tr style='background:#f8f9fa;'><td style='padding:6px 12px;font-weight:bold;'>Purpose</td><td style='padding:6px 12px;'>{$purposeOfVisit}</td></tr>
  <tr><td style='padding:6px 12px;font-weight:bold;'>Comments</td><td style='padding:6px 12px;'>{$additionalComments}</td></tr>
</table>" : "") . "
<br><hr>
<p style='color:#888;font-size:12px;'>This email was automatically generated by the SG Education website admission system.</p>
</body></html>
";

// Generate PDF using FPDF
require_once __DIR__ . '/fpdf.php';

class PDF extends FPDF {
    function Header() {
        $this->SetFont('Arial', 'B', 15);
        $this->SetTextColor(29, 42, 68); // #1d2a44
        $this->Cell(0, 10, 'SG Education - Admission Application', 0, 1, 'C');
        $this->Ln(5);
    }
    function Footer() {
        $this->SetY(-15);
        $this->SetFont('Arial', 'I', 8);
        $this->SetTextColor(128);
        $this->Cell(0, 10, 'Page ' . $this->PageNo(), 0, 0, 'C');
    }
    function SectionTitle($title) {
        $this->SetFont('Arial', 'B', 12);
        $this->SetFillColor(240, 240, 240);
        $this->Cell(0, 8, $title, 0, 1, 'L', true);
        $this->Ln(2);
    }
    function Row($label, $value) {
        $this->SetFont('Arial', 'B', 10);
        $this->Cell(50, 6, $label . ':', 0, 0, 'L');
        $this->SetFont('Arial', '', 10);
        $this->MultiCell(0, 6, $value);
    }
}

$pdf = new PDF();
$pdf->AddPage();
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, 6, 'Submitted on: ' . date('d M Y, h:i A'), 0, 1, 'R');
$pdf->Ln(5);

$pdf->SectionTitle('Student Details');
$pdf->Row('Name', $studentName);
$pdf->Row('Gender', $gender);
$pdf->Row('Date of Birth', $dob);
$pdf->Row('Applying For', $applyingFor);
$pdf->Row('Previous School', $previousSchool);
$pdf->Ln(5);

$pdf->SectionTitle('Parent / Guardian Details');
$pdf->Row('Name', $parentName . ' (' . $relationship . ')');
$pdf->Row('Mobile Number', $mobileNumber);
$pdf->Row('Email Address', $emailAddress);
$pdf->Row('Occupation', $occupation);
$pdf->Row('Address', $residentialAddress);
$pdf->Ln(5);

if ($isDirectVisit) {
    $pdf->SectionTitle('Direct Visit Request');
    $pdf->Row('Preferred Date', $preferredVisitDate);
    $pdf->Row('Preferred Time', $preferredVisitTime);
    $pdf->Row('Parent Name', $directVisitParentName);
    $pdf->Row('Purpose', $purposeOfVisit);
    $pdf->Row('Comments', $additionalComments);
}

$pdfContent = $pdf->Output('S');
$pdfBase64 = chunk_split(base64_encode($pdfContent));

// Send email using PHP mail() with attachment
$toEmail   = 'inymartlabs@gmail.com';
$subject   = "New Admission Application - {$studentName}";

// Boundary for multipart/mixed
$boundary = md5(time());

$headers = implode("\r\n", [
    "From: {$emailAddress}",
    "Reply-To: {$emailAddress}",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=\"{$boundary}\"",
    "X-Mailer: PHP/" . phpversion(),
]);

// Multipart message body
$message = "--{$boundary}\r\n";
$message .= "Content-Type: text/html; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$message .= $htmlBody . "\r\n\r\n";

// Attachment
$filename = "Admission_Application_" . preg_replace('/[^a-zA-Z0-9]/', '_', $studentName) . ".pdf";
$message .= "--{$boundary}\r\n";
$message .= "Content-Type: application/pdf; name=\"{$filename}\"\r\n";
$message .= "Content-Transfer-Encoding: base64\r\n";
$message .= "Content-Disposition: attachment; filename=\"{$filename}\"\r\n\r\n";
$message .= $pdfBase64 . "\r\n";
$message .= "--{$boundary}--";

$mailSent = mail($toEmail, $subject, $message, $headers);

// Discard any stray output captured by ob_start() before sending JSON
ob_end_clean();

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Application submitted successfully']);
} else {
    // Email failed but data is saved - still acknowledge submission
    error_log('Admission email failed for: ' . $studentName);
    echo json_encode(['success' => true, 'message' => 'Application received. We will contact you shortly.']);
}
?>
