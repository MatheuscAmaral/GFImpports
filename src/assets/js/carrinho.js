if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "/src/assets/html/login.html";
  } 

function goBack() {
    window.history.back();
}

       
  // Função para obter o ID do produto da URL da página
  function getProductIdFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return parseInt(urlParams.get('id'));
    }
    
    // Função para encontrar o produto com base no ID
    function findProductById(productId) {
    return products.find(product => product.id === productId);
    }
    
    const productDetailsContainer = document.getElementById('itens-carrinho');
    
    const preco = document.getElementById('pagar')
    // Função para exibir os detalhes do produto na página
    function showProductDetails(product) {
    
    
    
    const htmlContent = `
      <li class="carrinho-item">
        <div class="imagem">
          <img src=${product.poster}>
        </div>
        <div class="info">
          <div id="top">
            <h4>${product.title}</h4>
            <i class="fa-solid fa-trash-can fa-sm" style="color: #6e6e6e;" onclick="deleteP()"></i>
          </div>
          <div class="preco">
            <p>R$ ${product.price}</p>
            <div class="contador">
              <i class="bx bx-minus" id="minus"></i>
              <span id="value">1</span>
              <i class="bx bx-plus" id="plus"></i>
            </div>
          </div>
        </div>
      </li>
    `;
    enviarMensagemNoWhatsApp();

 
    function enviarMensagemNoWhatsApp() {
        const userLogado = JSON.parse(localStorage.getItem("userLogado"));
      // Número de telefone para o qual você deseja enviar a mensagem
      const numeroDeTelefone = "5531997066818";
  
      // Texto da mensagem, incluindo o título do produto
      const mensagem = `Ola%20GF%20Impports, Meu nome é ${userLogado.nome}, %20dei%20uma%20olhada%20nos%20produtos%20do%20site%20e%20me%20interessei%20pelo%20produto,%20${product.title}, no valor de ${product.price} reais, ${product.type}!`;
  
      // Construa o URL do link do WhatsApp
      const urlDoWhatsApp = `https://api.whatsapp.com/send?phone=${numeroDeTelefone}&text=${mensagem}`;
  
      // Redirecione o navegador para o link do WhatsApp
      window.location.href = urlDoWhatsApp;
  }
  
  // Exemplo de uso: Chame essa função com o título do produto desejado

  
    
    // Adicionar o conteúdo HTML ao contêiner na página
    productDetailsContainer.innerHTML = htmlContent;
    

      document.getElementById('plus').addEventListener('click', () => {
        let result = parseInt(value.innerText);
        
        result++;
        value.innerText = result;
        preco.innerHTML = `Pagar R$${parseFloat(product.price * result).toFixed(2)}`
      })

      document.getElementById('minus').addEventListener('click', () => {
        let result = parseInt(value.innerText);

        result = result - 1;
        if (result <= 0) {
          alert('Você não pode comprar zero unidades de um produto.')
        }

        else {
          value.innerText = result;
          preco.innerHTML = `Pagar R$${parseFloat(product.price * result).toFixed(2)}`
        }
      })

      preco.innerHTML = `Pagar R$${product.price}`

    }
    
    function deleteP() {
      productDetailsContainer.innerHTML = `<div id="semProdutos" style="display: flex; flex-direction: column; gap: 1rem; align-items: center; margin-top: 30px; text-align: center; border: 1px solid rgb(179, 179, 179); padding: 20px;">
      <i class="fa-solid fa-cart-shopping fa-xl" style="color: #000000; margin-top: 30px;"></i>
      <h5><strong>SEU CARRINHO ESTÁ VAZIO</strong></h5>
      <p style="font-size: 13px;">Navegue agora pelas categorias de nossa loja e escolha os produtos desejados para adicionar em seu carrinho de compras</p>
   </div>`
      preco.innerHTML = `Pagar R$0.00`
    }
    
    // Função principal para obter o ID do produto da URL, buscar o produto e exibir os detalhes
    function loadProductDetails() {
    const productId = getProductIdFromURL();
    const product = findProductById(productId);
    
    if (product) {
      showProductDetails(product);
      const semProdutos = document.getElementById('semProdutos')
      semProdutos.innerHTML = ``
      semProdutos.style.border = 'none'
      semProdutos.style.marginTop = '0px'
      function deleteP() {
        const productId = getProductIdFromURL();
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
        // Encontrar o índice do produto no carrinho com base no ID
        const productIndex = cartItems.findIndex(product => product.id === productId);
    
    
        if (productIndex !== -1) {
          // Remover o produto do carrinho pelo índice
          cartItems.splice(productIndex, 1);
    
          // Atualizar o carrinho no localStorage
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
          // Recarregar a exibição do carrinho
          loadCart();
        }
      }
    
    } 
    else {
      console.error('Não há nenhum produto no carrinho');
    }
    }
    
    // Carregar os detalhes do produto quando a página for carregada
    
    window.onload = loadProductDetails;
    
    
    

