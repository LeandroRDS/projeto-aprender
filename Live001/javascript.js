

  document.getElementById ('id-img-olho').addEventListener('click', clique)
  function clique(){
    if( document.getElementById('id-input-senha').type === 'password'){
        document.getElementById('id-input-senha').type = 'text'
        document.getElementById('id-img-olho').src = 'imagens/olho_aberto.png'
        document.getElementById('id-img-iris').src = 'imagens/iris.png'

        const iris = document.getElementById('id-img-iris');

        document.addEventListener("mousemove", (e) => {
          const cursorX = e.clientX;
          const cursorY = e.clientY;
    
          // Posicionar a bolinha na posição do cursor
          iris.style.left = `${cursorX}px`;
          iris.style.top = `${cursorY}px`;
});

    }else{
        document.getElementById('id-input-senha').type = 'password'
        document.getElementById('id-img-olho').src = 'imagens/olho_fechado.png'
        document.getElementById('id-img-iris').src = ''
    }
        
  };

