<?php
require "../data/function/validate.php";
require "../data/function/connection.php";
include_once "../data/config/article.php";
include_once "../data/config/category.php";
if (loginValidate()) {
    if (isset($_POST['title'])) {
        $article = new article();
        $datas = array("title" => $_POST['title'], "content" => $_POST['content'], "category" => $_POST['category'], "privacy" => $_POST['isPrivate']);
        $article->saveArticle($datas, $con);
    }
    if (isset($_GET['deleteId'])) {
        echo "lanjoot";
        die;
    }
    writeArticle();
}

function writeArticle()
{

    $category = new category();
    $categories = $category->getCategory($GLOBALS['con']);

    require "../data/View/menu.php";
    require "../data/View/articleForm.php";
?>
    <script>
        user = JSON.stringify(<?= json_encode($_SESSION['userdata']) ?>)
        categories = JSON.parse(JSON.stringify(<?= json_encode($categories) ?>));
        console.log(categories)
    </script>
    <script src="../assets/javascript/articleManagement.js" type="module"></script>
<?php
}
