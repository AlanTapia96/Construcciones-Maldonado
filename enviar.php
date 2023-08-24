<?php 
	$nombre = $_POST['name'];
	$mail = $_POST['mail'];
   $message = $_POST['message'];
   $phone = $_POST['phone'];
	$asunto = 'Formulario Web - construccionesmaldonado.net';
	$mensaje = "Nombre: ".$nombre."<br> Email: $mail<br>Teléfono: $phone<br> Mensaje: $message";

    $cabeceras = 'From: ' . $mail . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if( mail('tapia.alan.g@gmail.com', $asunto, $mensaje, $cabeceras) ) {
        echo json_encode(array(
           'success'=> true,
           'message' => 'Message sent successfully'
        ));
     }else {
        echo json_encode(array(
           'error'=> true,
           'message' => 'Error sending message'
        ));
     }
?>