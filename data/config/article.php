<?php
class article
{

    public function __construct()
    {
        require "../data/function/query.php";
    }
    protected function saveArticle($datas, $con)
    {
        $title = $datas["title"];
        $content = $datas["content"];
        $category = $datas["category"];
        $privacy = $datas["privacy"];
    }
    protected function editArticle($datas, $con)
    {
        $title = $datas["title"];
        $content = $datas["content"];
        $category = $datas["category"];
        $privacy = $datas["privacy"];
    }
}
