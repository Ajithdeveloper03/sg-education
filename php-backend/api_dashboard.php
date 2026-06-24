<?php
// api_dashboard.php
require_once 'api_helpers.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $blogCount = $pdo->query("SELECT COUNT(*) FROM blogs")->fetchColumn();
    $galleryCount = $pdo->query("SELECT COUNT(*) FROM gallery")->fetchColumn();
    
    sendJson('success', 'Dashboard stats retrieved', [
        'totalBlogs' => $blogCount,
        'totalGallery' => $galleryCount
    ]);
}

sendJson('error', 'Invalid request method');
?>
