<?php
$con = mysqli_connect("localhost", "root", "root", "notes");
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}
