const width = window.innerWidth;
const cabecalho = document.getElementById("cabecalho");
const searchbar = document.getElementById("searchbar");
const mobilee = document.getElementById('mobile');
const main = document.getElementById('main');
const proteinas = document.getElementById('proteinas');

if (width <= 500) {
  if (localStorage.getItem("token") == null) {
    cabecalho.innerHTML = `<header id="cabecalho">
    <a onclick="mobile()"><i class="fa-solid fa-bars-staggered fa-2xl" style="color: #000000;"></i></a>
  <a href="/home.html"><img class="cabecalho-logo" src="/src/images/logo.png" style="margin-left: 0px"></a>
  <div class="deslogar">
          <a href="/src/assets/html/carrinho.html"><i class="fa-solid fa-cart-shopping fa-xl" style="color: #000000;"></i></a>
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
    <input class="search_input"  id="barraPesquisa" onclick="searchh()" type="text" name="" placeholder="Qual dispositivo apple você precisa?">
    <a href="#" class="search_icon"><i class="fas fa-search" pesquisarProdutos(termo)></i></a>
  </div>
`;
    cabecalho.style.display = "flex";
    cabecalho.style.flexDirection = "column";
    cabecalho.style.gap = '0rem'
    cabecalho.style.padding = '20px'
    hidden.document.getElementById.add.hidden
    
}
  else {
    cabecalho.innerHTML = `<header id="cabecalho">
      <a onclick="mobile()"><i class="fa-solid fa-bars-staggered fa-2xl" style="color: #000000;"></i></a>
    <a href="/home.html"><img class="cabecalho-logo" src="/src/images/logo.png" style="margin-left: 0px"></a>
    <div class="deslogar">
            <a href="/src/assets/html/carrinho.html"><i class="fa-solid fa-cart-shopping fa-xl" style="color: #000000;"></i></a>
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
    <input class="search_input"  id="barraPesquisa" onclick="searchh()" type="text" name="" placeholder="Qual dispositivo apple você precisa?">
    <a href="#" class="search_icon"><i class="fas fa-search" pesquisarProdutos(termo)></i></a>
  </div>`;
      cabecalho.style.display = "flex";
      cabecalho.style.flexDirection = "column";
      cabecalho.style.gap = '0rem'
      cabecalho.style.padding = '20px'
  }
} 



else {
  if (localStorage.getItem("token") != null) {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));

    const icon = document.getElementById("icon");
    icon.innerHTML = `
        <a><i class="fa-solid fa-user fa-lg" style="color: #000000;"></i></a>
        <div class="name_user">
        <span style="font-size: 13px"> Olá, ${userLogado.nome}</span>
        </div>
        <div class="deslogar">
          <a  href="home.html" id="botao" onclick="sair()"><i class="fa-solid fa-right-from-bracket fa-lg" style="color: #000000;" ></i></a>
        </div>
        <a href="/src/assets/html/carrinho.html"><i class="fa-solid fa-cart-shopping fa-lg" style="color: #000000;"></i></a>`;

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

function mobile() {
  if (localStorage.getItem("token") == null){
    mobilee.innerHTML = `
  <div id="superior">
    <div id="superiorTop">
      <div id="user"><strong>Olá, Visitante</strong></div>
      <a href=""> <i class="fa-solid fa-xmark fa-xl" style="color: #171616;"></i></a>
    </div>
    <div id="superiorMid">
      <div id="enter">
        <i class="fa-solid fa-right-to-bracket fa-xl" style="color: #000000;"></i>
        <a href="/src/assets/html/login.html">Entrar/Cadastrar</a>
      </div>
    </div>
    <div id="low">
    <div class="mobileCard" style="color: #fff;">
    <a  style="color: #fff;" href="/src/assets/html/iphones.html">iPhones</a>
    </div>
    <div class="mobileCard">
      <a href="/src/assets/html/macbooks  .html">MacBooks</a>
    </div>
    <div class="mobileCard">
      <a href="/src/assets/html/ipads.html">iPads</a>
    </div>
    <div class="mobileCard">
    <a href="/src/assets/html/applewatch.html">Apple Watch</a>
    </div>
    <div class="mobileCard">
    <a href="/src/assets/html/airpods.html">AirPods</a>
    </div>
    <div class="mobileCard">
    <a href="https://api.whatsapp.com/send/?phone=5531997066818&text=ola&type=phone_number&app_absent=0"> Entre em contato conosco</a>
    </div>
    </div>
  </div>`
  main.innerHTML = ''
  }
  else {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));

    mobilee.innerHTML = `
    <div id="superior">
      <div id="superiorTop">
        <div id="user"><strong> Olá, ${userLogado.nome}</strong></div>
        <a href=""> <i class="fa-solid fa-xmark fa-xl" style="color: #171616;"></i></a>
      </div>
      <div id="superiorMid">
        <div id="enter">
          <div class="deslogar">
            <a  href="home.html" id="botao" onclick="sair()"><i class="fa-solid fa-right-from-bracket fa-lg" style="color: #000000;" ></i></a>
          </div>
        </div>
      </div>
      <div id="low">
      <div class="mobileCard" style="background-color: #1e1d1d;">
        <a style="color: #fff;" href="/src/assets/html/iphones.html">iPhones</a>
      </div>
      <div class="mobileCard" style="background-color: #1e1d1d;">
        <a style="color: #fff;"  href="/src/assets/html/macbooks.html">MacBooks</a>
      </div>
      <div class="mobileCard" style="background-color: #1e1d1d;">
        <a style="color: #fff;" href="/src/assets/html/ipads.html">iPads</a>
      </div>
      <div class="mobileCard" style="background-color: #1e1d1d;">
      <a style="color: #fff;" href="/src/assets/html/applewatch.html">Apple Watch</a>
      </div>
      <div class="mobileCard" style="background-color: #1e1d1d;">
      <a style="color: #fff;" href="/src/assets/html/airpods.html">AirPods</a>
      </div>
      <div class="mobileCard" style="background-color: #1e1d1d;">
      <a style="color: #fff;"href="https://api.whatsapp.com/send/?phone=5531997066818&text=ola&type=phone_number&app_absent=0"> Entre em contato conosco</a>
      </div>
  </div>
    </div>`
    main.innerHTML = ''
  }

}

function mobile() {
  if (localStorage.getItem("token") == null){
    mobilee.innerHTML = `
  <div id="superior">
    <div id="superiorTop">
      <div id="user"><strong>Olá, Visitante</strong></div>
      <a href=""> <i class="fa-solid fa-xmark fa-xl" style="color: #171616;"></i></a>
    </div>
    <div id="superiorMid">
      <div id="enter">
        <i class="fa-solid fa-right-to-bracket fa-xl" style="color: #000000;"></i>
        <a href="/src/assets/html/login.html">Entrar/Cadastrar</a>
      </div>
    </div>
    <div id="low">
          <div class="mobileCard" style="background-color: #1e1d1d;">
            <a style="color: #fff;" href="/src/assets/html/iphones.html">iPhones</a>
          </div>
          <div class="mobileCard" style="background-color: #1e1d1d;">
            <a style="color: #fff;"  href="/src/assets/html/macbooks.html">MacBooks</a>
          </div>
          <div class="mobileCard" style="background-color: #1e1d1d;">
            <a style="color: #fff;" href="/src/assets/html/ipads.html">iPads</a>
          </div>
          <div class="mobileCard" style="background-color: #1e1d1d;">
          <a style="color: #fff;" href="/src/assets/html/applewatch.html">Apple Watch</a>
          </div>
          <div class="mobileCard" style="background-color: #1e1d1d;">
          <a style="color: #fff;" href="/src/assets/html/airpods.html">AirPods</a>
          </div>
          <div class="mobileCard" style="background-color: #1e1d1d;">
          <a style="color: #fff;"href="https://api.whatsapp.com/send/?phone=5531997066818&text=ola&type=phone_number&app_absent=0"> Entre em contato conosco</a>
          </div>
      </div>
  </div>`
  main.innerHTML = ''
  }
  else {
    const userLogado = JSON.parse(localStorage.getItem("userLogado"));

    mobilee.innerHTML = `
    <div id="superior">
      <div id="superiorTop">
        <div id="user"><strong> Olá, ${userLogado.nome}</strong></div>
        <a href="#"> <i class="fa-solid fa-xmark fa-xl" style="color: #171616;"></i></a>
      </div>
      <div id="superiorMid">
        <div id="enter">
        <div class="deslogar">
          <a href="/home.html" id="botao" onclick="sair()" style="display: flex; gap: .5rem"><i class="fa-solid fa-right-from-bracket fa-lg" style="color: #000000;" ></i>Sair</a>
        </div>
      </div>
        
      </div>
      <div id="low">
          <div class="mobileCard" style="background-color: #1e1d1d;">
            <a style="color: #fff;" href="/src/assets/html/iphones.html">iPhones</a>
          </div>
          <div class="mobileCard" style="background-color: #1e1d1d;">
            <a style="color: #fff;"  href="/src/assets/html/macbooks.html">MacBooks</a>
          </div>
          <div class="mobileCard" style="background-color: #1e1d1d;">
            <a style="color: #fff;" href="/src/assets/html/ipads.html">iPads</a>
          </div>
          <div class="mobileCard" style="background-color: #1e1d1d;">
          <a style="color: #fff;" href="/src/assets/html/applewatch.html">Apple Watch</a>
          </div>
          <div class="mobileCard" style="background-color: #1e1d1d;">
          <a style="color: #fff;" href="/src/assets/html/airpods.html">AirPods</a>
          </div>
          <div class="mobileCard" style="background-color: #1e1d1d;">
          <a style="color: #fff;"href="https://api.whatsapp.com/send/?phone=5531997066818&text=ola&type=phone_number&app_absent=0"> Entre em contato conosco</a>
          </div>
      </div>
    </div>`
    main.innerHTML = ''
  }
}

function goBack() {
  window.history.back();
  main.style.display = 'block'
}




function searchh() {
  window.location.href = '/src/assets/html/search.html'
}


function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
}