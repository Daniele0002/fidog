<?php
/**
 * API Autenticazione
 *
 * POST /api/auth.php   { "action": "login",    "username": "...", "password": "..." }
 * POST /api/auth.php   { "action": "register", "first_name": "...", "last_name": "...",
 *                        "username": "...", "email": "...", "password": "..." }
 * POST /api/auth.php   { "action": "logout" }
 */

require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(["error" => "Metodo non consentito"], 405);
}

// Leggo il body JSON
$body   = json_decode(file_get_contents('php://input'), true);
$action = $body['action'] ?? '';
$conn   = connect();

// ── LOGIN ─────────────────────────────────────────────────────────────────────
if ($action === 'login') {
    $username = mysqli_real_escape_string($conn, trim($body['username'] ?? ''));
    $password = hash('sha256', $body['password'] ?? '');

    if ($username === '' || $password === hash('sha256', '')) {
        json_response(["error" => "Username e password obbligatori"], 400);
    }

    $result = mysqli_query($conn,
        "SELECT id, first_name, last_name, username, email, ruolo
         FROM user
         WHERE (username = '$username' OR email = '$username') AND password = '$password' AND enable = 1
         LIMIT 1"
    );

    $user = mysqli_fetch_assoc($result);

    if ($user) {
        json_response([
            "success" => true,
            "user"    => $user
        ]);
    } else {
        json_response(["error" => "Credenziali errate o account disattivato"], 401);
    }
}

// ── REGISTRAZIONE ─────────────────────────────────────────────────────────────
elseif ($action === 'register') {
    $first_name = mysqli_real_escape_string($conn, trim($body['first_name'] ?? ''));
    $last_name  = mysqli_real_escape_string($conn, trim($body['last_name']  ?? ''));
    $username   = mysqli_real_escape_string($conn, trim($body['username']   ?? ''));
    $email      = mysqli_real_escape_string($conn, trim($body['email']      ?? ''));
    $password   = $body['password'] ?? '';

    if (!$first_name || !$username || !$email || !$password) {
        json_response(["error" => "Tutti i campi sono obbligatori"], 400);
    }

    // Controllo username duplicato
    $check = mysqli_query($conn, "SELECT id FROM user WHERE username = '$username' OR email = '$email' LIMIT 1");
    if (mysqli_num_rows($check) > 0) {
        json_response(["error" => "Username o email già in uso"], 409);
    }

    $password_hash = hash('sha256', $password);
    $password_esc  = mysqli_real_escape_string($conn, $password_hash);

    $query = "INSERT INTO user (first_name, last_name, username, email, ruolo, enable, password)
              VALUES ('$first_name', '$last_name', '$username', '$email', 'user', 1, '$password_esc')";

    mysqli_query($conn, $query);
    $new_id = mysqli_insert_id($conn);

    if ($new_id) {
        json_response([
            "success" => true,
            "user"    => [
                "id"         => $new_id,
                "first_name" => $first_name,
                "last_name"  => $last_name,
                "username"   => $username,
                "email"      => $email,
                "ruolo"      => "user"
            ]
        ]);
    } else {
        json_response(["error" => "Errore durante la registrazione"], 500);
    }
}

else {
    json_response(["error" => "Azione non riconosciuta"], 400);
}
