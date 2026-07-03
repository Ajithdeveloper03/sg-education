<?php
// api_blog.php
require_once 'api_helpers.php';

$action = isset($_GET['action']) ? $_GET['action'] : '';
$method = $_SERVER['REQUEST_METHOD'];

// Helper to format image URLs - always uses production base URL
define('SITE_BASE_URL', 'https://inymartlabs.com/sg-education');
function formatImageUrl($url) {
    if (empty($url)) return null;
    if (strpos($url, 'http') === 0) return $url;
    return SITE_BASE_URL . $url;
}

if ($method === 'GET') {
    if (isset($_GET['id'])) {
        $stmt = $pdo->prepare("SELECT * FROM blogs WHERE id = ?");
        $stmt->execute([$_GET['id']]);
        $blog = $stmt->fetch();
        if ($blog) {
            $blog['image_url'] = formatImageUrl($blog['image_url']);
            sendJson('success', 'Blog retrieved', $blog);
        } else {
            sendJson('error', 'Blog not found');
        }
    } else {
        $stmt = $pdo->query("SELECT * FROM blogs ORDER BY created_at DESC");
        $blogs = $stmt->fetchAll();
        foreach($blogs as &$b) {
            $b['image_url'] = formatImageUrl($b['image_url']);
        }
        sendJson('success', 'Blogs retrieved', $blogs);
    }
}

// Ensure it's a valid POST or DELETE request from here on
if ($method === 'DELETE' && isset($_GET['id'])) {
    $stmt = $pdo->prepare("DELETE FROM blogs WHERE id = ?");
    if ($stmt->execute([$_GET['id']])) {
        sendJson('success', 'Blog deleted successfully');
    } else {
        sendJson('error', 'Failed to delete blog');
    }
}

if ($method === 'POST') {
    // If multipart/form-data, $_POST is populated
    $id = $_POST['id'] ?? null;
    $title = trim($_POST['title'] ?? '');
    $category = trim($_POST['category'] ?? '');
    $author = trim($_POST['author'] ?? '');
    $read_time = trim($_POST['read_time'] ?? '');
    $excerpt = trim($_POST['excerpt'] ?? '');
    $content = trim($_POST['content'] ?? '');
    $image_url = $_POST['existing_image'] ?? '';

    if (empty($title) || empty($content)) {
        sendJson('error', 'Title and content are required');
    }

    // Handle Image Upload
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
        $filename = $_FILES['image']['name'];
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        
        if (in_array($ext, $allowed)) {
            $newName = uniqid() . '.' . $ext;
            if (move_uploaded_file($_FILES['image']['tmp_name'], UPLOAD_DIR . $newName)) {
                $image_url = '/php-backend/upload/' . $newName;
            }
        } else {
            sendJson('error', 'Invalid image format');
        }
    }

    if ($id) {
        $stmt = $pdo->prepare("UPDATE blogs SET title=?, category=?, author=?, read_time=?, excerpt=?, content=?, image_url=? WHERE id=?");
        if ($stmt->execute([$title, $category, $author, $read_time, $excerpt, $content, $image_url, $id])) {
            sendJson('success', 'Blog updated successfully');
        }
    } else {
        $stmt = $pdo->prepare("INSERT INTO blogs (title, category, author, read_time, excerpt, content, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)");
        if ($stmt->execute([$title, $category, $author, $read_time, $excerpt, $content, $image_url])) {
            sendJson('success', 'Blog created successfully');
        }
    }
    sendJson('error', 'Database operation failed');
}

sendJson('error', 'Invalid request method');
?>
