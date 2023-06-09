<?php
require "../data/function/validate.php";
if (loginValidate()) {
    account();
}

function account()
{
    require "../data/View/menu.php";
    require "../data/View/accountPage.php";

?>
    <script>
        user = JSON.stringify(<?= json_encode($_SESSION['userdata']) ?>)
    </script>
    <script src="../assets/javascript/account.js" type="module"></script>
<?php
}
