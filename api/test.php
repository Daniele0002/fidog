<?php
// Test di connessione al DB
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Content-Type: application/json; charset=UTF-8");

$host   = 'localhost';
$user   = 'root';
$pass   = '';
$dbname = 'esame2026';

$conn = mysqli_connect($host, $user, $pass, $dbname);

if (!$conn) {
    echo json_encode([
        "status" => "ERRORE",
        "messaggio" => "Connessione fallita: " . mysqli_connect_error(),
        "errno" => mysqli_connect_errno()
    ]);
    exit;
}

// Lista database disponibili
$dbs = [];
$res = mysqli_query($conn, "SHOW DATABASES");
while ($row = mysqli_fetch_row($res)) {
    $dbs[] = $row[0];
}

// Conta razze se la tabella esiste
$count_razze = 0;
$count_cani  = 0;
$tables = [];

$res2 = mysqli_query($conn, "SHOW TABLES");
while ($row = mysqli_fetch_row($res2)) {
    $tables[] = $row[0];
}

if (in_array('razza', $tables)) {
    $r = mysqli_query($conn, "SELECT COUNT(*) as n FROM razza");
    $count_razze = mysqli_fetch_assoc($r)['n'];
}

if (in_array('cane', $tables)) {
    $r = mysqli_query($conn, "SELECT COUNT(*) as n FROM cane");
    $count_cani = mysqli_fetch_assoc($r)['n'];
}

echo json_encode([
    "status"       => "OK",
    "database"     => $dbname,
    "databases_disponibili" => $dbs,
    "tabelle"      => $tables,
    "razze_totali" => $count_razze,
    "cani_totali"  => $count_cani
], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
