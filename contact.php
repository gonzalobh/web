<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

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

$autoloadPath = __DIR__ . '/vendor/autoload.php';
$phpMailerPath = __DIR__ . '/vendor/phpmailer/phpmailer/src/PHPMailer.php';
$phpMailerExceptionPath = __DIR__ . '/vendor/phpmailer/phpmailer/src/Exception.php';
$phpMailerSmtpPath = __DIR__ . '/vendor/phpmailer/phpmailer/src/SMTP.php';

if (file_exists($autoloadPath)) {
    require $autoloadPath;
} elseif (file_exists($phpMailerPath) && file_exists($phpMailerExceptionPath) && file_exists($phpMailerSmtpPath)) {
    require $phpMailerExceptionPath;
    require $phpMailerSmtpPath;
    require $phpMailerPath;
} else {
    http_response_code(500);
    echo json_encode(['error' => 'PHPMailer est introuvable sur le serveur.']);
    exit;
}

$smtpPassword = getenv('SMTP_PASSWORD') ?: '';
if ($smtpPassword === '') {
    http_response_code(500);
    echo json_encode(['error' => 'Le mot de passe SMTP est manquant.']);
    exit;
}

$bodyLines = [
    "Nom complet: {$name}",
    "Adresse e-mail: {$email}",
    '',
    "Message:",
    $message
];
$body = implode("\n", $bodyLines);

try {
    $mailer = new PHPMailer(true);
    $mailer->isSMTP();
    $mailer->Host = 'smtp.hostinger.com';
    $mailer->SMTPAuth = true;
    $mailer->Username = 'info@facture.mu';
    $mailer->Password = $smtpPassword;
    $mailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mailer->Port = 465;
    $mailer->CharSet = 'UTF-8';

    $mailer->setFrom('info@facture.mu', 'Facture.mu');
    $mailer->addAddress($to);
    $mailer->addReplyTo($email, $name);
    $mailer->Subject = $subject;
    $mailer->Body = $body;
    $mailer->AltBody = $body;

    $mailer->send();
} catch (Exception $error) {
    http_response_code(500);
    echo json_encode(['error' => "L'envoi de l'e-mail a échoué : {$error->getMessage()}"]);
    exit;
}

echo json_encode(['success' => true]);
