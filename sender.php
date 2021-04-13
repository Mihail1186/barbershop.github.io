<?php
$name = $_POST['name'];
$textarea = $_POST['textarea'];


$to = "@mail.ru";
$date = date("d.m.Y");
$time = date("h:i");
$subject = "Заявка c сайта";


$msg = "
    Имя: $name /n
    Сообщение: $textarea";
mail($to, $subject, $msg);

?>

<!-- <p>Привет, форма отправлена</p> -->