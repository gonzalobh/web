<?php

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Méthode non autorisée.']);
  exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
  http_response_code(422);
  echo json_encode(['error' => 'Tous les champs sont obligatoires.']);
  exit;
}

$to = 'info@facture.mu';
$subject = 'Nouveau message – Facture.mu';

$body = "Nom: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message";

$headers = [
  'From: Facture.mu <info@facture.mu>',
  'Reply-To: ' . $email,
  'Content-Type: text/plain; charset=UTF-8'
];

if (!mail($to, $subject, $body, implode("\r\n", $headers))) {
  http_response_code(500);
  echo json_encode(['error' => 'Erreur lors de l’envoi du message.']);
  exit;
}

echo json_encode(['success' => true]);
