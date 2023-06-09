<?php
require "../data/function/validate.php";
if (loginValidate()) {
    home();
}
function home()
{

    require "../data/View/menu.php";
    require "../data/View/homepage.php";
?>
    <script>
        user = JSON.stringify(<?= json_encode($_SESSION['userdata']) ?>)
    </script>
    <script src="../assets/javascript/home.js"></script>
<?php
}
