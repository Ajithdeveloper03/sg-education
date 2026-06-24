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
    $stmt = $pdo->prepare("SELECT image_url FROM blogs WHERE id = ?");
    $stmt->execute([$_GET['id']]);
    $blog = $stmt->fetch();
    
    if ($blog) {
        $stmt = $pdo->prepare("DELETE FROM blogs WHERE id = ?");
        $stmt->execute([$_GET['id']]);
        $msg = "Blog deleted successfully!";
        $action = 'list';
    }
}

// Handle Form Submission (Add / Edit)
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'] ?? '';
    $title = trim($_POST['title']);
    $category = trim($_POST['category']);
    $author = trim($_POST['author']);
    $read_time = trim($_POST['read_time']);
    $excerpt = trim($_POST['excerpt']);
    $content = trim($_POST['content']);
    $image_url = $_POST['existing_image'] ?? '';
    
    // Handle file upload
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
        $filename = $_FILES['image']['name'];
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        
        if (in_array($ext, $allowed)) {
            $newName = uniqid() . '.' . $ext;
            if (move_uploaded_file($_FILES['image']['tmp_name'], UPLOAD_DIR . $newName)) {
                $image_url = '/php-backend/upload/' . $newName; // Relative URL for Next.js to use
            }
        } else {
            $msg = "Invalid file type.";
        }
    }
    
    if (empty($msg)) {
        if ($id) {
            // Update
            $stmt = $pdo->prepare("UPDATE blogs SET title=?, category=?, author=?, read_time=?, excerpt=?, content=?, image_url=? WHERE id=?");
            $stmt->execute([$title, $category, $author, $read_time, $excerpt, $content, $image_url, $id]);
            $msg = "Blog updated successfully!";
        } else {
            // Insert
            $stmt = $pdo->prepare("INSERT INTO blogs (title, category, author, read_time, excerpt, content, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute([$title, $category, $author, $read_time, $excerpt, $content, $image_url]);
            $msg = "Blog created successfully!";
        }
        $action = 'list';
    }
}

// Fetch all for list
$blogs = [];
if ($action == 'list') {
    $stmt = $pdo->query("SELECT * FROM blogs ORDER BY created_at DESC");
    $blogs = $stmt->fetchAll();
}

// Fetch single for edit
$editBlog = null;
if ($action == 'edit' && isset($_GET['id'])) {
    $stmt = $pdo->prepare("SELECT * FROM blogs WHERE id = ?");
    $stmt->execute([$_GET['id']]);
    $editBlog = $stmt->fetch();
    if (!$editBlog) $action = 'list';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Manager - SG Education</title>
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
            <a href="blog_manager.php" class="active"><i class="fa-solid fa-blog me-2"></i> Manage Blogs</a>
            <a href="gallery_manager.php"><i class="fa-solid fa-images me-2"></i> Manage Gallery</a>
            <a href="logout.php" class="mt-5 text-danger"><i class="fa-solid fa-right-from-bracket me-2"></i> Logout</a>
        </div>
        
        <!-- Main Content -->
        <div class="col-md-10 content">
            <h2>Blog Manager</h2>
            <hr>
            
            <?php if(!empty($msg)): ?>
                <div class="alert alert-success"><?php echo $msg; ?></div>
            <?php endif; ?>
            
            <?php if($action == 'list'): ?>
                <a href="?action=add" class="btn btn-primary mb-3"><i class="fa-solid fa-plus"></i> Add New Blog</a>
                <div class="card">
                    <div class="card-body">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach($blogs as $b): ?>
                                <tr>
                                    <td>
                                        <?php if($b['image_url']): ?>
                                            <img src="<?php echo htmlspecialchars($b['image_url']); ?>" width="50" height="50" style="object-fit:cover;">
                                        <?php else: ?>
                                            <span class="text-muted">No Image</span>
                                        <?php endif; ?>
                                    </td>
                                    <td><?php echo htmlspecialchars($b['title']); ?></td>
                                    <td><?php echo htmlspecialchars($b['category']); ?></td>
                                    <td><?php echo date('M d, Y', strtotime($b['created_at'])); ?></td>
                                    <td>
                                        <a href="?action=edit&id=<?php echo $b['id']; ?>" class="btn btn-sm btn-info text-white"><i class="fa-solid fa-pen"></i></a>
                                        <a href="?action=delete&id=<?php echo $b['id']; ?>" class="btn btn-sm btn-danger" onclick="return confirm('Are you sure you want to delete this blog?');"><i class="fa-solid fa-trash"></i></a>
                                    </td>
                                </tr>
                                <?php endforeach; ?>
                                <?php if(empty($blogs)): ?>
                                <tr><td colspan="5" class="text-center">No blogs found.</td></tr>
                                <?php endif; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            <?php elseif($action == 'add' || $action == 'edit'): ?>
                
                <div class="card">
                    <div class="card-header bg-white">
                        <h5><?php echo $action == 'edit' ? 'Edit Blog' : 'Add New Blog'; ?></h5>
                    </div>
                    <div class="card-body">
                        <form action="blog_manager.php" method="post" enctype="multipart/form-data">
                            <input type="hidden" name="id" value="<?php echo $editBlog['id'] ?? ''; ?>">
                            <input type="hidden" name="existing_image" value="<?php echo $editBlog['image_url'] ?? ''; ?>">
                            
                            <div class="row">
                                <div class="col-md-8 mb-3">
                                    <label class="form-label">Title</label>
                                    <input type="text" name="title" class="form-control" required value="<?php echo htmlspecialchars($editBlog['title'] ?? ''); ?>">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label">Category</label>
                                    <input type="text" name="category" class="form-control" value="<?php echo htmlspecialchars($editBlog['category'] ?? 'EDUCATION'); ?>">
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Author</label>
                                    <input type="text" name="author" class="form-control" value="<?php echo htmlspecialchars($editBlog['author'] ?? 'Admin'); ?>">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Read Time</label>
                                    <input type="text" name="read_time" class="form-control" value="<?php echo htmlspecialchars($editBlog['read_time'] ?? '5 min read'); ?>">
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label class="form-label">Featured Image</label>
                                <?php if(!empty($editBlog['image_url'])): ?>
                                    <div class="mb-2">
                                        <img src="<?php echo htmlspecialchars($editBlog['image_url']); ?>" width="100">
                                    </div>
                                <?php endif; ?>
                                <input type="file" name="image" class="form-control" accept="image/*" <?php echo ($action=='add') ? 'required' : ''; ?>>
                            </div>
                            
                            <div class="mb-3">
                                <label class="form-label">Excerpt (Short Description)</label>
                                <textarea name="excerpt" class="form-control" rows="2" required><?php echo htmlspecialchars($editBlog['excerpt'] ?? ''); ?></textarea>
                            </div>
                            
                            <div class="mb-3">
                                <label class="form-label">Full Content (HTML allowed)</label>
                                <textarea name="content" class="form-control" rows="8" required><?php echo htmlspecialchars($editBlog['content'] ?? ''); ?></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-success"><i class="fa-solid fa-save"></i> Save Blog</button>
                            <a href="blog_manager.php" class="btn btn-secondary">Cancel</a>
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
