<?php
// api_gallery.php
require_once 'api_helpers.php';

$action = isset($_GET['action']) ? $_GET['action'] : '';
$method = $_SERVER['REQUEST_METHOD'];

// Helper to format image URLs - always uses production base URL
define('SITE_BASE_URL', 'https://sgeducations.in');
function formatImageUrl($url) {
    if (empty($url)) return null;
    if (strpos($url, 'http') === 0) return $url;
    return SITE_BASE_URL . $url;
}

if ($method === 'GET') {
    if (isset($_GET['id'])) {
        $stmt = $pdo->prepare("SELECT * FROM gallery WHERE id = ?");
        $stmt->execute([$_GET['id']]);
        $item = $stmt->fetch();
        if ($item) {
            $item['image_url'] = formatImageUrl($item['image_url']);
            sendJson('success', 'Gallery item retrieved', $item);
        } else {
            sendJson('error', 'Gallery item not found');
        }
    } else {
        $stmt = $pdo->query("SELECT * FROM gallery ORDER BY created_at DESC");
        $items = $stmt->fetchAll();
        foreach($items as &$item) {
            $item['image_url'] = formatImageUrl($item['image_url']);
        }
        sendJson('success', 'Gallery items retrieved', $items);
    }
}

if ($method === 'DELETE' && isset($_GET['id'])) {
    $stmt = $pdo->prepare("DELETE FROM gallery WHERE id = ?");
    if ($stmt->execute([$_GET['id']])) {
        sendJson('success', 'Gallery item deleted successfully');
    } else {
        sendJson('error', 'Failed to delete gallery item');
    }
}

if ($method === 'POST') {
    $id = $_POST['id'] ?? null;
    $title = trim($_POST['title'] ?? '');
    $category = trim($_POST['category'] ?? '');
    $image_url = $_POST['existing_image'] ?? '';

    if (empty($title)) {
        sendJson('error', 'Title is required');
    }

    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
        $filename = $_FILES['image']['name'];
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        
        if (in_array($ext, $allowed)) {
            $newName = 'gallery_' . uniqid() . '.' . $ext;
            if (move_uploaded_file($_FILES['image']['tmp_name'], UPLOAD_DIR . $newName)) {
                $image_url = '/php-backend/upload/' . $newName;
            }
        } else {
            sendJson('error', 'Invalid image format');
        }
    }

    // Require an image URL either existing or newly uploaded
    if (empty($image_url)) {
        sendJson('error', 'An image is required');
    }

    if ($id) {
        $stmt = $pdo->prepare("UPDATE gallery SET title=?, category=?, image_url=? WHERE id=?");
        if ($stmt->execute([$title, $category, $image_url, $id])) {
            sendJson('success', 'Gallery item updated successfully');
        }
    } else {
        $stmt = $pdo->prepare("INSERT INTO gallery (title, category, image_url) VALUES (?, ?, ?)");
        if ($stmt->execute([$title, $category, $image_url])) {
            sendJson('success', 'Gallery image uploaded successfully');
        }
    }
    sendJson('error', 'Database operation failed');
}

sendJson('error', 'Invalid request method');
?>
