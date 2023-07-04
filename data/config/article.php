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
        $rawDatas = $this->query->dbSelect($con, "SELECT * FROM theNotes INNER JOIN user ON theNotes.userId = user.userId INNER JOIN noteCategory ON theNotes.categoryId = noteCategory.categoryId ORDER BY id ASC");
        $toKeep = ["id", "userId", "username", "name", "title", "categoryId", "Category", "notes", "createdAt", "modifiedAt", "isPrivate"];
        $datas = array();
        foreach ($rawDatas as $rawData) {
            $row = array();
            foreach ($toKeep as $keep) {
                if (isset($rawData[$keep])) {
                    $row[$keep] = $rawData[$keep];
                    if ($keep == "notes") {
                        $row[$keep] = explode("\n", htmlspecialchars_decode($row[$keep]));
                        $row[$keep] = str_replace("''", "'", $row[$keep]);
                    }
                }
            }
            $datas[] = $row;
        }
        $json = new JSON();
        return $json->saveData($datas, "master.json");
    }

    public function getArticleById($con, $condition)
    {
        $rawDatas = $this->query->dbSelect($con, "SELECT * FROM theNotes WHERE id = $condition");
        $toKeep = ["id", "title", "categoryId", "Category", "notes", "isPrivate"];
        $datas = array();
        foreach ($rawDatas as $rawData) {
            $row = array();
            foreach ($toKeep as $keep) {
                if (isset($rawData[$keep])) {
                    $row[$keep] = $rawData[$keep];
                    if ($keep == "notes") {
                        $row[$keep] = explode("\n", htmlspecialchars_decode($row[$keep]));
                        $row[$keep] = str_replace("''", "'", $row[$keep]);
                    }
                }
            }
            $datas[] = $row;
        }
        return $datas[0];
    }

    public function saveArticle($datas, $con)
    {
        $title = $datas["title"];
        $rawContent = str_replace("'", "''", $datas["content"]);
        $content = htmlspecialchars($rawContent);
        $category = $datas["category"];
        $privacy = $datas["privacy"];


        $id = $_SESSION["userdata"]["userId"];
        $timeStamp =  time();
        if (!isset($datas["privacy"])) {
            $privacy = 0;
        }
        $data = "$id, '$category','$title', '$content', '$timeStamp', '$timeStamp', '$privacy'";
        $col = "userid, categoryId, title, notes, createdAt, modifiedAt, isPrivate";
        $this->query->dbInsert($con, "theNotes", $data, $col);
        header("location: index.php");
    }
    public function editArticle($datas, $id, $con)
    {
        $title = $datas["title"];
        $rawContent = str_replace("'", "''", $datas["content"]);
        $content = htmlspecialchars($rawContent);

        $category = $datas["category"];
        $privacy = $datas["privacy"];
        $timeStamp =  time();
        if (!isset($datas["privacy"])) {
            $privacy = 0;
        }
        $text = "title = '$title', notes = '$content', categoryId  = '$category', isPrivate =  '$privacy',modifiedAt = '$timeStamp'";
        $this->query->dbUpdate($con, "theNotes", $text, "id = $id");
        header("location: index.php");
    }
    public function deleteArticle($datas, $con)
    {
        $activeUserId = $_SESSION['userdata']['userId'];
        $condition = "id = $datas";
        $writerUser = $this->query->dbSelectOne($con, "theNotes", "userId", $condition);
        if ($writerUser != $activeUserId) {
            echo "$writerUser  $activeUserId";
            echo "FuCk YoU iNtRuDeR!!!!";
            die;
        }
        $this->query->dbDelete($con, "theNotes", $condition);
        header("location: account.php");
    }
}
