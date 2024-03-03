<?php
require_once('phpmailer/PHPMailer.php');
require_once('phpmailer/SMTP.php');
require_once('phpmailer/Exception.php');
 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

function senderMail($destino,$assunto,$conteudo,$origemEmail='compito.ga@gmail.com',$origemNome='Controle Aniversariantes') {

	if ($destino) {
		$destino = "douglasuw@gmail.com";
	}
	 
	$mail = new PHPMailer(true);
	
	$mail->SMTPDebug = SMTP::DEBUG_SERVER;
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPDebug  = 0;
	$mail->SMTPSecure = "tls";
	$mail->SMTPAuth = true;
	$mail->Username = 'compito.ga@gmail.com';
	$mail->Password = 'SENHA';
	$mail->Port = 587;

	$mail->setFrom($origemEmail,$origemNome);
	$mail->addAddress($destino);

	$mail->isHTML(true);
	$mail->Subject = utf8_decode($assunto);
	$mail->Body = utf8_decode($conteudo);

	$mail->send();

}