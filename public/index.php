<?php
require "../data/function/validate.php";
require "../data/function/connection.php";
include_once "../data/config/article.php";
if (loginValidate()) {
    $article = new article();
    if ($article->getArticles($con)) home();
}
function home()
{

    require "../data/View/menu.php";
    require "../data/View/homepage.php";
?>
    <script>
        user = JSON.stringify(<?= json_encode($_SESSION['userdata']) ?>)
    </script>
    <script src="../assets/javascript/home.js" type="module"></script>
<?php
}
