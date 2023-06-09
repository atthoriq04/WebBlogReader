<?php
require "../function/connection.php";
require "../function/query.php";
session_start();
$redirect = "main.php";
$loginMessage = array();
if (isset($_POST['Rusername'])) {
    $loginMessage = registerAccount($con);
}
if (isset($_POST['username'])) {
    $loginMessage = loginAccount($con);
}
if (isset($_POST['uName'])) {
    $loginMessage = editAccount($con);
}
if (isset($_POST['newOne'])) {
    $loginMessage = changePassword($con);
}

function registerAccount($con)
{
    $col = "username, name, password, isAdmin";
    $username = $_POST['Rusername'];
    $userData = dbSelect($con, "SELECT username FROM user WHERE username = '$username'");
    $pass = $_POST['Rpassword'];
    if (count($userData) > 0) {
        $loginMessage = array("isLogin" => false, "message" => "Username has been Registered Before, Please Choose Another username");
    } else {
        $password = password_hash($pass, PASSWORD_DEFAULT);
        $data = "'$username', '$username', '$password', '0'";
        dbInsert($con, "user", $data, $col);
        $loginMessage = array("isLogin" => true, "message" => "Your Account has successfully Created, Please Login to Continue");
    }
    return $loginMessage;
}

function loginAccount($con)
{
    $username = $_POST['username'];
    $userData = dbSelect($con, "SELECT * FROM user WHERE username = '$username'");
    $pass = $_POST['password'];
    if (count($userData) < 0) {
        $loginMessage = array("isLogin" => true, "message" => "Account with username: $username does not Exist");
    } else {
        $loginMessage = array("isLogin" => true, "message" => "Password Wrong");
        if (password_verify($pass, $userData[0]['password'])) {
            $_SESSION["userdata"] = $userData[0];
            $loginMessage = array("isLogin" => true, "message" => "Right");
        }
    }
    return $loginMessage;
}

function editAccount($con)
{
    $username = $_POST["uName"];
    $name = $_POST["name"];
    $data = "username = '$username', name = '$name'";
    $id = $_SESSION["userdata"]["userId"];
    $GLOBALS['redirect'] = "../../public/account.php";
    $userData = dbSelect($con, "SELECT username FROM user WHERE username = '$username' AND userId != $id");
    if ($username == "" || $name = "") {
        return array("isEdit" => true, "message" => "Username or Name cannot be empty");
    }
    if (count($userData) > 0) {
        return array("isEdit" => true, "message" => "Username $username Already being used");
    }
    dbUpdate($con, "user", "$data", "userId = $id");
    $_SESSION["userdata"]["username"] = "$username";
    $_SESSION["userdata"]["name"] = $name;
    return array("isEdit" => false, "message" => "Edit Successfully");
}
function changePassword($con)
{
    $oldPassword = $_POST['oldOne'];
    $newPassword = $_POST['newOne'];
    $id = $_SESSION["userdata"]["userId"];
    $GLOBALS['redirect'] = "../../public/account.php";
    $oldUsed = dbSelectOne($con, "user", "password", "userId = $id");
    $password = password_hash($newPassword, PASSWORD_DEFAULT);
    $data = "password = '$password'";
    if (!password_verify($oldPassword, $oldUsed)) {
        return array("isPassword" => true, "message" => "Your Current Password is Wrong");
    }
    dbUpdate($con, "user", $data, "userId = $id");
    return array("isPassword" => false, "message" => "Password Changed Successfully");
}

?>
<script>
    localStorage.setItem("message", JSON.stringify(<?= json_encode($loginMessage) ?>));
    window.location.replace("<?= $redirect ?>");
</script>