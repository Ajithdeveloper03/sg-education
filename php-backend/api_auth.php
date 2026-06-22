<?php
// api_auth.php
require_once 'api_helpers.php';

$action = isset($_GET['action']) ? $_GET['action'] : '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'login') {
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';

    if (empty($username) || empty($password)) {
        sendJson('error', 'Username and password are required');
    }

    $stmt = $pdo->prepare("SELECT id, username, password_hash FROM admin_users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password_hash'])) {
        // Simple token for stateless frontend tracking (in a real app, use JWT)
        // Here we just return a success signal. The frontend will store a generic token.
        $token = base64_encode(json_encode(['id' => $user['id'], 'username' => $user['username'], 'exp' => time() + 86400]));
        sendJson('success', 'Login successful', ['token' => $token, 'username' => $user['username']]);
    } else {
        sendJson('error', 'Invalid username or password');
    }
}

sendJson('error', 'Invalid action');
?>
