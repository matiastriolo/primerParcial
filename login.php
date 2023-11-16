<?php

if ($_SERVER["REQUEST_METHOD"]=="POST") {
    $server = "localhost";
    $user = "root";
    $password = "";
    $db = "test";

    $conexion=new mysqli($server,$user,$password;$db);

    if ($conexion -> connect_error) {
        die("Conexion fallida" . $conexion->connect_error);
    } else{
        echo "Inicio de sesion exitoso";
    }

    $nombre = $_POST["nombre"];
    $contraseña = $_POST["contraseña"];

    $dataBase="INSERT INTO registro(nombre, contraseña) VALUES ($nombre. $contraseña)";
    
    if ($conexion->query($dataBase)===TRUE) {
        echo "Su registro fue exitoso";
    }else{
        echo "Su registro fue rechazado".$conexion->error;
    }

    $conexion->close();
    sleep(3);
    header("Location: login.html");

}

?>