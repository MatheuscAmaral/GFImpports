const button = document.getElementById('cadastrar'); // Alterado de 'button' para 'cadastrar'
const container = document.getElementById('container');

// Função para alternar entre as seções
function inverter() {
    const registerHTML = `
    <section id="register1"> 
        <div class="title">
            <h1>Já tem conta?</h1>
        </div>
        <p>Para entrar em nosso site, faça login <br> com suas informações</p>
        <button id="button" onclick="inverterEntrar()">Entrar</button>
    </section>
    <section id="enter1">
            <div id="top">
            <div class="title">
                <h1>Criar Conta</h1>
            </div>
            <div id="accounts">
                <a href=""><i class="fa-brands fa-facebook-f fa-lg" "></i></a>
                <a href=""><i class="fa-brands fa-google fa-lg" "></i></a>
                <a href=""><i class="fa-brands fa-linkedin-in fa-lg" "></i></a>
            </div>
            <p>ou cadastre seu e-mail</p>
            </div>
            <form>
                <div id="user">
                    <input type="name" id="name" placeholder="Nome">
                    <input type="email" id="login" placeholder="E-mail">
                    <input type="password" id="password" placeholder="Senha">
                </div>
            <div id="send">
                <input type="submit" id="submitRegister" value="Cadastrar" onclick="">
            </div>
            </form>
    </section>`;

    container.innerHTML = registerHTML;
}

    




function inverterEntrar() {
    container.innerHTML = ` <section id="enter">
    <div id="top">
        <div class="title">
            <h1>Entrar com</h1>
        </div>
        <div id="accounts">
            <a href=""><i class="fa-brands fa-facebook-f fa-lg" "></i></a>
            <a href=""><i class="fa-brands fa-google fa-lg" "></i></a>
            <a href=""><i class="fa-brands fa-linkedin-in fa-lg" "></i></a>
        </div>
        <p>ou utilize sua conta</p>
    </div>
    <form>
        <div id="user">
            <input id="email" type="email" placeholder="E-mail">
            <input id="senha" type="password" placeholder="Senha">
        </div>
    <div id="send">
            <a href=""><p>Esqueceu a senha?</p></a>
            <input type="submit" value="Entrar" onclick="login()">
    </div>
    </form>
</section>
<section id="register"> 
    <div class="title">
        <h1>Olá Usuário</h1>
    </div>
    <p>Cadastre-se e começe a usar o nosso site</p>
    <button id="cadastrar" onclick="inverter()">Cadastrar</button>
</section>`
}
