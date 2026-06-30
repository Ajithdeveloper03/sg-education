<?php
// api_upload.php
require_once 'api_helpers.php';
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
        $filename = $_FILES['image']['name'];
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        
        if (in_array($ext, $allowed)) {
            $newName = uniqid('img_') . '.' . $ext;
            if (move_uploaded_file($_FILES['image']['tmp_name'], UPLOAD_DIR . $newName)) {
                $image_url = '/php-backend/upload/' . $newName;
                
                // Return full URL for frontend usage
                $site_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
                $full_url = $site_url . $image_url;
                
                sendJson('success', 'Image uploaded successfully', ['url' => $image_url, 'full_url' => $full_url]);
            } else {
                sendJson('error', 'Failed to move uploaded file');
            }
        } else {
            sendJson('error', 'Invalid image format');
        }
    } else {
        sendJson('error', 'No image file uploaded or upload error');
    }
}

sendJson('error', 'Invalid request method');
?>
