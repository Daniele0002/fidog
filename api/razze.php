<?php
/**
 * API Razze
 * GET /api/razze.php          → tutte le razze
 * GET /api/razze.php?id=5     → singola razza
 */

require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    json_response(["error" => "Metodo non consentito"], 405);
}

$conn     = connect();
$id       = isset($_GET['id']) ? intval($_GET['id']) : 0;
$img_base = 'http://localhost/esame2026%202/assets/images/media/razza/';

if ($id > 0) {
    $result = mysqli_query($conn, "SELECT * FROM razza WHERE id = $id LIMIT 1");
    $razza  = mysqli_fetch_assoc($result);
    if (!$razza) { json_response(["error" => "Razza non trovata"], 404); }

    $res_img = mysqli_query($conn,
        "SELECT encrypt_file_name FROM media
         WHERE section = 'razza' AND item_id = $id
         ORDER BY id ASC LIMIT 1"
    );
    $img = mysqli_fetch_assoc($res_img);
    $razza['image'] = $img ? $img_base . $img['encrypt_file_name'] : null;

    json_response($razza);

} else {
    $search = isset($_GET['search']) ? mysqli_real_escape_string($conn, $_GET['search']) : '';
    $taglia = isset($_GET['taglia']) ? mysqli_real_escape_string($conn, $_GET['taglia']) : '';

    $where = "WHERE 1";
    if ($search !== '') $where .= " AND r.nome LIKE '%$search%'";
    if ($taglia !== '') $where .= " AND r.taglia = '$taglia'";

    $query = "
        SELECT r.id, r.nome, r.taglia,
               m.encrypt_file_name AS img_file
        FROM razza r
        LEFT JOIN media m ON m.section = 'razza' AND m.item_id = r.id
        $where
        GROUP BY r.id
        ORDER BY r.nome ASC
    ";

    $result = mysqli_query($conn, $query);
    $razze  = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $row['image'] = $row['img_file']
            ? $img_base . $row['img_file']
            : null;
        unset($row['img_file']);
        $razze[] = $row;
    }

    json_response($razze);
}
