<?php

session_start();
if (!isset($_SESSION['userdata'])) {
    header('location: ../../public/login.php');
    exit;
}
header('location: ../../public/index.php');
