<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Méthode non autorisée.']);
    exit;
}

$rawInput = file_get_contents('php://input');
$payload = json_decode($rawInput, true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['error' => 'Données invalides.']);
    exit;
}

$name = trim(strip_tags($payload['name'] ?? ''));
$email = trim($payload['email'] ?? '');
$message = trim(strip_tags($payload['message'] ?? ''));

if ($name === '') {
    http_response_code(422);
    echo json_encode(['error' => 'Le nom est obligatoire.']);
    exit;
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['error' => "L'adresse e-mail est invalide."]);
    exit;
}

if ($message === '') {
    http_response_code(422);
    echo json_encode(['error' => 'Le message est obligatoire.']);
    exit;
}

$to = 'info@facture.mu';
$subject = 'Nouveau message depuis le site Facture.mu';

$bodyLines = [
    "Nom complet: {$name}",
    "Adresse e-mail: {$email}",
    '',
    "Message:",
    $message
];
$body = implode("\n", $bodyLines);

$headers = "From: Facture.mu <no-reply@facture.mu>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (!mail($to, $subject, $body, $headers)) {
    http_response_code(500);
    echo json_encode(['error' => "L'envoi de l'e-mail a échoué."]);
    exit;
}

echo json_encode(['success' => true]);
