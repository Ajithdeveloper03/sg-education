<?php
require_once 'config.php';

$gallery_data = [
    ["category" => "yoga day", "title" => "Morning Yoga Session", "image_url" => "https://images.pexels.com/photos/30889597/pexels-photo-30889597.jpeg"],
    ["category" => "yoga day", "title" => "Kids Yoga Poses", "image_url" => "https://images.pexels.com/photos/20133860/pexels-photo-20133860.jpeg"],
    ["category" => "fancy dress day", "title" => "Fancy Dress Parade", "image_url" => "https://images.pexels.com/photos/14673049/pexels-photo-14673049.jpeg"],
    ["category" => "fancy dress day", "title" => "Creative Costumes", "image_url" => "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&w=600&q=80"],
    ["category" => "green day", "title" => "Green Day Celebration", "image_url" => "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"],
    ["category" => "green day", "title" => "Nature & Plants Activity", "image_url" => "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"],
    ["category" => "culturals", "title" => "Cultural Performance", "image_url" => "https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=600&q=80"],
    ["category" => "culturals", "title" => "Traditional Dance", "image_url" => "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"],
    ["category" => "culturals", "title" => "Cultural Showcase", "image_url" => "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"],
    ["category" => "blue day", "title" => "Blue Day Fun", "image_url" => "https://images.pexels.com/photos/12818151/pexels-photo-12818151.jpeg"],
    ["category" => "blue day", "title" => "Blue Themed Activities", "image_url" => "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80"]
];

$pdo->query("TRUNCATE TABLE gallery");

$stmt = $pdo->prepare("INSERT INTO gallery (title, category, image_url) VALUES (?, ?, ?)");

foreach ($gallery_data as $item) {
    $stmt->execute([$item['title'], $item['category'], $item['image_url']]);
}

echo "Successfully seeded the gallery database!";
?>
