<?php
// config.php
// Database Configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'u508480125_sgeducation');
define('DB_PASS', 'Inymart@Shield#58!'); // Default XAMPP password is empty
define('DB_NAME', 'u508480125_sgeducation');

// Application Configuration
define('SITE_URL', 'https://inymartlabs.com/sg-education/php-backend');
define('UPLOAD_DIR', __DIR__ . '/upload/');

// Hide PHP warnings/notices from breaking JSON output
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Connect to the database
try {
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4", DB_USER, DB_PASS);
    // Set PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch(PDOException $e) {
    header('Content-Type: application/json');
    echo json_encode(["status" => "error", "message" => "Database connection failed. Please check Hostinger credentials."]);
    exit;
}

// Ensure the upload directory exists
if (!is_dir(UPLOAD_DIR)) {
    @mkdir(UPLOAD_DIR, 0755, true);
}
?>
