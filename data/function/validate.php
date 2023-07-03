<?php
function loginValidate()
{
    session_start();
    if (isset($_SESSION['userdata'])) {
        return true;
    }
    header("location: ../data/config/main.php");
}
