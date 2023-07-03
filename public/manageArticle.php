<?php
require "../data/function/validate.php";
require "../data/function/connection.php";
include_once "../data/config/article.php";
include_once "../data/config/category.php";
if (loginValidate()) {
    $localStorage = null;
    $article = new article();
    if (isset($_POST['editTitle'])) {
        echo ("UPDATE");
        $datas = array("title" => $_POST['editTitle'], "content" => $_POST['content'], "category" => $_POST['category'], "privacy" => $_POST['isPrivate']);
        $article->editArticle($datas, $_GET['editId'], $con);
        die;
    }
    if (isset($_POST['title'])) {
        $datas = array("title" => $_POST['title'], "content" => $_POST['content'], "category" => $_POST['category'], "privacy" => $_POST['isPrivate']);
        // $article->saveArticle($datas, $con);
        echo ("INSERT");
        die;
    }
    if (isset($_GET['deleteId'])) {
        $article->deleteArticle($_GET['deleteId'], $con);
        die;
    }
    if (isset($_GET['editId'])) {
        $datas = $article->getArticleById($con, $_GET['editId']);
        $localStorage = $datas;
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
        ls = JSON.parse(JSON.stringify(<?= json_encode($GLOBALS['localStorage']) ?>));
        if (ls != null) {
            localStorage.setItem("editArcticle", JSON.stringify(ls));
            console.log("inul")
        }
    </script>
    <script src="../assets/javascript/articleManagement.js" type="module"></script>
<?php
}
