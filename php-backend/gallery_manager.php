<?php
session_start();
require_once 'config.php';

// Check if user is logged in
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: login.php");
    exit;
}

$action = isset($_GET['action']) ? $_GET['action'] : 'list';
$msg = '';

// Handle Delete
if ($action == 'delete' && isset($_GET['id'])) {
    $stmt = $pdo->prepare("SELECT image_url FROM gallery WHERE id = ?");
    $stmt->execute([$_GET['id']]);
    $item = $stmt->fetch();
    
    if ($item) {
        $stmt = $pdo->prepare("DELETE FROM gallery WHERE id = ?");
        $stmt->execute([$_GET['id']]);
        $msg = "Image deleted successfully!";
        $action = 'list';
    }
}

// Handle Form Submission (Add / Edit)
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'] ?? '';
    $title = trim($_POST['title']);
    $category = trim($_POST['category']);
    $image_url = $_POST['existing_image'] ?? '';
    
    // Handle file upload
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
        $filename = $_FILES['image']['name'];
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        
        if (in_array($ext, $allowed)) {
            $newName = 'gallery_' . uniqid() . '.' . $ext;
            if (move_uploaded_file($_FILES['image']['tmp_name'], UPLOAD_DIR . $newName)) {
                $image_url = '/php-backend/upload/' . $newName;
            }
        } else {
            $msg = "Invalid file type.";
        }
    }
    
    if (empty($msg)) {
        if ($id) {
            $stmt = $pdo->prepare("UPDATE gallery SET title=?, category=?, image_url=? WHERE id=?");
            $stmt->execute([$title, $category, $image_url, $id]);
            $msg = "Gallery item updated successfully!";
        } else {
            $stmt = $pdo->prepare("INSERT INTO gallery (title, category, image_url) VALUES (?, ?, ?)");
            $stmt->execute([$title, $category, $image_url]);
            $msg = "Gallery image uploaded successfully!";
        }
        $action = 'list';
    }
}

// Fetch all for list
$gallery = [];
if ($action == 'list') {
    $stmt = $pdo->query("SELECT * FROM gallery ORDER BY created_at DESC");
    $gallery = $stmt->fetchAll();
}

// Fetch single for edit
$editItem = null;
if ($action == 'edit' && isset($_GET['id'])) {
    $stmt = $pdo->prepare("SELECT * FROM gallery WHERE id = ?");
    $stmt->execute([$_GET['id']]);
    $editItem = $stmt->fetch();
    if (!$editItem) $action = 'list';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery Manager - SG Education</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { background-color: #f4f6f9; }
        .sidebar { height: 100vh; background-color: #1d2a44; color: white; padding-top: 20px; position: fixed; width: 16.666667%; }
        .sidebar a { color: #cfd8dc; text-decoration: none; display: block; padding: 15px 20px; }
        .sidebar a:hover, .sidebar a.active { background-color: #0f172a; color: white; }
        .content { padding: 30px; margin-left: 16.666667%; }
    </style>
</head>
<body>

<div class="container-fluid">
    <div class="row">
        <!-- Sidebar -->
        <div class="col-md-2 sidebar d-none d-md-block">
            <h4 class="text-center mb-4 text-warning">SG Education</h4>
            <a href="index.php"><i class="fa-solid fa-gauge me-2"></i> Dashboard</a>
            <a href="blog_manager.php"><i class="fa-solid fa-blog me-2"></i> Manage Blogs</a>
            <a href="gallery_manager.php" class="active"><i class="fa-solid fa-images me-2"></i> Manage Gallery</a>
            <a href="logout.php" class="mt-5 text-danger"><i class="fa-solid fa-right-from-bracket me-2"></i> Logout</a>
        </div>
        
        <!-- Main Content -->
        <div class="col-md-10 content">
            <h2>Gallery Manager</h2>
            <hr>
            
            <?php if(!empty($msg)): ?>
                <div class="alert alert-success"><?php echo $msg; ?></div>
            <?php endif; ?>
            
            <?php if($action == 'list'): ?>
                <a href="?action=add" class="btn btn-success mb-3"><i class="fa-solid fa-upload"></i> Upload Image</a>
                <div class="row">
                    <?php foreach($gallery as $g): ?>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100">
                            <img src="<?php echo htmlspecialchars($g['image_url']); ?>" class="card-img-top" alt="Gallery Image" style="height: 180px; object-fit: cover;">
                            <div class="card-body p-2 text-center">
                                <h6 class="card-title mb-1 text-truncate"><?php echo htmlspecialchars($g['title']); ?></h6>
                                <span class="badge bg-secondary mb-2"><?php echo htmlspecialchars($g['category']); ?></span><br>
                                <a href="?action=edit&id=<?php echo $g['id']; ?>" class="btn btn-sm btn-info text-white"><i class="fa-solid fa-pen"></i></a>
                                <a href="?action=delete&id=<?php echo $g['id']; ?>" class="btn btn-sm btn-danger" onclick="return confirm('Delete this image?');"><i class="fa-solid fa-trash"></i></a>
                            </div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                    <?php if(empty($gallery)): ?>
                        <div class="col-12"><div class="alert alert-warning">No images in gallery.</div></div>
                    <?php endif; ?>
                </div>
                
            <?php elseif($action == 'add' || $action == 'edit'): ?>
                
                <div class="card" style="max-width: 600px;">
                    <div class="card-header bg-white">
                        <h5><?php echo $action == 'edit' ? 'Edit Image Info' : 'Upload New Image'; ?></h5>
                    </div>
                    <div class="card-body">
                        <form action="gallery_manager.php" method="post" enctype="multipart/form-data">
                            <input type="hidden" name="id" value="<?php echo $editItem['id'] ?? ''; ?>">
                            <input type="hidden" name="existing_image" value="<?php echo $editItem['image_url'] ?? ''; ?>">
                            
                            <div class="mb-3">
                                <label class="form-label">Image Title/Caption</label>
                                <input type="text" name="title" class="form-control" required value="<?php echo htmlspecialchars($editItem['title'] ?? ''); ?>">
                            </div>
                            
                            <div class="mb-3">
                                <label class="form-label">Category</label>
                                <select name="category" class="form-select" required>
                                    <option value="Events" <?php echo (isset($editItem['category']) && $editItem['category']=='Events') ? 'selected' : ''; ?>>Events</option>
                                    <option value="Activities" <?php echo (isset($editItem['category']) && $editItem['category']=='Activities') ? 'selected' : ''; ?>>Activities</option>
                                    <option value="Campus" <?php echo (isset($editItem['category']) && $editItem['category']=='Campus') ? 'selected' : ''; ?>>Campus</option>
                                    <option value="Kids" <?php echo (isset($editItem['category']) && $editItem['category']=='Kids') ? 'selected' : ''; ?>>Kids</option>
                                </select>
                            </div>
                            
                            <div class="mb-3">
                                <label class="form-label">Select Image</label>
                                <?php if(!empty($editItem['image_url'])): ?>
                                    <div class="mb-2">
                                        <img src="<?php echo htmlspecialchars($editItem['image_url']); ?>" width="150" class="img-thumbnail">
                                    </div>
                                <?php endif; ?>
                                <input type="file" name="image" class="form-control" accept="image/*" <?php echo ($action=='add') ? 'required' : ''; ?>>
                            </div>
                            
                            <button type="submit" class="btn btn-success"><i class="fa-solid fa-save"></i> Save</button>
                            <a href="gallery_manager.php" class="btn btn-secondary">Cancel</a>
                        </form>
                    </div>
                </div>
                
            <?php endif; ?>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
