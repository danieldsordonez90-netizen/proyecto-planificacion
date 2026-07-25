<?php
$jsonFile = __DIR__ . '/preferencias.json';

if ($action === 'save' && $theme !== null) {
    $data = ['theme' => $theme];
    file_put_contents($jsonFile, json_encode($data));
    return ['status' => 'success', 'theme' => $theme];
}

if ($action === 'get') {
    if (file_exists($jsonFile)) {
        $content = file_get_contents($jsonFile);
        return json_decode($content, true);
    }
    return ['theme' => 'light'];
}

return ['error' => 'Acción no reconocida'];
?>