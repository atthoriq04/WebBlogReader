<?php
require "../data/function/validate.php";
require "../data/function/connection.php";
include "../data/config/article.php";
include "../data/config/category.php";
if (loginValidate()) {
    $category = new category();
    $categories = $category->getCategory($con);
    writeArticle();
}

function writeArticle()
{
    require "../data/View/menu.php";
    require "../data/View/articleForm.php";
}
?>
<script>
    user = JSON.stringify(<?= json_encode($_SESSION['userdata']) ?>)
    categories = JSON.parse(JSON.stringify(<?= json_encode($categories) ?>));
    console.log(categories)
</script>
<script src="../assets/javascript/articleManagement.js" type="module"></script>