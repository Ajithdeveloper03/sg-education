<?php
require_once 'config.php';

$gallery_data = [
    ["category" => "campus", "title" => "Library Reading", "image_url" => "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"],
    ["category" => "playtime", "title" => "Outdoor Fun", "image_url" => "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80"],
    ["category" => "events", "title" => "Cultural Festival", "image_url" => "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&w=600&q=80"],
    ["category" => "learning", "title" => "Creative Arts", "image_url" => "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"],
    ["category" => "campus", "title" => "Modern Classrooms", "image_url" => "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"],
    ["category" => "playtime", "title" => "Play Area", "image_url" => "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=600&q=80"],
    ["category" => "events", "title" => "Sports Day", "image_url" => "https://images.pexels.com/photos/12818151/pexels-photo-12818151.jpeg"],
    ["category" => "learning", "title" => "Science Experiment", "image_url" => "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"],
    ["category" => "campus", "title" => "Safe Environments", "image_url" => "https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=600&q=80"]
];

$pdo->query("TRUNCATE TABLE gallery");

$stmt = $pdo->prepare("INSERT INTO gallery (title, category, image_url) VALUES (?, ?, ?)");

foreach ($gallery_data as $item) {
    $stmt->execute([$item['title'], $item['category'], $item['image_url']]);
}

echo "Successfully seeded the gallery database!";
?>
