<?php
header("Content-Type: application/vnd.apple.mpegurl");

$d0 = isset($_GET["id"]) ? $_GET["id"] : "";
$j1 = isset($_GET["au"]) ? $_GET["au"] : "";

// Replace with actual panel URL
$n2 = "http://tatatv.cc/stalker_portal/server/load.php?type=itv&action=create_link&cmd=ffrt%20http://localhost/ch/{$d0}&series=&forced_storage=0&disable_ad=0&download=0&force_ch_link_check=0&JsHttpRequest=1-xml";

$t4 = array(
    "Cookie: mac=00:1A:79:e0:68:9c",  // Your MAC address
    "Authorization: Bearer 2AF105C4CADD3071E59B5AEFDC39659A",  // Your Bearer Token
    "Referer: http://tatatv.cc/stalker_portal/c/",
    "User-Agent: Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3",
    "X-User-Agent: Model: MAG250; Link:",
    "Referer: http://tatatv.cc/stalker_portal/c/",
    "X-Device-ID: CF53E643CDF8E4FACE18B68F36A204D8A8BBFC2C7C641A25DA6D9C8DA29E368F",  // Device ID 1
    "X-Device-ID-2: 2AB3EAFBD4029"  // Device ID 2 (SN)
);

$n3 = curl_init();
curl_setopt($n3, CURLOPT_URL, $n2);
curl_setopt($n3, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($n3, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($n3, CURLOPT_RETURNTRANSFER, true);
curl_setopt($n3, CURLOPT_HTTPHEADER, $t4);
curl_setopt($n3, CURLOPT_USERAGENT, 'Mozilla/5.0 (QtEmbedded; U; Linux; C) AppleWebKit/533.3 (KHTML, like Gecko) MAG200 stbapp ver: 2 rev: 250 Safari/533.3');
curl_setopt($n3, CURLOPT_REFERER, 'http://tatatv.cc/stalker_portal/c/');

$h5 = curl_exec($n3);

curl_close($n3);

$i6 = json_decode($h5, true);

if (isset($i6["js"]["cmd"])) {
    $d7 = $i6["js"]["cmd"];
    header("Location: " . $d7);
    die;
}
?>
