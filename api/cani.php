<?php
/**
 * API Cani
 * GET /api/cani.php               → tutti i cani disponibili
 * GET /api/cani.php?id=3          → singolo cane
 * GET /api/cani.php?razza_id=2    → filtro per razza
 * GET /api/cani.php?stato=disponibile
 * GET /api/cani.php?sesso=M|F
 */

require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    json_response(["error" => "Metodo non consentito"], 405);
}

$conn     = connect();
$id       = isset($_GET['id'])       ? intval($_GET['id'])       : 0;
$img_base = 'http://localhost/esame2026%202/assets/images/media/cane/';

if ($id > 0) {
    // ── Singolo cane ──────────────────────────────────────────────────────
    $query = "
        SELECT c.*, r.nome AS nome_razza, r.taglia,
               cn.nome_canile, ct.name AS citta, st.name AS provincia, st.abbreviation AS prov_sigla,
               rg.name AS regione
        FROM cane c
        LEFT JOIN razza r   ON r.id = c.razza_id
        LEFT JOIN canile cn ON cn.id = c.canile_id
        LEFT JOIN city ct   ON cn.city_id = ct.id
        LEFT JOIN state st  ON cn.state_id = st.id
        LEFT JOIN region rg ON cn.region_id = rg.id
        WHERE c.id = $id
        LIMIT 1
    ";
    $result = mysqli_query($conn, $query);
    $cane   = mysqli_fetch_assoc($result);
    if (!$cane) { json_response(["error" => "Cane non trovato"], 404); }

    // Immagine
    $res_img = mysqli_query($conn,
        "SELECT encrypt_file_name FROM media
         WHERE section = 'cane' AND item_id = $id
         ORDER BY id ASC LIMIT 1"
    );
    $img = mysqli_fetch_assoc($res_img);
    $cane['image'] = $img ? $img_base . $img['encrypt_file_name'] : null;

    // Attributi (tag carattere)
    $res_attr = mysqli_query($conn,
        "SELECT a.nome_attributo FROM attributo a
         INNER JOIN cane_attributo ca ON ca.attributo_id = a.id
         WHERE ca.cane_id = $id"
    );
    $cane['attributi'] = [];
    while ($a = mysqli_fetch_assoc($res_attr)) {
        $cane['attributi'][] = $a['nome_attributo'];
    }

    json_response($cane);

} else {
    // ── Lista cani con filtri ─────────────────────────────────────────────
    $razza_id = isset($_GET['razza_id']) ? intval($_GET['razza_id'])                                       : 0;
    $sesso    = in_array($_GET['sesso'] ?? '', ['M', 'F'])                 ? $_GET['sesso']               : '';
    $stato    = $_GET['stato'] ?? '';
    $where = [];
    if (in_array($stato, ['disponibile', 'adottato'])) {
        $where[] = "c.stato = '$stato'";
    } elseif ($stato !== 'all') {
        $where[] = "c.stato = 'disponibile'";
    }
    if ($razza_id > 0) $where[] = "c.razza_id = $razza_id";
    if ($sesso !== '') $where[] = "c.sesso = '$sesso'";

    $where_sql = !empty($where) ? "WHERE " . implode(" AND ", $where) : "";

    $query = "
        SELECT c.id, c.nome, c.eta, c.sesso, c.stato, c.storia, c.razza_id,
               r.nome AS nome_razza, r.taglia,
               cn.nome_canile, ct.name AS citta, st.name AS provincia, st.abbreviation AS prov_sigla,
               rg.name AS regione,
               m.encrypt_file_name AS img_file
        FROM cane c
        LEFT JOIN razza r   ON r.id = c.razza_id
        LEFT JOIN canile cn ON cn.id = c.canile_id
        LEFT JOIN city ct   ON cn.city_id = ct.id
        LEFT JOIN state st  ON cn.state_id = st.id
        LEFT JOIN region rg ON cn.region_id = rg.id
        LEFT JOIN media m   ON m.section = 'cane' AND m.item_id = c.id
        $where_sql
        GROUP BY c.id
        ORDER BY c.id DESC
    ";

    $result = mysqli_query($conn, $query);
    $cani   = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $row['image'] = $row['img_file']
            ? $img_base . $row['img_file']
            : null;
        unset($row['img_file']);

        // Attributi per ogni cane
        $cid       = intval($row['id']);
        $res_attr  = mysqli_query($conn,
            "SELECT a.nome_attributo FROM attributo a
             INNER JOIN cane_attributo ca ON ca.attributo_id = a.id
             WHERE ca.cane_id = $cid"
        );
        $row['attributi'] = [];
        while ($a = mysqli_fetch_assoc($res_attr)) {
            $row['attributi'][] = $a['nome_attributo'];
        }

        $cani[] = $row;
    }

    json_response($cani);
}
