<?php
class category
{
    private $query;
    public function __construct()
    {
        include_once "../data/function/query.php";
        $this->query = new query();
    }
    public function getCategory($con)
    {
        return $this->query->dbSelect($con, "SELECT * FROM noteCategory");
    }
}
