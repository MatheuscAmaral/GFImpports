<?php
// Conectar ao banco de dados (substitua com suas credenciais)
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "loja_de_vendas";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Recuperar dados do formulário de login
$login = $_POST['login'];
$senha = $_POST['senha'];

// Consulta SQL para verificar as credenciais
$sql = "SELECT * FROM usuarios WHERE login = '$login' AND senha = '$senha'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // Login bem-sucedido, redirecionar para a página principal
    header("Location: pagina_principal.php");
} else {
    // Login falhou, redirecionar de volta para a página de login com uma mensagem de erro
    header("Location: login.html?erro=1");
}

$conn->close();
?>
