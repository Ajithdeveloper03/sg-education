<?php
session_start();
require_once 'config.php';

// Check if user is logged in
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: login.php");
    exit;
}

// Get counts for dashboard
$blogCount = $pdo->query("SELECT COUNT(*) FROM blogs")->fetchColumn();
$galleryCount = $pdo->query("SELECT COUNT(*) FROM gallery")->fetchColumn();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - SG Education</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { background-color: #f4f6f9; }
        .sidebar { height: 100vh; background-color: #1d2a44; color: white; padding-top: 20px; }
        .sidebar a { color: #cfd8dc; text-decoration: none; display: block; padding: 15px 20px; }
        .sidebar a:hover, .sidebar a.active { background-color: #0f172a; color: white; }
        .content { padding: 30px; }
        .stat-card { background: white; border-radius: 10px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .stat-icon { font-size: 3rem; color: #1d2a44; float: right; opacity: 0.2; }
    </style>
</head>
<body>

<div class="container-fluid">
    <div class="row">
        <!-- Sidebar -->
        <div class="col-md-2 sidebar d-none d-md-block">
            <h4 class="text-center mb-4 text-warning">SG Education</h4>
            <a href="index.php" class="active"><i class="fa-solid fa-gauge me-2"></i> Dashboard</a>
            <a href="blog_manager.php"><i class="fa-solid fa-blog me-2"></i> Manage Blogs</a>
            <a href="gallery_manager.php"><i class="fa-solid fa-images me-2"></i> Manage Gallery</a>
            <a href="logout.php" class="mt-5 text-danger"><i class="fa-solid fa-right-from-bracket me-2"></i> Logout</a>
        </div>
        
        <!-- Main Content -->
        <div class="col-md-10 content">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Dashboard</h2>
                <span>Welcome, <strong><?php echo htmlspecialchars($_SESSION['admin_username']); ?></strong>!</span>
            </div>
            
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="stat-card">
                        <i class="fa-solid fa-blog stat-icon"></i>
                        <h5>Total Blogs</h5>
                        <h2 class="mb-0"><?php echo $blogCount; ?></h2>
                        <a href="blog_manager.php" class="btn btn-sm btn-outline-primary mt-3">Manage Blogs</a>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="stat-card">
                        <i class="fa-solid fa-images stat-icon"></i>
                        <h5>Gallery Images</h5>
                        <h2 class="mb-0"><?php echo $galleryCount; ?></h2>
                        <a href="gallery_manager.php" class="btn btn-sm btn-outline-success mt-3">Manage Gallery</a>
                    </div>
                </div>
            </div>
            
            <div class="card mt-4">
                <div class="card-header bg-white">
                    <h5>Quick Instructions</h5>
                </div>
                <div class="card-body">
                    <p>Welcome to the SG Education Admin Panel. Use the sidebar on the left to navigate through the different management sections.</p>
                    <ul>
                        <li><strong>Manage Blogs:</strong> Add, edit, or delete blog posts. Upload thumbnail images for each post.</li>
                        <li><strong>Manage Gallery:</strong> Upload images to your gallery and categorize them.</li>
                    </ul>
                    <div class="alert alert-info">
                        <strong>Note:</strong> Changes made here will automatically reflect on the public website via the API.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
