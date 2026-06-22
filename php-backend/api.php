<?php
require_once 'config.php';

// Enable CORS for Next.js development server
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : '';

if ($endpoint == 'blogs') {
    $stmt = $pdo->query("SELECT * FROM blogs ORDER BY created_at DESC");
    $blogs = $stmt->fetchAll();
    
    // Format full URLs for images if needed (assuming PHP runs on the same domain or localhost)
    $site_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
    foreach($blogs as &$b) {
        if (!empty($b['image_url']) && strpos($b['image_url'], 'http') !== 0) {
            $b['image_url'] = $site_url . $b['image_url'];
        }
    }
    
    echo json_encode(['status' => 'success', 'data' => $blogs]);

} elseif ($endpoint == 'gallery') {
    $stmt = $pdo->query("SELECT * FROM gallery ORDER BY created_at DESC");
    $gallery = $stmt->fetchAll();
    
    $site_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
    foreach($gallery as &$g) {
        if (!empty($g['image_url']) && strpos($g['image_url'], 'http') !== 0) {
            $g['image_url'] = $site_url . $g['image_url'];
        }
    }
    
    echo json_encode(['status' => 'success', 'data' => $gallery]);

} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid endpoint']);
}
?>
