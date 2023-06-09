<?php
class category
{

    public function __construct()
    {
        require "../data/function/query.php";
    }
    public function getCategory($con)
    {
        return dbSelect($con, "SELECT * FROM noteCategory");
    }
}
