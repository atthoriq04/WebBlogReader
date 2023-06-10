<?php
class JSON
{
    public function saveData($data, $filename)
    {
        $jsonData = json_encode($data);
        $filename = $filename;
        $path = "../assets/jsons/" . $filename;
        $result = file_put_contents($path, $jsonData);
        if ($result == false) {
            echo "Error saving JSON data to file.";
            return false;
        }

        return true;
    }
}
