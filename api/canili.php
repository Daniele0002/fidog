<?php
/**
 * API Canili
 * GET /api/canili.php          → tutti i canili
 * GET /api/canili.php?id=5     → singolo canile
 */

require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    json_response(["error" => "Metodo non consentito"], 405);
}

$conn = connect();
$id   = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($id > 0) {
    $query = "
        SELECT k.*, c.name AS nome_citta, s.name AS nome_provincia, r.name AS nome_regione
        FROM canile k
        LEFT JOIN city c ON k.city_id = c.id
        LEFT JOIN state s ON k.state_id = s.id
        LEFT JOIN region r ON k.region_id = r.id
        WHERE k.id = $id
        LIMIT 1
    ";
    $result = mysqli_query($conn, $query);
    $canile = mysqli_fetch_assoc($result);
    if (!$canile) { json_response(["error" => "Canile non trovato"], 404); }

    json_response($canile);

} else {
    $query = "
        SELECT k.*, c.name AS nome_citta, s.name AS nome_provincia, r.name AS nome_regione
        FROM canile k
        LEFT JOIN city c ON k.city_id = c.id
        LEFT JOIN state s ON k.state_id = s.id
        LEFT JOIN region r ON k.region_id = r.id
        ORDER BY k.nome_canile ASC
    ";
    $result = mysqli_query($conn, $query);
    $canili = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $canili[] = $row;
    }
    json_response($canili);
}
