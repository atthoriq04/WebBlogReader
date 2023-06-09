<?php
require "../data/function/validate.php";
require "../data/function/connection.php";
require "../data/function/query.php";
$flashMessage = array();
if (loginValidate()) {
    account();
}

function account()
{
    require "../data/View/menu.php";
    require "../data/View/accountPage.php";

?>
    <script>
        flashMessage = JSON.stringify(<?= json_encode($GLOBALS["flashMessage"]) ?>);
        user = JSON.stringify(<?= json_encode($_SESSION['userdata']) ?>)
    </script>
    <script src="../assets/javascript/account.js" type="module"></script>
<?php
}
