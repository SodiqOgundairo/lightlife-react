<?php

// Cloudinary Configuration
define('CLOUDINARY_CLOUD_NAME', 'dmxfjy079');
define('CLOUDINARY_API_KEY', '286765678628612');
define('CLOUDINARY_API_SECRET', 'ZBNudlytPtHcUPawBYWwae7qLi4');
define('CLOUDINARY_UPLOAD_FOLDER', 'LLCImagerepo/Images/dldImages');

/**
 * Uploads an image to Cloudinary using cURL and returns the response.
 *
 * @param string $filePath The temporary path to the uploaded file (e.g., $_FILES['image']['tmp_name']).
 * @return array An array with 'success' (boolean) and 'url' or 'error' (string).
 */
function uploadToCloudinaryViaCurl(string $filePath): array {
    if (!file_exists($filePath) || !is_readable($filePath)) {
        return ['success' => false, 'error' => 'File does not exist or is not readable. Path: ' . $filePath];
    }

    $timestamp = time();

    // Parameters to sign (must be sorted alphabetically by key)
    $paramsToSign = [
        'folder' => CLOUDINARY_UPLOAD_FOLDER,
        'timestamp' => $timestamp
        // Add any other parameters you want to send that need to be part of the signature
        // e.g., 'public_id', 'tags', etc.
        // For basic uploads, folder and timestamp are common.
    ];
    ksort($paramsToSign); // Sort parameters by key

    $stringToSign = "";
    foreach ($paramsToSign as $key => $value) {
        $stringToSign .= "$key=$value&";
    }
    $stringToSign = rtrim($stringToSign, '&'); // Remove trailing '&'
    $stringToSign .= CLOUDINARY_API_SECRET; // Append API secret

    $signature = sha1($stringToSign);

    $postData = [
        'file' => new CURLFile($filePath), // Use CURLFile for file uploads
        'api_key' => CLOUDINARY_API_KEY,
        'timestamp' => $timestamp,
        'signature' => $signature,
        'folder' => CLOUDINARY_UPLOAD_FOLDER
        // Add other parameters here if needed, matching those in $paramsToSign if they affect the signature
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://api.cloudinary.com/v1_1/' . CLOUDINARY_CLOUD_NAME . '/image/upload');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 60); // 60 seconds timeout
    // curl_setopt($ch, CURLOPT_VERBOSE, true); // For debugging cURL

    $response = curl_exec($ch);
    $curlError = curl_error($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($curlError) {
        return ['success' => false, 'error' => 'cURL Error: ' . $curlError];
    }

    $responseData = json_decode($response, true);

    if ($httpCode >= 200 && $httpCode < 300 && isset($responseData['secure_url'])) {
        return ['success' => true, 'url' => $responseData['secure_url'], 'public_id' => $responseData['public_id'] ?? null];
    } else {
        $errorMessage = 'Cloudinary API Error: ';
        if (isset($responseData['error']['message'])) {
            $errorMessage .= $responseData['error']['message'];
        } elseif (!empty($response)) {
            $errorMessage .= $response;
        } else {
            $errorMessage .= 'Unknown error. HTTP Code: ' . $httpCode;
        }
        return ['success' => false, 'error' => $errorMessage, 'http_code' => $httpCode, 'response_raw' => $response];
    }
}

?>
