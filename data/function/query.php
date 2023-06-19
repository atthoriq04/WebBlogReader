<?php
class query
{
    function dbSelect($con, $query)
    {
        $result = $con->query($query);
        $data = $result->fetch_all(MYSQLI_ASSOC);
        return $data;
    }
    function dbSelectOne($con, $tableName, $columnName, $condition)
    {
        $query = "SELECT $columnName FROM $tableName WHERE $condition";
        $res = $con->query($query)->fetch_assoc();
        return $res[$columnName];
    }
    function dbInsert($con, $tableName, $datas, $col)
    {
        $query = "INSERT INTO $tableName ($col) VALUES ($datas)";

        if ($con->query($query) === TRUE) {
        } else {
            echo "Error: " . $query . "<br>" . $con->error;
            die;
        }
    }
    function dbUpdate($con, $tableName, $datas, $condition)
    {
        $query = "UPDATE $tableName SET $datas WHERE $condition";
        if ($con->query($query) === TRUE) {
        } else {
            echo "Error: " . $query . "<br>" . $con->error;
            die;
        }
    }
    function dbDelete($con, $tableName, $condition)
    {
        $query = "DELETE FROM $tableName WHERE $condition";
        if (!$con->query($query) === true) {
            echo "Error: " . $query . "<br>" . $con->error;
            die;
        }
    }
}
