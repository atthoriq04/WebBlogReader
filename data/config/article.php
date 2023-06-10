<?php
class article
{
    private $query;
    public function __construct()
    {
        include_once "../data/function/query.php";
        $this->query = new query();
    }
    public function getArticles($con)
    {
        include_once "../data/function/JSON.php";
        $rawDatas = $this->query->dbSelect($con, "SELECT * FROM thenotes INNER JOIN user ON thenotes.userId = user.userId INNER JOIN notecategory ON thenotes.categoryId = notecategory.categoryId");
        $toKeep = ["id", "username", "title", "Category", "notes", "createdAt", "modifiedAt", "isPrivate"];
        $datas = array();
        foreach ($rawDatas as $rawData) {
            $row = array();
            foreach ($toKeep as $keep) {
                if (isset($rawData[$keep])) {
                    $row[$keep] = $rawData[$keep];
                    if ($keep == "notes") {
                        $row[$keep] = explode("\n", $rawData[$keep]);
                    }
                }
            }
            $datas[] = $row;
        }
        $json = new JSON();
        $json->saveData($datas, "master.json");
    }
    public function saveArticle($datas, $con)
    {
        $title = $datas["title"];
        $content = $datas["content"];
        $category = $datas["category"];
        $privacy = $datas["privacy"];

        $id = $_SESSION["userdata"]["userId"];
        $timeStamp =  time();
        if (!isset($datas["privacy"])) {
            $privacy = 0;
        }
        $data = "$id, '$category','$title', '$content', '$timeStamp', '$timeStamp', '$privacy'";
        $col = "userid, category, title, notes, createdAt, modifiedAt, isPrivate";
        $this->query->dbInsert($con, "theNotes", $data, $col);
        header("location: account.php");
    }
    public function editArticle($datas, $con)
    {
        $title = $datas["title"];
        $content = $datas["content"];
        $category = $datas["category"];
        $privacy = $datas["privacy"];
    }
}
