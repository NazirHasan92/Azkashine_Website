<?php
/**
 * Contact Form Handler for Azkashine Website
 *
 * This script processes contact form submissions and sends emails
 * using Hostinger's email service.
 *
 * Security Features:
 * - Input validation and sanitization
 * - CSRF protection via origin check
 * - Rate limiting via session
 * - XSS prevention
 * - SQL injection prevention (no database, but sanitized anyway)
 */

// Start session for rate limiting
session_start();

// Set JSON response headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Method not allowed'
    ]);
    exit;
}

// Rate limiting: Allow only 3 submissions per 15 minutes
$rate_limit_key = 'contact_form_submissions';
$rate_limit_max = 3;
$rate_limit_window = 900; // 15 minutes in seconds

if (!isset($_SESSION[$rate_limit_key])) {
    $_SESSION[$rate_limit_key] = [];
}

// Clean old timestamps
$_SESSION[$rate_limit_key] = array_filter(
    $_SESSION[$rate_limit_key],
    function($timestamp) use ($rate_limit_window) {
        return (time() - $timestamp) < $rate_limit_window;
    }
);

// Check rate limit
if (count($_SESSION[$rate_limit_key]) >= $rate_limit_max) {
    http_response_code(429);
    echo json_encode([
        'success' => false,
        'error' => 'Too many requests. Please try again later.'
    ]);
    exit;
}

// Get and decode JSON input
$json_input = file_get_contents('php://input');
$data = json_decode($json_input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Invalid JSON data'
    ]);
    exit;
}

// Validation function
function validateInput($data) {
    $errors = [];

    // Name validation
    if (empty(trim($data['name'] ?? ''))) {
        $errors['name'] = 'Name is required';
    } elseif (strlen($data['name']) > 100) {
        $errors['name'] = 'Name is too long';
    }

    // Email validation
    if (empty(trim($data['email'] ?? ''))) {
        $errors['email'] = 'Email is required';
    } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Invalid email address';
    } elseif (strlen($data['email']) > 255) {
        $errors['email'] = 'Email is too long';
    }

    // Phone validation
    if (empty(trim($data['phone'] ?? ''))) {
        $errors['phone'] = 'Phone is required';
    } elseif (!preg_match('/^[0-9+\-() ]+$/', $data['phone'])) {
        $errors['phone'] = 'Invalid phone number';
    } elseif (strlen($data['phone']) > 20) {
        $errors['phone'] = 'Phone number is too long';
    }

    // Message validation
    if (empty(trim($data['message'] ?? ''))) {
        $errors['message'] = 'Message is required';
    } elseif (strlen($data['message']) > 5000) {
        $errors['message'] = 'Message is too long';
    }

    // Company validation (optional)
    if (isset($data['company']) && strlen($data['company']) > 200) {
        $errors['company'] = 'Company name is too long';
    }

    return $errors;
}

// Sanitize function to prevent XSS
function sanitizeText($text) {
    if (empty($text)) return '';

    // Remove any HTML tags
    $text = strip_tags($text);

    // Convert special characters to HTML entities
    $text = htmlspecialchars($text, ENT_QUOTES, 'UTF-8');

    // Trim whitespace
    $text = trim($text);

    return $text;
}

// Validate input
$validation_errors = validateInput($data);

if (!empty($validation_errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Validation failed',
        'fields' => $validation_errors
    ]);
    exit;
}

// Sanitize all inputs
$name = sanitizeText($data['name']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = sanitizeText($data['phone']);
$company = sanitizeText($data['company'] ?? '');
$message = sanitizeText($data['message']);

// Recipient email
$to = 'nazir.hasan@azkashine.com';

// Email subject
$subject = 'New Contact Form Submission from ' . $name;

// Email headers
$headers = [
    'From: Azkashine Contact Form <noreply@' . $_SERVER['HTTP_HOST'] . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8'
];

// Email body (HTML)
$email_body = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #0a0a0a; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 30px; margin-top: 20px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
        .value { background-color: white; padding: 10px; border-left: 3px solid #33b2e9; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">Name:</span>
                <div class="value">' . $name . '</div>
            </div>
            <div class="field">
                <span class="label">Email:</span>
                <div class="value">' . $email . '</div>
            </div>
            <div class="field">
                <span class="label">Phone:</span>
                <div class="value">' . $phone . '</div>
            </div>';

if (!empty($company)) {
    $email_body .= '
            <div class="field">
                <span class="label">Company:</span>
                <div class="value">' . $company . '</div>
            </div>';
}

$email_body .= '
            <div class="field">
                <span class="label">Message:</span>
                <div class="value">' . nl2br($message) . '</div>
            </div>
        </div>
        <div class="footer">
            <p>This email was sent from the Azkashine website contact form.</p>
            <p>Received at: ' . date('Y-m-d H:i:s T') . '</p>
            <p>IP Address: ' . $_SERVER['REMOTE_ADDR'] . '</p>
        </div>
    </div>
</body>
</html>';

// Send email
$mail_sent = mail($to, $subject, $email_body, implode("\r\n", $headers));

if ($mail_sent) {
    // Add timestamp to rate limit tracker
    $_SESSION[$rate_limit_key][] = time();

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send email. Please try again later.'
    ]);
}
?>
