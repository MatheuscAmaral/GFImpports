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
      <a href="/src/assets/html/login.html"><i class="fa-solid fa-user fa-lg" style="color: #000000;"></i></a>
      <a href="/src/assets/html/carrinho.html"><i class="fa-solid fa-cart-shopping fa-lg" style="color: #000000;"></i></a>`;

    icon.style.display = "flex";
    icon.style.gap = ".6rem";
  }

  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
  }
}


function iphones() {
    const navIphones = document.getElementById('navIphones');
    const navbar = document.getElementById('navbarr');
    
    navbar.innerHTML =  `
    <div class="navIp" style="display: flex; gap: 10rem;">
          <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/iphone11128.png" width="115px" style="display: flex; flex-direction: column; gap: 3rem">
              <p>Ver todos</p>
          </div>
          <div id="iphonesss" style="display: flex; gap: 3rem;">
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/iphone14.png" width="92px">
              <p>Iphone 14</p>
            </div>
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/iphone-13.png" width="101px">
              <p>Iphone 13</p>
            </div>
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/iphone1264gb.jpeg" width="120px">
              <p>Iphone 12</p>
            </div>
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/iphone11.png" width="120px">
              <p>Iphone 11</p>
            </div>
          </div>
        </div>
  `
}

function macbook() {
  const navBook = document.getElementById('navBook');
  const navbar = document.getElementById('navbarr');
  
  navbar.innerHTML =  `
  <div class="navIp" style="display: flex; gap: 10rem;">
          <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/macbooksa.png " width="180px">
              <p>Ver todos</p>
          </div>
          <div id="macbookss" style="display: flex; gap: 3rem;">
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/m215p.png" width="120px">
              <p>MacBook M2</p>
            </div>
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/m2256.png" width="120px">
              <p>MacBook M1</p>
            </div>
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/m1256.png" width="120px">
              <p>MacBook Pro</p>
            </div>
          </div>
`
}

function iPad() {
  const navPad = document.getElementById('navPad');
  const navbar = document.getElementById('navbarr');
  
  navbar.innerHTML =  `
  <div class="navIp" style="display: flex; gap: 10rem;">
          <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/ipad10256.png" width="120px">
              <p>Ver todos</p>
          </div>
          <div id="Ipadsss" style="display: flex; gap: 3rem;">
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/ipad9.png" width="120px">
              <p>iPad 9</p>
            </div>
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/ipad10.png" width="120px">
              <p>iPad 10</p>
            </div>
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/ipadair64gb.jpeg" width="120px">
              <p>iPad Air</p>
            </div>
          </div>
        </div>
`
}

function AppleWatch() {
  const navApple = document.getElementById('navApple');
  const navbar = document.getElementById('navbarr');
  
  navbar.innerHTML =  `
  <div class="navIp" style="display: flex; gap: 10rem;">
          <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 2rem;">
              <img src="/src/images/applewatch.png" width="120px">
              <p>Ver todos</p>
          </div>
          <div id="Ipadsss" style="display: flex; gap: 3rem;">
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/applewatch1.png" width="120px">
              <p>Apple Watch S6</p>
            </div>
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/applewatch3.png" width="120px">
              <p>Apple Watch S7</p>
            </div>
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/applewatch4.png" width="120px">
              <p>Apple Watch S8</p>
            </div>
          </div>
        </div>
`
}


function airpods() {
  const navPods = document.getElementById('navPods');
  const navbar = document.getElementById('navbarr');
  
  navbar.innerHTML =  `
  <div class="navIp" style="display: flex; gap: 10rem;">
          <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 2rem;">
              <img src="/src/images/airpodssssss.png" width="158px">
              <p>Ver todos</p>
          </div>
          <div id="airpods" style="display: flex; gap: 3rem;">
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/airpodspro.png" width="120px">
              <p>Apple Watch S6</p>
            </div>
            <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
              <img src="/src/images/airpods2.png" width="120px">
              <p>Apple Watch S7</p>
            </div>
          </div>
        </div>
`
}

function ofertas() {
  const navOf = document.getElementById('navOf');
  const navbar = document.getElementById('navbarr');
  
  navbar.innerHTML =  `
  <div class="navIp" style="display: flex; gap: 10rem;">
  <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 2rem;">
      <img src="/src/images/ver todos.png" width="185px">
      <p>Ver todos</p>
  </div>
  <div id="Ipadsss" style="display: flex; gap: 3rem;">
    <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
      <img src="/src/images/sacolinha.png" width="120px" >
      <p>Pronta Entrega</p>
    </div>
    <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
      <img src="/src/images/seminovo.png" width="120px">
      <p>SemiNovos</p>
    </div>
    <div class="todos" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
      <img src="/src/images/importados.png" width="120px">
      <p>Importados</p>
    </div>
  </div>
</div>
`
}



function restoreText() {
  const navbar = document.getElementById('navbarr');
  navbar.innerText = ''; // Restaurar o texto original
}
