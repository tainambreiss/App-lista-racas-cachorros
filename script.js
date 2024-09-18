document.addEventListener('DOMContentLoaded', () => {
    const containerBotoesRacas = document.getElementById('botoes-racas');
    const galeriaImagens = document.getElementById('galeria-imagens');
  
    // Função para obter a lista de raças e criar botões
    function carregarRacas() {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then(resposta => resposta.json())
        .then(dados => {
          const racas = dados.message;
          Object.keys(racas).forEach(raca => {
            const botao = document.createElement('button');
            botao.textContent = raca;
            botao.addEventListener('click', () => buscarImagensRaca(raca));
            containerBotoesRacas.appendChild(botao);
          });
        })
        .catch(erro => console.error('Erro ao buscar raças:', erro));
    }
  
    // Função para obter imagens da raça e exibi-las
    function buscarImagensRaca(raca) {
      fetch(`https://dog.ceo/api/breed/${raca}/images/random/4`)
        .then(resposta => resposta.json())
        .then(dados => {
          galeriaImagens.innerHTML = ''; // Limpa imagens anteriores
          dados.message.forEach(urlImagem => {
            const img = document.createElement('img');
            img.src = urlImagem;
            galeriaImagens.appendChild(img);
          });
        })
        .catch(erro => console.error('Erro ao buscar imagens:', erro));
    }
  
    // Carrega as raças ao iniciar
    carregarRacas();
  });
  