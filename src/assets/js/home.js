const width = window.innerWidth;
const cabecalho = document.getElementById("cabecalho");
const searchbar = document.getElementById("searchbar");
const mobilee = document.getElementById('mobile');
const main = document.getElementById('main');
const proteinas = document.getElementById('proteinas');

if (width <= 500) {
  if (localStorage.getItem("token") == null) {
    cabecalho.innerHTML = `<header id="cabecalho">
    <a onclick="mobile()"><i class="fa-solid fa-bars-staggered fa-2xl" style="color: #0000;"></i></a>
    <a href="/home.html"><img class="cabecalho-logo" src="/src/images/logo.png" alt=""></a>
  <div class="deslogar">
          <a href="/assets/html/carrinho.html"><i class="fa-solid fa-cart-shopping fa-xl" style="color: #000000;"></i></a>
  </div>
  <nav class="cabecalho-central">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="container h-100">
          <div class="d-flex justify-content-center h-100">
          </div>
        </div>
      </div>
    </nav>
</nav>
</header>
<div id="searchbar">
  <input class="search_input"  id="barraPesquisa" type="text" name="" placeholder="Qual suplemento você precisa?">
  <a href="#" class="search_icon"><i class="fas fa-search" pesquisarProdutos(termo)></i></a>
  </div>`;
    cabecalho.style.display = "flex";
    cabecalho.style.flexDirection = "column";
    cabecalho.style.gap = '0rem'
    cabecalho.style.padding = '20px'
    hidden.document.getElementById.add.hidden
    
}

} 
else {
  if (localStorage.getItem("token") != null) {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));

    const icon = document.getElementById("icon");
    icon.innerHTML = `
        <a href="/assets/html/meusPedidos.html"><i class="fa-solid fa-user fa-lg" style="color: #000000;"></i></a>
        <div class="name_user">
          Olá, ${userLogado.nome}
        </div>
        <div class="deslogar">
          <a  href="/assets/html/creatinaHD.html" id="botao" onclick="sair()"><i class="fa-solid fa-right-from-bracket fa-lg" style="color: #fff;" ></i></a>
        </div>
        <a href="/assets/html/carrinho.html"><i class="fa-solid fa-cart-shopping fa-lg" style="color: #fff;"></i></a>`;

    icon.style.display = "flex";
    icon.style.gap = "1rem";
  } else {
    const icon = document.getElementById("icon");

    icon.innerHTML = `
      <a href="/assets/html/login.html"><i class="fa-solid fa-user fa-lg" style="color: #000000;"></i></a>
      <a href="/assets/html/carrinho.html"><i class="fa-solid fa-cart-shopping fa-lg" style="color: #000000;"></i></a>`;

    icon.style.display = "flex";
    icon.style.gap = ".6rem";
  }

  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
  }
}
