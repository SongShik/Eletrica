<?php


// contact.PHP - CONTACT FORM SEND FILE -   [ DEV TEAM ]
//     - #OFuturoÉOnline


// configure
$from = 'Formulario de Contato <formularios@teste.com.br>';
$sendTo = 'Contato <song@>';
$subject = ' eletrica - Novidades' ;
$fields = array('nome' => 'Nome ', 'email' => 'Email '); // array variable name => Text to appear in the email
$okMessage = 'Sua mensagem foi enviada com SUCESSO! O mais breve possível estaremos retornando, obrigado =)' ;
$errorMessage = 'Ops, ocorreu um erro, por favor tente novamente.';

// let's do the sending
try
{
    $emailText = "Olá  eletrica, você recebeu uma mensagem através do formulário de novidades do seu site.\n\nLembre-se de responder a essa mensagem através do email fornecido abaixo pelo visitante do seu site!\n\n\nAqui estão as informações:\n\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }

    }

    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage); 
    header('Location: ../views/sucesso.html');
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    

    echo $encoded;
}
else {
    echo $responseArray['message'];
}
