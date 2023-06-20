<?php
require "../data/function/validate.php";
require "../data/function/connection.php";
include_once "../data/config/article.php";
if (loginValidate()) {
    $article = new article();
    if ($article->getArticles($con)) account();
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
