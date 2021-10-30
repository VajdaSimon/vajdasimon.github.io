<?php 
    $servername = "localhost";
    $username  = "zsebibli_usersmn";
    $password = "dalokSQL";
    $dbname = "zsebibli_smn";

    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->set_charset("utf8");
 ?>