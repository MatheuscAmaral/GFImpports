function goBack() {
    window.history.back();
  }

  const width = innerWidth
  const container = document.getElementById('container')

  if (width > 500) {
    container.innerHTML = `  <section id="register1"> 
        <div class="title">
            <h1>Já tem conta?</h1>
        </div>
        <p>Para entrar em nosso site, faça login <br> com suas informações</p>
        <a href="/src/assets/html/login.html"><button id="button">Entrar</button></a>
    </section>
    <section id="enter1">
        <a href="/home.html"><img src="/src/images/logo.png" width="135px"></a>
        <div id="top">
        <div class="title">
            <h1>Criar Conta</h1>
        </div>
        </div>
        <div class="container">
            <div class="card">
            <section class="area-login">
                <div class="login" style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; align-items: center;">
                  <div id="msgError"></div>
                  <div id="msgSuccess"></div>
                    <div class="label-float"  style="display: flex; flex-direction: column; font-size: 13px;" >
                        <input type="text" id="nome" placeholder="Nome"  style="width: 260px; padding: 12px;" required />                 
                      <label id="labelNome" for="nome"></label>
                    </div>
            
                    <div class="label-float" style="display: flex; flex-direction: column; font-size: 13px;">
                      <input type="text" id="usuario" placeholder="Usuário"  style="width: 260px; padding: 12px;" required />
                      <label id="labelUsuario" for="usuario"></label>
                    </div>
            
                    <div class="label-float" style="display: flex; flex-direction: column; font-size: 13px;">
                      <input type="password" id="senha" placeholder="Sua senha" style="width: 260px; padding: 12px;" required />
                      <label id="labelSenha" for="senha" style="display: flex; flex-direction: column;"></label>
                    </div>
            
                    <div class="label-float" style="display: flex; flex-direction: column; font-size: 13px;">
                      <input type="password" id="confirmSenha" placeholder="Confirmar senha" style="width: 260px; padding: 12px;" required />
                      <label id="labelConfirmSenha" for="confirmSenha" style="display: flex; flex-direction: column;"></label>
                    </div>
            
                    <div class="justify-center">
                      <input type="submit" id="cadastrar" value="Cadastrar" onclick="cadastrar()" style="width: 290px; padding: 12px; background-color: black; color: white; border: none;transition: 0.4s; border-radius: 6px;"></input>
                    </div>
                    <span style="font-size: 13px;">Já tem uma conta? <a href="/src/assets/html/login.html" style="text-decoration: none;">Entrar</a></span>
                  </div>
            </section>
            </div>
            </div>
    </section>
`
  }

  else {
    container.innerHTML = `
    <section id="enter1">
        <a href="/home.html"><img src="/src/images/logo.png" width="135px"></a>
        <div id="top">
        <div class="title">
            <h1>Criar Conta</h1>
        </div>
        </div>
        <div class="container">
            <div class="card">
            <section class="area-login">
                <div class="login" style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; align-items: center;">
                  <div id="msgError"></div>
                  <div id="msgSuccess"></div>
                    <div class="label-float"  style="display: flex; flex-direction: column; font-size: 13px;" >
                      <input type="text" id="nome" placeholder="Nome"  style="width: 260px; padding: 12px;" required />
                      <label id="labelNome" for="nome"></label>
                    </div>
            
                    <div class="label-float" style="display: flex; flex-direction: column; font-size: 13px;">
                      <input type="text" id="usuario" placeholder="Usuário"  style="width: 260px; padding: 12px;" required />
                      <label id="labelUsuario" for="usuario"></label>
                    </div>
            
                    <div class="label-float" style="display: flex; flex-direction: column; font-size: 13px;">
                      <input type="password" id="senha" placeholder="Sua senha" style="width: 260px; padding: 12px;" required />
                      <label id="labelSenha" for="senha" style="display: flex; flex-direction: column;"></label>
                    </div>
            
                    <div class="label-float" style="display: flex; flex-direction: column; font-size: 13px;">
                      <input type="password" id="confirmSenha" placeholder="Confirmar senha" style="width: 260px; padding: 12px;" required />
                      <label id="labelConfirmSenha" for="confirmSenha" style="display: flex; flex-direction: column;"></label>
                    </div>
            
                    <div class="justify-center">
                      <input type="submit" id="cadastrar" value="Cadastrar" onclick="cadastrar()" style="width: 290px; padding: 12px; background-color: black; color: white; border: none;transition: 0.4s; border-radius: 6px;"></input>
                    </div>
                    <span style="font-size: 13px;">Já tem uma conta? <a href="/src/assets/html/login.html" style="text-decoration: none;">Entrar</a></span>
                  </div>
            </section>
            </div>
            </div>
    </section>
`
  }
  
  document.addEventListener("keypress", function(e){
    if (e.key === 'Enter'){
      var btn = document.querySelector("#cadastrar");
  
      btn.click();
    }
  });
  
  let nome = document.querySelector('#nome')
  let labelNome = document.querySelector('#labelNome')
  let validNome = false
  
  let usuario = document.querySelector('#usuario')
  let labelUsuario = document.querySelector('#labelUsuario')
  let validUsuario = false
  
  let senha = document.querySelector('#senha')
  let labelSenha = document.querySelector('#labelSenha')
  let validSenha = false
  
  let confirmSenha = document.querySelector('#confirmSenha')
  let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
  let validConfirmSenha = false
  
  let msgError = document.querySelector('#msgError')
  let msgSuccess = document.querySelector('#msgSuccess')
  const check = document.getElementById('check')
  
  nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
      labelNome.setAttribute('style', 'color: red;  font-size: 12px')
      labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
      nome.setAttribute('style', 'border-color: red; width: 260px; padding: 12px;')
      validNome = false 
    }
    
    if(nome.value.length >= 20) {
      labelNome.setAttribute('style', 'color: red;  font-size: 12px')
      labelNome.innerHTML = 'Nome *Insira no máximo 20 caracteres'
      nome.setAttribute('style', 'border-color: red; width: 260px; padding: 12px;')
      validNome = false
    }

    else {
      labelNome.setAttribute('style', 'color: green;  font-size: 12px')
      labelNome.innerHTML = ''
      nome.setAttribute('style', 'border-color: green; width: 260px; padding: 12px;')
      validNome = true
    }
  })

  usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
      labelUsuario.setAttribute('style', 'color: red;  font-size: 12px')
      labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
      usuario.setAttribute('style', 'border-color: red; width: 260px; padding: 12px;')
      validUsuario = false
    } else {
      labelUsuario.setAttribute('style', 'color: green;  font-size: 12px')
      labelUsuario.innerHTML = ''
      usuario.setAttribute('style', 'border-color: green; width: 260px; padding: 12px;')
      validUsuario = true
    }
  })
  
  senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
      labelSenha.setAttribute('style', 'color: red;  font-size: 12px')
      labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
      senha.setAttribute('style', 'border-color: red; width: 260px; padding: 12px;')
      validSenha = false
    } else {
      labelSenha.setAttribute('style', 'color: green;  font-size: 12px')
      labelSenha.innerHTML = ''
      senha.setAttribute('style', 'border-color: green; width: 260px; padding: 12px;')
      validSenha = true
    }
  })
  
  confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmSenha.value){
      labelConfirmSenha.setAttribute('style', 'color: red;  font-size: 12px')
      labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
      confirmSenha.setAttribute('style', 'border-color: red; width: 260px; padding: 12px;')
      validConfirmSenha = false
    } else {
      labelConfirmSenha.setAttribute('style', 'color: green; font-size: 12px')
      labelConfirmSenha.innerHTML = ''
      confirmSenha.setAttribute('style', 'border-color: green; width: 260px; padding: 12px;')
      validConfirmSenha = true
    }
  })
  
  function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmSenha){
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
      
      listaUser.push(
      {
        nomeCad: nome.value,
        userCad: usuario.value,
        senhaCad: senha.value
      }
      )
      
      localStorage.setItem('listaUser', JSON.stringify(listaUser))
      
     
      msgSuccess.setAttribute('style', 'display: block')
      msgSuccess.innerHTML = '<strong style="font-size: 14px;">Cadastrando usuário...</strong>'
      msgError.setAttribute('style', 'display: none')
      msgError.innerHTML = ''
      
      window.location.href = '/src/assets/html/login.html'
    
      
    } else {
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = '<strong style="font-size: 12px; color: red">Preencha os campos corretamente antes de cadastrar</strong>'
      msgSuccess.innerHTML = ''
      msgSuccess.setAttribute('style', 'display: none')
    }
  }
  
  btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  })
  
  btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmSenha')
    
    if(inputConfirmSenha.getAttribute('type') == 'password'){
      inputConfirmSenha.setAttribute('type', 'text')
    } else {
      inputConfirmSenha.setAttribute('type', 'password')
    }
  })